import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/doji_diamond_ring.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.White_Gold}
        position={[0, 0, 0.000688]}
        scale={[1.015752, 0.865324, 1.019256]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.White_Gold}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.White_Gold_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.Material_2}
        position={[0.000056, 0.000191, 0.10281]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.414152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Material_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.Material_2}
        position={[0.036322, -0.000439, -0.070929]}
        rotation={[0.125017, 0.941536, 0.329243]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.White_Gold}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.material_0}
      />
    </group>
  )
}

useGLTF.preload('/models/doji_diamond_ring.glb')