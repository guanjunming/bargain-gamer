import SideMenu from "../components/SideMenu";
import GameCard from "../components/GameCard";

const GamesPage = () => {
  return (
    <div className="flex">
      <SideMenu />
      <div className="py-8 px-6 w-full grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-8 gap-y-6">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
};

export default GamesPage;
