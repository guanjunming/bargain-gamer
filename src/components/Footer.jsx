import { FaGithub } from "react-icons/fa6";
import rawgLogo from "../assets/RAWG.png";
import cheapSharkLogo from "../assets/cheapshark.png";

const Footer = () => {
  return (
    <div className="w-full flex justify-center text-black py-5 px-4 gap-5 text-xs font-medium">
      <a
        href="https://rawg.io/apidocs"
        target="_blank"
        className="flex items-center gap-2 py-1 px-2 bg-white hover:bg-opacity-80 rounded"
      >
        <img src={rawgLogo} alt="RAWG logo" className="w-5 h-5" />
        <span>RAWG API</span>
      </a>
      <a
        href="https://apidocs.cheapshark.com"
        target="_blank"
        className="flex items-center gap-2 py-1 px-2 bg-white hover:bg-opacity-80 rounded"
      >
        <img src={cheapSharkLogo} alt="CheapShark logo" className="w-5 h-5" />
        <span>CheapShark API</span>
      </a>
      <a
        href="https://github.com/guanjunming/game-haven"
        target="_blank"
        className="flex items-center gap-2 py-1 px-2 bg-white hover:bg-opacity-80 rounded"
      >
        <FaGithub className="w-5 h-5" />
        <span>guanjunming</span>
      </a>
    </div>
  );
};

export default Footer;
