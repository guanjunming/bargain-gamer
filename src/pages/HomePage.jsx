import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="/explore/featured">
        <div className="text-white px-5 text-xl">Go To Explore</div>
      </Link>
    </>
  );
};

export default HomePage;
