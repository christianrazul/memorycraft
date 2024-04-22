import MenuButton from "../components/MenuButton";
import Window from "../components/Window";

const InstructionsPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Window>
        <div className="flex h-full flex-col items-center gap-8 pt-24">
          <img src="../../public/assets/MemoryCraft.png" className="w-2/3" />
          <h1 className="font-minecraft text-xl">
            Just avoid clicking on the same item twice!
          </h1>
          <MenuButton text="Home" to="/"></MenuButton>
        </div>
      </Window>
    </div>
  );
};

export default InstructionsPage;
