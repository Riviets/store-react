import HeroScene from "../HeroScene";
import Button from "../ui/buttons/Button";

const Hero = () => {
  return (
    <section className="relative text-white min-h-screen bg-zinc-900 overflow-hidden section-padding">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="container relative z-10 py-24">
        <h1 className="hero-title">Everything You Need, All in One Place</h1>
        <p className="hero-subtitle">
          Discover premium fashion, cutting-edge monitors, timeless jewelry, and
          collector's items — all in one store.
        </p>
        <Button
          text={"Shop Now"}
          className={
            "text-xl px-12 hover:bg-zinc-950 transition-all duration-300"
          }
        />
      </div>
    </section>
  );
};

export default Hero;
