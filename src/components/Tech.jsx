import React, { Suspense } from 'react';
import { Flex, Box } from '@react-three/flex';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import { OrbitControls, Preload, Center } from '@react-three/drei';

import { Ball } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CanvasLoader from './Loader';

const Tech = () => {
  const { ref, inView } = useInView();

  return (
    <div className="w-100% h-[325px]">
    <Canvas
      ref={ref}
      frameloop={inView ? 'always' : 'never'}
      gl={{ preserveDrawingBuffer: true }}
      orthographic={true}
      camera={{
        position: [22.5,-10,5],
        zoom: 15
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls target={[22.5,-10,0]} enableZoom={true}/>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={2} position={[0, 2, 5]} />
        <Flex
          size={[45,50,1]}
          justifyContent="center"
          flexDirection="row"
          flexWrap="wrap"
        >
          {technologies.map((technologie) => (
            <Box p={3} centerAnchor key={technologie.name}>
              <Ball imgUrl={technologie.icon}/>
            </Box>
          ))}
        </Flex>
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  )
}

export default SectionWrapper(Tech, "")