import Window from "../components/Window";
import ErrorWindow from "../components/ErrorWindow";

const WinnerPage = () => {
  return (
    <div className={`flex items-center justify-center`}>
      <Window>
        <div className="flex h-full flex-col items-center gap-8 pt-24">
          <img src="./src/assets/MemoryCraft.png" className="w-2/3" />
          <ErrorWindow />
        </div>
      </Window>
    </div>
  );
};

export default WinnerPage;
