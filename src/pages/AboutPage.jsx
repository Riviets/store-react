import LayoutLoader from "../components/LayoutLoader";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";

const AboutPage = () => {
  return (
    <LayoutLoader addHeader={true} addFooter={true}>
      <Hero />
      <Features />
    </LayoutLoader>
  );
};

export default AboutPage;
