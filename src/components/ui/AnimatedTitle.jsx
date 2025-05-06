import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedTitle = ({ children, className }) => {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      x: -50,
    });
  });

  return (
    <p
      ref={titleRef}
      className={`text-white-50 text-center text-3xl md:text-5xl font-semibold tracking-wider ${className}`}
    >
      {children}
    </p>
  );
};

export default AnimatedTitle;
