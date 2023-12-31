/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 alien_egg.gltf --transform
Author: scandicactus (https://sketchfab.com/scandicactus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/alien-egg-c4384f2100cc46cba2dd9c923b555d62
Title: Alien egg
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alien_egg-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5, 2, -5]} >
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.030']} position={[-0.116, -0.07, -0.014]} rotation={[Math.PI / 2, 0, 2.126]} scale={2.622} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} position={[-0.116, -0.07, -0.014]} rotation={[Math.PI / 2, 0, 2.126]} scale={2.622} />
    </group>
    </group>
  )
}

useGLTF.preload('/alien_egg-transformed.glb')
