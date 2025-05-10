import HeroScene from "../scenes/HeroScene/HeroScene";
import AnimatedButton from "../ui/buttons/AnimatedButton";
import { useNavigate } from "react-router-dom";
import { shoppingCart } from "../../assets/icons/shopping";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
    });
  });
  return (
    <section className="relative text-white min-h-screen bg-zinc-900 overflow-hidden section-padding">
      <div className="absolute inset-0 z-0 hidden md:block">
        <HeroScene />
      </div>

      <div className="container relative z-10 py-24">
        <div className="hero-container">
          <h1 className="hero-title">Everything You Need, All in One Place</h1>
          <p className="hero-subtitle">
            Discover premium fashion, cutting-edge monitors, timeless jewelry,
            and collector's items — all in one store.
          </p>
          <AnimatedButton
            text={"Shop Now"}
            icon={shoppingCart}
            onClick={() => {
              navigate("/shop");
            }}
            className={
              "md:text-xl bg-zinc-800 border-white-50 hover:bg-zinc-950 transition-all duration-300"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
