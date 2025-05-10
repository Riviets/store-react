import { Canvas } from "@react-three/fiber";
import HeroSceneLights from "./HeroSceneLights";
import { Watch } from "../../models/Watch";
import React from "react";

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [13, 1, 25], fov: 45 }}>
      <HeroSceneLights />
      <Watch onLoaded={() => setIsLoaded(true)} />
    </Canvas>
  );
};

export default HeroScene;
