import React, { useEffect } from "react";
import AnimatedTitle from "../ui/AnimatedTitle";
import { featuresItems } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturesItem from "../ui/FeaturesItem";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".features-item",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".features-wrapper",
          start: "top bottom",
        },
      }
    );
  });

  return (
    <section className="section-padding">
      <div className="container">
        <AnimatedTitle className={"mb-20"}>Let's Find Your Style</AnimatedTitle>
        <div className="features-wrapper flex flex-wrap gap-5 justify-center pb-20">
          {featuresItems.map((item) => (
            <FeaturesItem item={item} key={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
