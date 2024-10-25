import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import PlatformIcons from "./PlatformIcons";

const cardData = {
  name: "Elden Ring: Shadow of the Erdtree",
  background_image:
    "https://media.rawg.io/media/screenshots/0ba/0bae7160eedc1f7d85a8d2db70cf1ec9.jpg",
  parent_platforms: [
    {
      platform: {
        id: 1,
        name: "PC",
        slug: "pc",
      },
    },
    {
      platform: {
        id: 2,
        name: "PlayStation",
        slug: "playstation",
      },
    },
    {
      platform: {
        id: 3,
        name: "Xbox",
        slug: "xbox",
      },
    },
  ],
  genres: [
    {
      id: 40,
      name: "Casual",
      slug: "casual",
    },
    {
      id: 3,
      name: "Adventure",
      slug: "adventure",
    },
  ],
};

const GameCard = () => {
  return (
    <div className="text-white  flex flex-col bg-gray-700 shadow-lg transition duration-300 hover:scale-[1.02]">
      <Link>
        <img
          src={cardData.background_image}
          className="aspect-[1.7/1] object-cover bg-center w-full overflow-hidden"
        />
        <div className="flex flex-col gap-2 p-3">
          <h3 className="font-bold text-xl">{cardData.name}</h3>
          <IconContext.Provider value={{ color: "white", size: "0.875rem" }}>
            <PlatformIcons platforms={cardData.parent_platforms} />
          </IconContext.Provider>
          <p className="text-sm">
            {cardData.genres.map((genre) => genre.name).join(", ")}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default GameCard;
