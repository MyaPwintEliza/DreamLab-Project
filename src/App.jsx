import Plan from "./pages/admin/plan";

function App() {
  // relative flex flex-auto flex-shrink-0 min-h-screen antialiased
  return <div className="flex flex-auto flex-shrink-0" >
    {/* fixed top-0 left-0 z-50 flex-col h-full w-14 md:w-14 lg:w-80 sidebar text-white text-opacity-50  */}
    <aside className="h-full w-14 lg:w-80 bg-dreamLabColor4">
      SideBar
    </aside>
    {/* <div text-black>Plan</div> */}
    <Plan/>
    </div>;
}

export default App;
