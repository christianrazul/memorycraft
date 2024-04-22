import { useState } from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

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

  return (
    <div className="w-96 border-2 border-black hover:border-white">
      <button
        className="flex w-full items-center justify-center rounded-none border-2 border-b-4 border-gray-300 border-b-gray-950/30 border-r-gray-950/30 bg-[#6E6E6E] bg-[url('../../public/assets/stone.png')] bg-contain bg-repeat pb-0 font-minecraft antialiased bg-blend-exclusion"
        style={{ textShadow: "#505050 2px 2px" }}
        onClick={handleClick}
      >
        Difficulty: {capitalizeFirstLetter(difficulty)}
      </button>
    </div>
  );
};

export default DifficultyButton;
