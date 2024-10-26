import {
  FaStar,
  FaHeart,
  FaCalendarDays,
  FaChessKnight,
  FaGun,
} from "react-icons/fa6";
import {
  FaCrown,
  FaFlagCheckered,
  FaRegGem,
  FaBuilding,
  FaPuzzlePiece,
} from "react-icons/fa";
import { ImFire } from "react-icons/im";
import { MdLeaderboard } from "react-icons/md";
import {
  GiPunchBlast,
  GiCrossedSwords,
  GiNinjaStar,
  GiTreasureMap,
  GiConsoleController,
} from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { SiWindows, SiApple, SiLinux } from "react-icons/si";
import {
  getFeaturedDates,
  getNewReleaseDates,
  getPopularDates,
  getUpcomingDates,
} from "../utils/utils";

export const exploreQueryMap = {
  "/explore/featured": {
    query: { ordering: "-rating", dates: getFeaturedDates() },
    title: "Featured",
  },
  "/explore/all-time-top": {
    query: { ordering: "-added" },
    title: "All Time Top",
  },
  "/explore/popular": {
    query: { ordering: "-added", dates: getPopularDates() },
    title: "Popular Games",
  },
  "/explore/new-releases": {
    query: {
      ordering: "-added",
      dates: getNewReleaseDates(),
    },
    title: "New Releases",
  },
  "/explore/upcoming": {
    query: { ordering: "-added", dates: getUpcomingDates() },
    title: "Upcoming Releases",
  },
  "/explore/action": { query: { genres: 4 }, title: "Action Games" },
  "/explore/adventure": { query: { genres: 3 }, title: "Adventure Games" },
  "/explore/rpg": { query: { genres: 5 }, title: "RPG Games" },
  "/explore/shooter": { query: { genres: 2 }, title: "Shooter Games" },
  "/explore/strategy": { query: { genres: 10 }, title: "Strategy Games" },
  "/explore/casual": { query: { genres: 40 }, title: "Casual Games" },
  "/explore/fighting": { query: { genres: 6 }, title: "Fighting Games" },
  "/explore/indie": { query: { genres: 51 }, title: "Indie Games" },
  "/explore/puzzle": { query: { genres: 7 }, title: "Puzzle Games" },
  "/explore/racing": { query: { genres: 1 }, title: "Racing Games" },
  "/explore/simulation": { query: { genres: 14 }, title: "Simulation Games" },
  "/explore/sports": { query: { genres: 15 }, title: "Sports Games" },
  "/explore/pc": { query: { parent_platforms: 1 }, title: "Windows Games" },
  "/explore/macos": { query: { platforms: 5 }, title: "Mac Games" },
  "/explore/linux": { query: { parent_platforms: 6 }, title: "Linux Games" },
};

export const exploreLinks = [
  {
    name: "Featured",
    icon: <FaStar />,
    path: "/explore/featured",
  },
  {
    name: "My Favorites",
    icon: <FaHeart />,
    path: "/explore/favorites",
  },
];

export const categoryLinks = [
  {
    name: "All Time Top",
    icon: <FaCrown />,
    path: "/explore/all-time-top",
  },
  {
    name: "Popular",
    icon: <MdLeaderboard />,
    path: "/explore/popular",
  },
  {
    name: "New Releases",
    icon: <ImFire />,
    path: "/explore/new-releases",
  },
  {
    name: "Upcoming",
    icon: <FaCalendarDays />,
    path: "/explore/upcoming",
  },
];

export const platformsLinks = [
  {
    name: "Windows",
    icon: <SiWindows />,
    path: "/explore/pc",
  },
  {
    name: "macOS",
    icon: <SiApple />,
    path: "/explore/macos",
  },
  {
    name: "Linux",
    icon: <SiLinux />,
    path: "/explore/linux",
  },
];

export const genreLinks = [
  {
    name: "Action",
    icon: <GiNinjaStar />,
    path: "/explore/action",
  },
  {
    name: "Adventure",
    icon: <GiTreasureMap />,
    path: "/explore/adventure",
  },
  {
    name: "RPG",
    icon: <GiCrossedSwords />,
    path: "/explore/rpg",
  },
  {
    name: "Shooter",
    icon: <FaGun />,
    path: "/explore/shooter",
  },
  {
    name: "Strategy",
    icon: <FaChessKnight />,
    path: "/explore/strategy",
  },
  {
    name: "Casual",
    icon: <FaRegGem />,
    path: "/explore/casual",
  },
  {
    name: "Fighting",
    icon: <GiPunchBlast />,
    path: "/explore/fighting",
  },
  {
    name: "Indie",
    icon: <GiConsoleController />,
    path: "/explore/indie",
  },
  {
    name: "Puzzle",
    icon: <FaPuzzlePiece />,
    path: "/explore/puzzle",
  },
  {
    name: "Racing",
    icon: <FaFlagCheckered />,
    path: "/explore/racing",
  },
  {
    name: "Simulation",
    icon: <FaBuilding />,
    path: "/explore/simulation",
  },
  {
    name: "Sports",
    icon: <MdOutlineSportsSoccer />,
    path: "/explore/sports",
  },
];
