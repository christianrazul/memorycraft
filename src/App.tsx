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
  onCardClick: (id: number) => void;
}

const Card = ({ id, name, onCardClick }: CardProps) => {
  return (
    <div
      className=""
      onClick={() => {
        onCardClick(id);
      }}
      style={{ userSelect: "none" }}
    >
      {id + " " + name}
    </div>
  );
};

type CardType = {
  id: number;
  name: string;
  clicked: boolean;
};

function App() {
  const initialCards: CardType[] = [
    { id: 1, name: "Wooden_Pickaxe", clicked: false },
    { id: 2, name: "Iron_Pickaxe", clicked: false },
    { id: 3, name: "Diamond_Pickaxe", clicked: false },
    { id: 4, name: "Gold_Pickaxe", clicked: false },
    { id: 5, name: "Stone_Pickaxe", clicked: false },
  ];

  const [cards, setCards] = useState<CardType[]>(initialCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    shuffleCards(initialCards);
  }, []);

  const shuffleCards = (toBeShuffled: CardType[]) => {
    const shuffledCards = [...toBeShuffled].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
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
