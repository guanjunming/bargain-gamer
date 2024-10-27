import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const ShowAllButton = ({ showAllGenres, setShowAllGenres }) => {
  return (
    <li>
      <button
        className="w-full group"
        onClick={() => setShowAllGenres((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-md flex place-content-center bg-gray-700 text-gray-400 group-hover:bg-gray-500 group-hover:text-gray-800">
            {showAllGenres ? <FaAngleUp /> : <FaAngleDown />}
          </span>
          <span className="text-gray-400">
            {showAllGenres ? "Hide" : "Show all"}
          </span>
        </div>
      </button>
    </li>
  );
};

export default ShowAllButton;
