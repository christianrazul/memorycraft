import "../style.css";
import Window from "../components/Window";
import MenuButton from "../components/MenuButton";
import DifficultyButton from "../components/DifficultyButton";

interface HomePageProps {
  onDifficulty: (difficulty: "peaceful" | "easy" | "normal" | "hard") => void;
}

const HomePage = ({ onDifficulty }: HomePageProps) => {
  return (
    <div className="flex items-center justify-center">
      <Window>
        <div className="flex h-full flex-col items-center gap-8 pt-24">
          <img src="./src/assets/MemoryCraft.png" className="w-2/3" />
          <div className="flex flex-col gap-4">
            <MenuButton text="Singleplayer" to="/play" />
            <DifficultyButton
              onDifficulty={(difficulty) => onDifficulty(difficulty)}
            />
            <MenuButton text="How to play" to="/howtoplay" />
            <MenuButton
              text="GitHub"
              onClick={() =>
                window.open(
                  "https://github.com/christianrazul/memorycraft",
                  "_blank",
                )
              }
            />
          </div>
        </div>
      </Window>
    </div>
  );
};

export default HomePage;
