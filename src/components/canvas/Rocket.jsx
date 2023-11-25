import * as THREE from 'three'
import { Suspense, useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Rocket = ({ isMobile }) => {
  const rocket = useGLTF('./cosmonaut_on_a_rocket/scene.gltf');

  const mixer = useRef();

  useEffect(() => {
    mixer.current = new THREE.AnimationMixer(rocket.scene);
    const action = mixer.current.clipAction(rocket.animations[0]);
    action.play();
  }, [rocket])

  useFrame((state, delta) => {
    if( delta !== undefined ) mixer.current.update(delta);
  })

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <ambientLight intensity={0.5} />
      <directionalLight shadow intensity={5} position={[0,5,-20]} />
      <primitive
        object={rocket.scene}
        scale={isMobile? 2.5 : 2.5}
        position={isMobile? [60, -700, -10] : [-50, -710, -15.5]}
        rotation={[-1, 0.05, 0.4]}
      />
    </mesh>
  )
}

const RocketCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      ref={ref}
      frameloop={inView ? 'always' : 'never'}
      shadows
      dpr={[1,2]}
      camera={{
        position: [66, 170, 187],
        fov: 90,
        rotation: [-0.46, 0.284, 0.013],
        far: 1000,
        focus: 10,
        filmGauge: 35
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Rocket isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default RocketCanvas