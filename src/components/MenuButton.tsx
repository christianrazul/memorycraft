interface MenuButtonProps {
  text: string;
  onClick?: React.MouseEventHandler;
}

const MenuButton = ({ text, onClick }: MenuButtonProps) => {
  return (
    <div className="w-96 border-2 border-black hover:border-white">
      <button
        className="flex w-full items-center justify-center rounded-none border-2 border-b-4 border-gray-300 border-b-gray-950/30 border-r-gray-950/30 bg-[#6E6E6E] bg-[url('./src/assets/stone.png')] bg-contain bg-repeat pb-0 font-minecraft antialiased bg-blend-exclusion"
        style={{ textShadow: "#505050 2px 2px" }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default MenuButton;
