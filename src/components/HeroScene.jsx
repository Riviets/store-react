import { Canvas } from "@react-three/fiber";
import { Watch } from "./models/Watch";

const SceneLights = () => {
  return (
    <>
      <ambientLight color={"white"} intensity={20} />
      <directionalLight intensity={30} position={[16, 1, 9]} />
      <pointLight position={[12, 0, 2]} intensity={30} />
    </>
  );
};

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [13, 1, 25], fov: 45 }}>
      <SceneLights />
      <Watch />
    </Canvas>
  );
};

export default HeroScene;
