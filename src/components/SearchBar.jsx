import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { searchGames } from "../api/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { modifyImageUrl } from "../utils/utils";
import { useDebounce } from "../hooks/useDebounce";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["games", { search: debouncedQuery, page_size: 5 }],
    queryFn: () => searchGames({ search: debouncedQuery, page_size: 5 }),
    enabled: !!debouncedQuery,
  });

  useEffect(() => {
    setQuery("");
    inputRef.current.blur();
  }, [location]);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/games?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg">
      <form
        className="relative flex items-center gap-2 w-full"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          className="w-full text-sm focus:outline-none ml-3 py-1.5"
          id="search"
          name="search"
          placeholder="Search game..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
        <label
          htmlFor="search"
          className="p-1.5 mr-1 cursor-pointer"
          onClick={handleSearch}
        >
          <FaMagnifyingGlass />
        </label>

        {hasFocus && data && data.results.length > 0 && (
          <div className="flex flex-col mt-1 py-1 bg-white bg-opacity-95 absolute top-full w-full z-10 rounded-lg shadow-xl">
            {data.results.map((game) => (
              <Link
                to={`/games/${game.id}`}
                state={{ game: game }}
                key={game.id}
                className="flex items-center gap-2 px-2 py-1 min-h-[3.375rem] hover:bg-black hover:bg-opacity-10"
                onMouseDown={(e) => e.preventDefault()} // to prevent input lose focus
              >
                <img
                  src={modifyImageUrl(game.background_image, "small")}
                  alt={game.name}
                  className="w-20 h-[2.8125rem] object-cover"
                />
                <p className="text-sm font-semibold">{game.name}</p>
              </Link>
            ))}
            <div className="mt-1 px-2 py-1 text-sm">
              <span
                className="underline mr-2 cursor-pointer"
                onClick={handleSearch}
                onMouseDown={(e) => e.preventDefault()}
              >
                See all results
              </span>
              {data.count}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
