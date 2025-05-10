const LoginSceneLights = () => {
  return (
    <>
      <ambientLight intensity={3} color={"#ffffff"} />
      <directionalLight intensity={3} position={[1, -3, 0]} color={"#00ff99"} />
      <directionalLight intensity={6} position={[0, 4, 3]} color={"#00bbff"} />
      <directionalLight
        intensity={4}
        position={[0, 3, -7]}
        color={"#ffffff"}
        angle={0.5}
      />
    </>
  );
};

export default LoginSceneLights;
