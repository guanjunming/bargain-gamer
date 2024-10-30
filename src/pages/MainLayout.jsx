import SideMenu from "../components/SideMenu";

const MainLayout = ({ children }) => {
  return (
    <div className="flex px-3.5 md:px-5">
      <div className="sticky top-0">
        <SideMenu />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
