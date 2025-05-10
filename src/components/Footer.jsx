import { footerItems } from "../constants";

const Footer = () => {
  return (
    <div className="px-5 w-full bg-zinc-950 text-white  py-6">
      <div className="container flex justify-center md:justify-between items-center gap-3 flex-wrap">
        <p className="font-medium">© Copyrighted 2025</p>
        <div className="flex gap-5">
          {footerItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              target="_blank"
              className="p-3 rounded-lg bg-zinc-800 border-1 border-white-50 hover:scale-105 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
