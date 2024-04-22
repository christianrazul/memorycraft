import "./style.css";
import Window from "./components/Window";
import { useEffect, useState } from "react";

interface CardProps {
  id: number;
  name: string;
  imageSrc: string;
  onCardClick: (id: number) => void;
}

const Card = ({ id, name, imageSrc, onCardClick }: CardProps) => {
  return (
    <div
      className="flex h-[110px] w-[120px] shrink-0 items-center justify-center bg-[url('./src/assets/ItemFrameEmpty.png')] bg-contain bg-center bg-no-repeat"
      onClick={() => {
        onCardClick(id);
      }}
      style={{ userSelect: "none" }}
    >
      <img src={imageSrc} className="mt-2 h-16 w-16 drop-shadow-lg" />
    </div>
  );
};

type CardType = {
  id: number;
  name: string;
  clicked: boolean;
  imageSrc: string;
};

function App() {
  const initialCards: CardType[] = [
    {
      id: 1,
      name: "Wooden_Pickaxe",
      clicked: false,
      imageSrc: "./src/assets/tools/Wooden_Pickaxe.webp",
    },
    {
      id: 2,
      name: "Iron_Pickaxe",
      clicked: false,
      imageSrc: "./src/assets/tools/Iron_Pickaxe.webp",
    },
    {
      id: 3,
      name: "Diamond_Pickaxe",
      clicked: false,
      imageSrc: "./src/assets/tools/Diamond_Pickaxe.webp",
    },
    {
      id: 4,
      name: "Gold_Pickaxe",
      clicked: false,
      imageSrc: "./src/assets/tools/Golden_Pickaxe.webp",
    },
    {
      id: 5,
      name: "Stone_Pickaxe",
      clicked: false,
      imageSrc: "./src/assets/tools/Stone_Pickaxe.webp",
    },
    {
      id: 6,
      name: "Netherite_Pickaxe",
      clicked: false,
      imageSrc: "./src/assets/tools/Netherite_Pickaxe.webp",
    },
    {
      id: 7,
      name: "Wooden_Axe",
      clicked: false,
      imageSrc: "./src/assets/tools/Wooden_Axe.webp",
    },
    {
      id: 8,
      name: "Stone_Axe",
      clicked: false,
      imageSrc: "./src/assets/tools/Stone_Axe.webp",
    },
    {
      id: 9,
      name: "Iron_Axe",
      clicked: false,
      imageSrc: "./src/assets/tools/Iron_Axe.webp",
    },
    {
      id: 10,
      name: "Diamond_Axe",
      clicked: false,
      imageSrc: "./src/assets/tools/Diamond_Axe.webp",
    },
    {
      id: 11,
      name: "Gold_Axe",
      clicked: false,
      imageSrc: "./src/assets/tools/Golden_Axe.webp",
    },
    {
      id: 12,
      name: "Netherite_Axe",
      clicked: false,
      imageSrc: "./src/assets/tools/Netherite_Axe.webp",
    },
    {
      id: 13,
      name: "Wooden_Sword",
      clicked: false,
      imageSrc: "./src/assets/tools/Wooden_Sword.webp",
    },
    {
      id: 14,
      name: "Stone_Sword",
      clicked: false,
      imageSrc: "./src/assets/tools/Stone_Sword.webp",
    },
    {
      id: 15,
      name: "Iron_Sword",
      clicked: false,
      imageSrc: "./src/assets/tools/Iron_Sword.webp",
    },
    {
      id: 16,
      name: "Diamond_Sword",
      clicked: false,
      imageSrc: "./src/assets/tools/Diamond_Sword.webp",
    },
    {
      id: 17,
      name: "Gold_Sword",
      clicked: false,
      imageSrc: "./src/assets/tools/Golden_Sword.webp",
    },
    {
      id: 18,
      name: "Netherite_Sword",
      clicked: false,
      imageSrc: "./src/assets/tools/Netherite_Sword.webp",
    },
  ];

  const [cards, setCards] = useState<CardType[]>(initialCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [goalScore, setGoalScore] = useState(1);

  useEffect(() => {
    generateInitialDeck("easy");
  }, []);

  useEffect(() => {
    if (currentScore === goalScore) {
      console.log("you win!");
      setHighScore(currentScore);
    }
  }, [goalScore, currentScore]);

  const generateInitialDeck = (
    difficulty: "easy" | "medium" | "hard",
  ): CardType[] | undefined => {
    let cardCount = 0;
    switch (difficulty) {
      case "easy":
        cardCount = 5;
        break;
      case "medium":
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

  const shuffleArray = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
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
        <div className="flex flex-col items-center gap-4">
          <p className="font-minecraft">Current Score: {currentScore}</p>
          <p className="font-minecraft">High Score: {highScore}</p>
          <p className="font-minecraft">Goal Score: {goalScore}</p>
        </div>
      </Window>
    </div>
  );
}

export default App;
