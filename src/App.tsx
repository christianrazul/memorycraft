import "./style.css";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import InstructionsPage from "./pages/InstructionsPage";
import WinnerPage from "./pages/WinnerPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [diff, setDiff] = useState<"peaceful" | "easy" | "normal" | "hard">(
    "peaceful",
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage onDifficulty={(diff) => setDiff(diff)} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/play",
      element: <GamePage difficulty={diff} />,
    },
    {
      path: "/howtoplay",
      element: <InstructionsPage />,
    },
    {
      path: "/win",
      element: <WinnerPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
