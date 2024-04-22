import Window from "../components/Window";
import { useState } from "react";
import ErrorWindow from "../components/ErrorWindow";

const WinnerPage = () => {
  const [showError, setShowError] = useState(true);

  return (
    <div
      className={`flex items-center justify-center ${showError ? "blur-xl filter" : ""}`}
    >
      <Window>
        <div className="flex h-full flex-col items-center gap-8 pt-24">
          <img src="./src/assets/MemoryCraft.png" className="w-2/3" />
          {showError && <ErrorWindow />}
        </div>
      </Window>
    </div>
  );
};

export default WinnerPage;
