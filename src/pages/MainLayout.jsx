import SideMenu from "../components/SideMenu";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-full flex px-3.5 md:px-5">
      <SideMenu />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
