import { instaIcon } from "../assets/icons/socials/insta";
import { linkedinIcon } from "../assets/icons/socials/linkedin";
import { facebookIcon } from "../assets/icons/socials/facebook";
import workspaceImg from "../assets/images/workspace.jpg";
import styleImg from "../assets/images/style.jpg";
import jewelryImg from "../assets/images/jewelry.jpg";

export const API_URL = "https://fakestoreapi.com";

export const navbarItems = [
  { text: "About", path: "/about" },
  { text: "Shop", path: "/shop" },
  { text: "Profile", path: "/profile" },
];

export const footerItems = [
  { icon: instaIcon, path: "https://instagram.com" },
  { icon: linkedinIcon, path: "https://linkedin.com" },
  { icon: facebookIcon, path: "https://facebook.com" },
];

export const featuresItems = [
  {
    text: "Everything you need for a clean, modern workspace.",
    image: workspaceImg,
  },
  {
    text: "Add a personal touch to every outfit with our elegant jewelry pieces.",
    image: styleImg,
  },
  {
    text: "Clothes made to keep up with your life, from work to weekends.",
    image: jewelryImg,
  },
];
