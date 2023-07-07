import React from 'react'
import {RenderTexture} from '@react-three/drei'
import {Text} from '@react-three/drei'
import {PerspectiveCamera} from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const Cube = () => {

    const textRef = useRef()
    useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
        
      
  return (
    <mesh>
  <boxGeometry />
  <meshStandardMaterial >
    <RenderTexture attach="map">
      <PerspectiveCamera makeDefault position={[0,0,5]} /> 
      <color attach="background" args={["#e04a9d"]} />
      <Text ref={textRef} fontsize={3} color='black'>
          sukhdevjs </Text>
    </RenderTexture>
   
  </meshStandardMaterial>
</mesh>
  )
}

