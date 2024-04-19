import "./style.css";
import Window from "./components/Window";

const MenuButton = () => {
  return (
    <div className="w-96 border-2 border-black hover:border-white">
      <button
        className="font-minecraft flex w-full items-center justify-center rounded-none border-2 border-b-4 border-gray-300 border-b-gray-950/30 border-r-gray-950/30 bg-[#6E6E6E] bg-[url('./src/assets/stone.png')] bg-contain bg-repeat pb-0 antialiased bg-blend-exclusion"
        style={{ textShadow: "#505050 2px 2px" }}
      >
        Singleplayer
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="flex items-center justify-center">
      <Window>
        <div className="flex flex-col items-center justify-center">
          <img src="./src/assets/MemoryCraft.png" className="w-2/3" />
          <MenuButton />
        </div>
      </Window>
    </div>
  );
}

export default App;
