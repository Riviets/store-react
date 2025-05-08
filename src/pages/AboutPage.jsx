import LayoutLoader from "../components/LayoutLoader";
import Hero from "../components/sections/Hero";

const AboutPage = () => {
  return (
    <LayoutLoader addHeader={true} addFooter={true}>
      <Hero />
    </LayoutLoader>
  );
};

export default AboutPage;
