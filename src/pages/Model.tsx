/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/base_basic_pbr.glb') as any
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.CustomMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/base_basic_pbr.glb')
