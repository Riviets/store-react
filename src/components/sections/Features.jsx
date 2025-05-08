import React, { useEffect } from "react";
import AnimatedTitle from "../ui/AnimatedTitle";
import { featuresItems } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        duration: 0.7,
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
            <div
              key={item.text}
              className="features-item bg-white shadow-md rounded-sm"
            >
              <img
                src={item.image}
                alt={item.text}
                className="rounded-t-sm w-full"
              />
              <p className="px-8 py-6 cursor-default text-lg font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
