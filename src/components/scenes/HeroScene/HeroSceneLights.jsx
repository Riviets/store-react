const HeroSceneLights = () => {
  return (
    <>
      <ambientLight color={"#ffffff"} intensity={20} />
      <directionalLight intensity={30} position={[16, 1, 9]} />
      <pointLight position={[12, 0, 2]} intensity={30} />
    </>
  );
};
export default HeroSceneLights;
