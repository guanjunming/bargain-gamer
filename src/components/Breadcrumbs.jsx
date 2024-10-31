import { Link } from "react-router-dom";

const Breadcrumbs = ({ game }) => {
  return (
    <div className="space-x-2 text-sm">
      <Link to="/explore/all-games" className="hover:text-white">
        All Games
      </Link>
      <span>{">"}</span>
      {game.genres?.length > 0 && (
        <>
          <Link
            to={`/explore/${game.genres[0].slug}`}
            className="hover:text-white"
          >{`${game.genres[0].name} Games`}</Link>
          <span>{">"}</span>
        </>
      )}
      <Link className="hover:text-white">{game.name}</Link>
    </div>
  );
};

export default Breadcrumbs;
