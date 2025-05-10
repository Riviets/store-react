import LayoutLoader from "../components/LayoutLoader";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import LoginExperience from "../components/sections/LoginExperience";
const AboutPage = () => {
  return (
    <LayoutLoader addHeader={true} addFooter={true}>
      <Hero />
      <Features />
      <LoginExperience />
    </LayoutLoader>
  );
};

export default AboutPage;
