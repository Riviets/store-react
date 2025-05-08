import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Watch(props) {
  const { nodes, materials } = useGLTF("/models/wrist_watch.glb");
  const modelRef = useRef();
  useFrame(() => {
    modelRef.current.rotation.y -= 0.003;
  });
  return (
    <group
      ref={modelRef}
      position={[10.5, -3.5, 0]}
      rotation={[-0.1, -0.7, -0.35]}
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.FB_IMG_15851297372435228}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.bodychains}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.bodychains}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.bodychains}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.bodymain}
        />
        <mesh geometry={nodes.Object_7.geometry} material={materials.nutstwo} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/wrist_watch.glb");
