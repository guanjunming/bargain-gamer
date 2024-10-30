import {
  SiPlaystation,
  SiWindows,
  SiXbox,
  SiApple,
  SiNintendoswitch,
  SiLinux,
} from "react-icons/si";

const PlatformIcons = ({ platforms }) => {
  const platformIconMap = {
    pc: <SiWindows />,
    playstation: <SiPlaystation />,
    xbox: <SiXbox />,
    mac: <SiApple />,
    linux: <SiLinux />,
    nintendo: <SiNintendoswitch />,
  };

  if (!platforms || platforms.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-1.5">
      {platforms.map((plat, index) => {
        const icon = platformIconMap[plat.platform.slug];
        if (icon) {
          return <span key={index}>{icon}</span>;
        }
      })}
    </div>
  );
};

export default PlatformIcons;
