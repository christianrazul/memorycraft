import "./style.css";
import Window from "./components/Window";
import { useEffect, useState } from "react";
import { shuffleArray } from "./utils/shuffleArray";
interface CardProps {
  id: number;
  name: string;
  imageSrc: string;
  onCardClick: (id: number) => void;
}

const Card = ({ id, name, imageSrc, onCardClick }: CardProps) => {
  return (
    <div
      className="flex h-[110px] w-[120px] shrink-0 select-none items-center justify-center bg-[url('./src/assets/ItemFrameEmpty.png')] bg-contain bg-center bg-no-repeat"
      onClick={() => {
        onCardClick(id);
      }}
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
      name: "Chainmail_Helmet",
      clicked: false,
      imageSrc: "./src/assets/armor/Chainmail_Helmet.webp",
    },
    {
      id: 8,
      name: "Diamond_Helmet",
      clicked: false,
      imageSrc: "./src/assets/armor/Diamond_Helmet.webp",
    },
    {
      id: 9,
      name: "Diamond_Chestplate",
      clicked: false,
      imageSrc: "./src/assets/armor/Diamond_Chestplate.webp",
    },
    {
      id: 10,
      name: "Diamond_Leggings",
      clicked: false,
      imageSrc: "./src/assets/armor/Diamond_Leggings.webp",
    },
    {
      id: 11,
      name: "Diamond_Boots",
      clicked: false,
      imageSrc: "./src/assets/armor/Diamond_Boots.webp",
    },
    {
      id: 12,
      name: "Golden_Helmet",
      clicked: false,
      imageSrc: "./src/assets/armor/Golden_Helmet.webp",
    },
    {
      id: 13,
      name: "Golden_Chestplate",
      clicked: false,
      imageSrc: "./src/assets/armor/Golden_Chestplate.webp",
    },
    {
      id: 14,
      name: "Golden_Leggings",
      clicked: false,
      imageSrc: "./src/assets/armor/Golden_Leggings.webp",
    },
    {
      id: 15,
      name: "Golden_Boots",
      clicked: false,
      imageSrc: "./src/assets/armor/Golden_Boots.webp",
    },
    {
      id: 16,
      name: "Iron_Helmet",
      clicked: false,
      imageSrc: "./src/assets/armor/Iron_Helmet.webp",
    },
    {
      id: 17,
      name: "Iron_Chestplate",
      clicked: false,
      imageSrc: "./src/assets/armor/Iron_Chestplate.webp",
    },
    {
      id: 18,
      name: "Iron_Leggings",
      clicked: false,
      imageSrc: "./src/assets/armor/Iron_Leggings.webp",
    },
    {
      id: 19,
      name: "Iron_Boots",
      clicked: false,
      imageSrc: "./src/assets/armor/Iron_Boots.webp",
    },
    {
      id: 20,
      name: "Leather_Cap",
      clicked: false,
      imageSrc: "./src/assets/armor/Leather_Cap.webp",
    },
    {
      id: 21,
      name: "Leather_Tunic",
      clicked: false,
      imageSrc: "./src/assets/armor/Leather_Tunic.webp",
    },
    {
      id: 22,
      name: "Leather_Pants",
      clicked: false,
      imageSrc: "./src/assets/armor/Leather_Pants.webp",
    },
    {
      id: 23,
      name: "Leather_Boots",
      clicked: false,
      imageSrc: "./src/assets/armor/Leather_Boots.webp",
    },
    {
      id: 24,
      name: "Netherite_Chestplate",
      clicked: false,
      imageSrc: "./src/assets/armor/Netherite_Chestplate.webp",
    },
    {
      id: 25,
      name: "Netherite_Leggings",
      clicked: false,
      imageSrc: "./src/assets/armor/Netherite_Leggings.webp",
    },
    {
      id: 26,
      name: "Potion_of_Fire_Resistance",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Fire_Resistance.webp",
    },
    {
      id: 27,
      name: "Potion_of_Harming",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Harming.webp",
    },
    {
      id: 28,
      name: "Potion_of_Healing",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Healing.webp",
    },
    {
      id: 29,
      name: "Potion_of_Invisibility",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Invisibility.webp",
    },
    {
      id: 30,
      name: "Potion_of_Leaping",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Leaping.webp",
    },
    {
      id: 31,
      name: "Potion_of_Night_Vision",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Night_Vision.webp",
    },
    {
      id: 32,
      name: "Potion_of_Poison",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Poison.webp",
    },
    {
      id: 33,
      name: "Potion_of_Regeneration",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Regeneration.webp",
    },
    {
      id: 34,
      name: "Potion_of_Strength",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Strength.webp",
    },
    {
      id: 35,
      name: "Potion_of_Swiftness",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Swiftness.webp",
    },
    {
      id: 36,
      name: "Potion_of_Water_Breathing",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Water_Breathing.webp",
    },
    {
      id: 37,
      name: "Potion_of_Weakness",
      clicked: false,
      imageSrc: "./src/assets/potions/Potion_of_Weakness.webp",
    },
    {
      id: 38,
      name: "Uncraftable_Potion",
      clicked: false,
      imageSrc: "./src/assets/potions/Uncraftable_Potion.webp",
    },
    {
      id: 39,
      name: "Water_Bottle",
      clicked: false,
      imageSrc: "./src/assets/potions/Water_Bottle.webp",
    },
  ];

  const [cards, setCards] = useState<CardType[]>(initialCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [goalScore, setGoalScore] = useState(1);

  useEffect(() => {
    generateInitialDeck("hard");
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
    </div>
  );
}

export default App;
