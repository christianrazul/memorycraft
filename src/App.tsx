import "./style.css";
import Window from "./components/Window";
import MenuButton from "./components/MenuButton";

function App() {
  return (
    <div className="flex items-center justify-center">
      <Window>
        <div className="flex h-full flex-col items-center gap-8 pt-24">
          <img src="./src/assets/MemoryCraft.png" className="w-2/3" />
          <div className="flex flex-col gap-4">
            <MenuButton text="Singleplayer" />
            <MenuButton text="How to play" />
            <MenuButton text="GitHub" />
          </div>
        </div>
      </Window>
    </div>
  );
}

export default App;
