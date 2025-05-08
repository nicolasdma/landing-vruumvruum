/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bvh, Center } from "@react-three/drei";

function Model(props: any) {
  const { nodes } = useGLTF(
    "/Infernal_Flamekeeper_0508023418_texture.glb"
  ) as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}



// function Model1(props: any) {
//   const { nodes } = useGLTF(
//     "/Mystic_Oracle_0508015800_texture.glb"
//   ) as any;
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.mesh_0.geometry}
//         material={nodes.mesh_0.material}
//       />
//     </group>
//   );
// }

useGLTF.preload("/Infernal_Flamekeeper_0508023418_texture.glb");
// useGLTF.preload("/Mystic_Oracle_0508015800_texture.glb");

const Laboratory = () => {
  React.useEffect(() => {
    window.history.pushState({}, '', '/dashboard/lab');
  }, []);
  
  return (
    <div className="relative px-6 py-10">
      {/* Background mask effect */}
      <div className="absolute inset-0 bg-black z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-white">
        {/* Intro Header */}
        <div className="mb-10">
          <div className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Welcome to the Lab 🧪
          </div>
          <p className="text-neutral-400 mt-4 text-lg max-w-2xl">
            This is the playground — a space where we can explore ideas freely,
            test creative concepts, and bring wild experiments to life. From 3D
            visuals to shaders and interactive tools, it’s all about pushing
            boundaries and finding new inspiration together.
          </p>
          <p className="text-neutral-500 mt-2 text-sm">
            Nothing here is final — it’s meant to spark thought, conversation,
            and maybe your next big idea.
          </p>
        </div>

        {/* Canvas Block */}
        <div className="w-full max-w-5xl aspect-[16/9] mx-auto">
          <Canvas camera={{ fov: 50, position: [0, 0, 1.3] }}>
            <Bvh>
              <Center>
                <OrbitControls
                  enableDamping={true}
                  dampingFactor={0.2}
                  autoRotate={true}
                  enableZoom={false}
                  autoRotateSpeed={0.25}
                  minDistance={1}
                  maxDistance={3}
                />
                <ambientLight intensity={3} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Model
                  position={[-1.2, -1.2, 0]}
                  rotation={[0, 0, 0]}
                  scale={0.5}
                />
              </Center>
            </Bvh>
          </Canvas>

          {/* <Canvas camera={{ fov: 50, position: [0, 0, 1.3] }}>
            <Bvh>
              <Center>
                <OrbitControls
                  enableDamping={true}
                  dampingFactor={0.2}
                  autoRotate={true}
                  enableZoom={false}
                  autoRotateSpeed={0.5}
                  minDistance={1}
                  maxDistance={3}
                />
                <ambientLight intensity={3} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Model1
                  position={[-1.2, -1.2, 0]}
                  rotation={[0, 0, 0]}
                  scale={0.5}
                />
              </Center>
            </Bvh>
          </Canvas> */}
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
