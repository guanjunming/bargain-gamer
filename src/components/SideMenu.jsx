export default function SideMenu() {
  return (
    <aside className=" text-white flex flex-col w-[300px] py-8 px-6">
      <div className="space-y-3">
        <h2 className="font-bold text-xl">Discover</h2>
      </div>
      <div className="space-y-3">
        <h2 className="font-bold text-xl">New Release</h2>
      </div>
      <div className="space-y-3">
        <h2 className="font-bold text-xl">Top</h2>
      </div>
      <div className="space-y-3">
        <h2 className="font-bold text-xl">Platform</h2>
      </div>
      <div className="space-y-3">
        <h2 className="font-bold text-xl">Genre</h2>
      </div>
    </aside>
  );
}
