import { Link } from "react-router-dom";

interface MenuButtonProps {
  text: string;
  onClick?: React.MouseEventHandler;
  to?: string;
}

const MenuButton = ({ text, onClick, to }: MenuButtonProps) => {
  return to ? (
    <div className="w-96 border-2 border-black hover:border-white">
      <Link
        to={to}
        className="flex w-full items-center justify-center rounded-none border-2 border-b-4 border-gray-300 border-b-gray-950/30 border-r-gray-950/30 bg-[#6E6E6E] bg-[url('/assets/stone.webp')] bg-contain bg-repeat px-[1.2em] py-[0.6em] pb-0 font-minecraft text-base text-white antialiased bg-blend-exclusion hover:text-white"
        style={{ textShadow: "#505050 2px 2px" }}
      >
        {text}
      </Link>
    </div>
  ) : (
    <div className="w-96 border-2 border-black hover:border-white">
      <button
        className="flex w-full items-center justify-center rounded-none border-2 border-b-4 border-gray-300 border-b-gray-950/30 border-r-gray-950/30 bg-[#6E6E6E] bg-[url('/assets/stone.webp')] bg-contain bg-repeat pb-0 font-minecraft antialiased bg-blend-exclusion"
        style={{ textShadow: "#505050 2px 2px" }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default MenuButton;
