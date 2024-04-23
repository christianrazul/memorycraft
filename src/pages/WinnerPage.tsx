import Window from "../components/Window";
import ErrorWindow from "../components/ErrorWindow";
import Title from "../components/Title";

const WinnerPage = () => {
  return (
    <div className={`flex items-center justify-center`}>
      <Window>
        <div className="flex h-full flex-col items-center gap-8 pt-24">
          <Title />
          <ErrorWindow />
        </div>
      </Window>
    </div>
  );
};

export default WinnerPage;
