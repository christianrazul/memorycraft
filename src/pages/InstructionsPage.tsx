import MenuButton from "../components/MenuButton";
import Title from "../components/Title";
import Window from "../components/Window";

const InstructionsPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Window>
        <div className="flex h-full flex-col items-center gap-8 pt-24">
          <Title />
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
