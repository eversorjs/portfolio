import React, { Suspense } from "react";
import {Canvas} from '@react-three/fiber'
import Alien_egg from './Alien_egg'
import { OrbitControls, Stage } from "@react-three/drei";
// import styled from "styled-components";




export  const Illustration = () => {
  return (
    <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Alien_egg />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
     {/* <OrbitControls enableZoom={false}/> */}
    </Canvas>
  )
}