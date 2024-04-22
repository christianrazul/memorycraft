import "./style.css";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GamePage from "./pages/GamePage";
import { useState } from "react";
import InstructionsPage from "./pages/InstructionsPage";
import WinnerPage from "./pages/WinnerPage";

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
