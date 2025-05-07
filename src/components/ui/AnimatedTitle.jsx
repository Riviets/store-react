import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ children, className }) => {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      x: -50,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 75%",
      },
    });
  });

  return (
    <div
      ref={titleRef}
      className={`text-white-50 text-3xl md:text-5xl font-semibold tracking-wider flex justify-center gap-5 items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedTitle;
