/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 ball.gltf --transform
Author: Ivanix88 (https://sketchfab.com/Ivanix88)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/christmas-ball-36868988285f4b60b3e389e1aa1bab3f
Title: Christmas Ball
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/ball-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5, 2, -5]} >
      <mesh geometry={nodes.glass_glass_0.geometry} material={materials.glass} position={[0, 110, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.christmass_ball_inside_0.geometry} material={materials.inside} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.christmass_ball_ouline_0.geometry} material={materials.ouline} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
    </group>
  )
}

useGLTF.preload('/ball-transformed.glb')
