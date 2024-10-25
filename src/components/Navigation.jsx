import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <nav className=" w-full flex items-center py-6 px-8 md:px-16 lg:px-8 justify-between bg-slate-600">
      <div className="w-6">Logo</div>
      <SearchBar />
      <div className="w-6">User</div>
    </nav>
  );
};

export default Navigation;
