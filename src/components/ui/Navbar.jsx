import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navbarItems } from "../../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="container flex-center">
        <div className="space-x-8 md:space-x-14">
          {navbarItems.map((item) => (
            <div key={item.text} className="navbar-link inline-block group">
              <Link to={item.path}>{item.text}</Link>
              <div className="underlined" />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
