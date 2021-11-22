import React,{useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment} from "@react-three/drei";
import Model from "./Model"
import {makeStyles, useTheme} from "@mui/styles"
import { Box } from '@mui/system';
import {useMediaQuery} from "@mui/material"

function ThreeGIFT() {
    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Box  className={classes.canvas}
            >
            <Canvas dpr={[1, 2]}> 
                <directionalLight position={[10, 10, 0]} intensity={1.5} />
                <directionalLight position={[-10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, 20, 0]} intensity={1.5} />
                <directionalLight position={[0, -10, 0]} intensity={0.25} />
                {isMobile ?(
                    <Rotate  position={[1, 1.5, -2.5]} scale={1.1}>
                        <Suspense fallback={null}>
                            <Model  />
                            <OrbitControls />
                            <Environment preset="sunset" background />  
                        </Suspense>
                    </Rotate> 
                ) 
                : ( 
                <Rotate  position={[1, 1.5, -2.5]} scale={1}>
                    <Suspense fallback={null}>
                        <Model  />
                        <OrbitControls />
                        <Environment preset="sunset" background />  
                    </Suspense>
                </Rotate>
                )}
            </Canvas>
        </Box>
    )
}
const useStyles = makeStyles( (theme) => ({
    canvas:{
        width: "100%",
        height: "400px",
        margin: "0 auto",
        padding: "10px",
        [theme.breakpoints.down("md")]:{
            height: "300px",
        }
    }
}))
function Rotate(props) {
    const ref = useRef()
    useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime))
    return <group ref={ref} {...props} />
}

export default ThreeGIFT
