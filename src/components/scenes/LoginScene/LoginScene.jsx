import { Canvas } from "@react-three/fiber";
import Shoe from "../../models/Shoe";
import { OrbitControls } from "@react-three/drei";
import LoginSceneLights from "./LoginSceneLights";
import { Stars } from "@react-three/drei";

const LoginScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{ backgroundColor: "#000000" }}
      className="border-2 border-zinc-800 rounded-sm max-w-[80%] md:max-w-[50%] h-full cursor-pointer hidden md:block"
    >
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Shoe />
      <LoginSceneLights />
      <OrbitControls enablePan={false} minDistance={12} maxDistance={24} />
    </Canvas>
  );
};

export default LoginScene;
