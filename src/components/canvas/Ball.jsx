import { Decal, Float, useTexture } from '@react-three/drei';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.25} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25 ]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export default Ball