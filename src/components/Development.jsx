import React, { Suspense } from "react";
import {Canvas} from '@react-three/fiber'
import Lap from './Lap'
import { OrbitControls, Stage } from "@react-three/drei";
// import styled from "styled-components";




export const Development = () => {
  return (
    <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Lap />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
     {/* <OrbitControls enableZoom={false}/> */}
    </Canvas>
  )
}
