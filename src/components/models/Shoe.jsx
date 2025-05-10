import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Shoe(props) {
  const { nodes, materials } = useGLTF("/models/shoes_outdoor.glb");
  const modelRef = useRef(null);
  useFrame(() => {
    modelRef.current.rotation.y -= 0.001;
  });
  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group scale={0.45} rotation={[0.6, -0.55, 0]} position={[0, -1, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes["GERRIT_Material_#25_0"].geometry}
            material={materials.Material_25}
          />
          <mesh
            geometry={nodes["GERRIT_Material_#25_0_1"].geometry}
            material={materials.Material_25}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/shoes_outdoor.glb");

export default Shoe;
