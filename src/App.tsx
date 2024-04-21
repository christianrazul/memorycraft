import "./style.css";
import Window from "./components/Window";
import { useEffect, useState } from "react";

const minecraftItems = [
  { id: 1, name: "Wooden Pickaxe", type: "Tool", material: "Wood" },
  { id: 2, name: "Stone Pickaxe", type: "Tool", material: "Stone" },
  { id: 3, name: "Iron Pickaxe", type: "Tool", material: "Iron" },
  { id: 4, name: "Diamond Pickaxe", type: "Tool", material: "Diamond" },
  // { id: 5, name: "Gold Pickaxe", type: "Tool", material: "Gold" },
  // { id: 6, name: "Wooden Sword", type: "Weapon", material: "Wood" },
  // { id: 7, name: "Stone Sword", type: "Weapon", material: "Stone" },
  // { id: 8, name: "Iron Sword", type: "Weapon", material: "Iron" },
  // { id: 9, name: "Diamond Sword", type: "Weapon", material: "Diamond" },
  // { id: 10, name: "Gold Sword", type: "Weapon", material: "Gold" },
  // { id: 11, name: "Cooked Porkchop", type: "Food", material: "Pork" },
  // { id: 12, name: "Steak", type: "Food", material: "Beef" },
  // { id: 13, name: "Chicken", type: "Food", material: "Chicken" },
  // { id: 14, name: "Bread", type: "Food", material: "Wheat" },
  // { id: 15, name: "Apple", type: "Food", material: "Apple" },
];

interface CardProps {
  id: number;
  name: string;
  imageSrc: string;
  onCardClick: (id: number) => void;
}

const Card = ({ id, name, imageSrc, onCardClick }: CardProps) => {
  return (
    <div
      className="flex h-[110px] w-[120px] items-center justify-center bg-[url('./src/assets/ItemFrameEmpty.png')] bg-contain bg-center bg-no-repeat"
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

  useEffect(() => {
    // shuffleCards(initialCards);
    generateInitialDeck("hard");
  }, []);

  const generateInitialDeck = (difficulty: string): CardType[] | undefined => {
    let cardCount = 0;
    switch (difficulty) {
      case "easy":
        cardCount = 1;
        break;
      case "medium":
        cardCount = 2;
        break;
      case "hard":
        cardCount = 3;
        break;
      default:
        return undefined; // Handle invalid difficulty gracefully
    }

    const shuffledDeck = shuffleArray([...initialCards]);
    const newDeck = shuffledDeck.slice(0, cardCount);

    setCards(newDeck);
  };

  const shuffleCards = (toBeShuffled: CardType[]) => {
    const shuffledCards = [...toBeShuffled].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
  };
  const handleCardClick = (id: number) => {
    console.log(id);
    const cardIndex = cards.findIndex((card) => card.id === id);
    console.log(cardIndex);
    console.log(cards);
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
        <div className="flex h-full w-full items-center justify-center gap-8 pt-24">
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
        <div className="flex flex-col gap-4">
          <p>Current Score: {currentScore}</p>
          <p>High Score: {highScore}</p>
        </div>
      </Window>
    </div>
  );
}

export default App;
