import {
  SiPlaystation,
  SiWindows,
  SiXbox,
  SiApple,
  SiIos,
  SiNintendoswitch,
  SiLinux,
  SiSega,
  SiAtari,
  SiCommodore,
} from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { IoGameController } from "react-icons/io5";

const PlatformIcons = ({ platforms }) => {
  return (
    <div className="flex items-center gap-1.5">
      {platforms &&
        platforms.map((plat) => {
          switch (plat.platform.slug) {
            case "pc":
              return <SiWindows />;
            case "playstation":
              return <SiPlaystation />;
            case "xbox":
              return <SiXbox />;
            case "ios":
              return <SiIos />;
            case "mac":
              return <SiApple />;
            case "android":
              return <DiAndroid />;
            case "linux":
              return <SiLinux />;
            case "nintendo":
              return <SiNintendoswitch />;
            case "atari":
              return <SiAtari />;
            case "commodore-amiga":
              return <SiCommodore />;
            case "sega":
              return <SiSega />;
            default:
              return <IoGameController />;
          }
        })}
    </div>
  );
};

export default PlatformIcons;
