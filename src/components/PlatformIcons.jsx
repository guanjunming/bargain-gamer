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

const PlatformIcons = ({ platforms }) => {
  const platformIconMap = {
    pc: <SiWindows />,
    playstation: <SiPlaystation />,
    xbox: <SiXbox />,
    ios: <SiIos />,
    mac: <SiApple />,
    android: <DiAndroid />,
    linux: <SiLinux />,
    nintendo: <SiNintendoswitch />,
    atari: <SiAtari />,
    "commodore-amiga": <SiCommodore />,
    sega: <SiSega />,
  };

  return (
    <div className="flex items-center gap-1.5">
      {platforms?.map((plat, index) => {
        const icon = platformIconMap[plat.platform.slug];
        if (icon) {
          return <span key={index}>{icon}</span>;
        }
      })}
    </div>
  );
};

export default PlatformIcons;
