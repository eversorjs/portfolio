import React, { Suspense } from "react";
import {Canvas} from '@react-three/fiber'

import Ball from './Ball'
import { OrbitControls, Stage } from "@react-three/drei";




export const Webdesign = () => {
  return (
    <Canvas>
         <Suspense fallback={null}>
           <Stage environment="city" intensity={1}>
            <Ball />
           </Stage>
           <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
     </Canvas>
  )
}
