import "../style.css";
import Window from "../components/Window";
import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffleArray";
import { initialCards } from "../utils/items";
import { CardType } from "../types/CardType";
import Card from "../components/Card";
import ErrorWindow from "../components/ErrorWindow";

interface GamePageProps {
  difficulty: "peaceful" | "easy" | "normal" | "hard";
}

function GamePage({ difficulty }: GamePageProps) {
  const [cards, setCards] = useState<CardType[]>(initialCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [goalScore, setGoalScore] = useState(1);
  const [showErrorWindow, setShowErrorWindow] = useState(false);

  useEffect(() => {
    generateInitialDeck(difficulty);
  }, []);

  useEffect(() => {
    if (currentScore === goalScore) {
      setHighScore(currentScore);
      setShowErrorWindow(true);
    }
  }, [goalScore, currentScore]);

  const generateInitialDeck = (
    difficulty: "peaceful" | "easy" | "normal" | "hard",
  ): CardType[] | undefined => {
    let cardCount = 0;
    switch (difficulty) {
      case "peaceful":
        cardCount = 3;
        break;
      case "easy":
        cardCount = 5;
        break;
      case "normal":
        cardCount = 10;
        break;
      case "hard":
        cardCount = 15;
        break;
      default:
        return undefined; // Handle invalid difficulty gracefully
    }

    // get a shuffled deck and make a new deck based on the shuffled deck up to cardCount
    const shuffledDeck = shuffleArray([...initialCards]);
    const newDeck = shuffledDeck.slice(0, cardCount);

    setGoalScore(cardCount);
    setCards(newDeck);
  };

  const shuffleCards = (toBeShuffled: CardType[]) => {
    const shuffledCards = shuffleArray(toBeShuffled);
    setCards(shuffledCards);
  };

  const handleCardClick = (id: number) => {
    const cardIndex = cards.findIndex((card) => card.id === id);
    let newCards = [...cards];
    // Card has been clicked before
    if (cards[cardIndex].clicked) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      newCards = newCards.map((card) => ({ ...card, clicked: false })); // Reset all cards
      setCurrentScore(0);
    } else {
      // Card has not been clicked before
      newCards[cardIndex].clicked = true; // Mark this card as clicked
      setCurrentScore(currentScore + 1);
    }

    setCards(newCards);
    shuffleCards(newCards); // Shuffle cards
  };

  return (
    <div className="flex items-center justify-center">
      {showErrorWindow ? (
        <Window>
          <div className="h-full w-full"></div>
          <ErrorWindow />
        </Window>
      ) : (
        <Window>
          <div className="flex h-full w-full flex-wrap items-center justify-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:w-11/12 lg:w-3/4 xl:w-2/3">
              {cards.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imageSrc={item.imageSrc}
                  onCardClick={(id) => {
                    handleCardClick(id);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 ">
            <p className="font-minecraft text-yellow-400">
              Current Score: {currentScore}
            </p>

            <p className="font-minecraft  text-green-600">
              High Score: {highScore}
            </p>
            <p className="font-minecraft text-orange-500">
              Goal Score: {goalScore}
            </p>
          </div>
        </Window>
      )}
    </div>
  );
}

export default GamePage;
