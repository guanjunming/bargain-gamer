import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { searchGames } from "../api/api";
import { Link, useLocation } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const { data } = useQuery({
    queryKey: ["games", debouncedQuery],
    queryFn: () => searchGames(debouncedQuery),
    enabled: debouncedQuery !== "",
  });

  useEffect(() => {
    setQuery("");
    inputRef.current.blur();
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(query);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg">
      <form
        className="relative flex items-center gap-2 w-full"
        onSubmit={handleSubmit}
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
          onClick={handleSubmit}
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
                  src={game.background_image}
                  alt={game.name}
                  className="w-20 h-[2.8125rem] object-cover"
                />
                <p className="text-sm font-semibold">{game.name}</p>
              </Link>
            ))}
            <div className="mt-1 px-2 py-1 text-sm">
              <span className="underline mr-2 cursor-pointer">
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
