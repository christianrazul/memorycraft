import "../style.css";
import Window from "../components/Window";
import MenuButton from "../components/MenuButton";
import { useState } from "react";

interface DifficultyButtonProps {
  onDifficulty: (difficulty: "peaceful" | "easy" | "normal" | "hard") => void;
}

const DifficultyButton = ({ onDifficulty }: DifficultyButtonProps) => {
  const [difficulty, setDifficulty] = useState<
    "peaceful" | "easy" | "normal" | "hard"
  >("peaceful");

  const handleClick = () => {
    const nextDifficulty =
      difficulty === "peaceful"
        ? "easy"
        : difficulty === "easy"
          ? "normal"
          : difficulty === "normal"
            ? "hard"
            : "peaceful";
    setDifficulty(nextDifficulty);
    onDifficulty(nextDifficulty); // Call the passed onDifficulty function with new difficulty
  };

  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div className="w-96 border-2 border-black hover:border-white">
      <button
        className="flex w-full items-center justify-center rounded-none border-2 border-b-4 border-gray-300 border-b-gray-950/30 border-r-gray-950/30 bg-[#6E6E6E] bg-[url('./src/assets/stone.png')] bg-contain bg-repeat pb-0 font-minecraft antialiased bg-blend-exclusion"
        style={{ textShadow: "#505050 2px 2px" }}
        onClick={handleClick}
      >
        Difficulty: {capitalizeFirstLetter(difficulty)}
      </button>
    </div>
  );
};

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
