interface CardProps {
  id: number;
  name: string;
  imageSrc: string;
  onCardClick: (id: number) => void;
}

const Card = ({ id, imageSrc, onCardClick }: CardProps) => {
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

export default Card;
