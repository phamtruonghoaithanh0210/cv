import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/dog.glb')
    return (
    <group ref={group} {...props} dispose={null}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[-3.4, 0, -2.95]}
        />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.main.geometry}
        material={materials.palette}
        position={[3.69, -3, -2.2]}
        rotation={[Math.PI / 2, 0, 0]}
        />
    </group>
    )
}

useGLTF.preload('/dog.glb')


