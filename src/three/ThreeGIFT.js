import React,{useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment} from "@react-three/drei";
import Model from "./Model"

function ThreeGIFT() {

    return (
        <Canvas style={{width:"1140px", height:"400px", margin:"0 auto", padding: "10px"}} 
            dpr={[1, 2]}>
            <directionalLight position={[10, 10, 0]} intensity={1.5} />
            <directionalLight position={[-10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, 20, 0]} intensity={1.5} />
            <directionalLight position={[0, -10, 0]} intensity={0.25} />
            <Rotate position={[1, 1.5, -1.0]} scale={1}>
                <Suspense fallback={null}>
                    <Model  />
                    <OrbitControls />
                    <Environment preset="sunset" background />
                </Suspense>
            </Rotate>
        </Canvas>
    )
}
function Rotate(props) {
    const ref = useRef()
    useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime))
    return <group ref={ref} {...props} />
}

export default ThreeGIFT
