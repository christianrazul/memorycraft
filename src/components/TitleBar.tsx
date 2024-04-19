import { Minus, Square, X } from "lucide-react";
const TitleBar = () => {
  return (
    <div className="flex h-8 w-full items-center justify-between border-b border-gray-600 bg-black">
      <div className="ml-3 flex items-center gap-1">
        <img
          src=".\src\assets\Item_Frame_29_JE3.webp"
          alt="icon"
          className="h-5 w-5"
        />
        <p>MemoryCraft 1.20.24</p>
      </div>
      <div className="flex h-full items-center">
        <Minus
          size={14}
          strokeWidth={1}
          className="h-full w-full p-2 px-3 hover:bg-gray-500"
        />
        <Square
          size={12}
          strokeWidth={1}
          className="h-full w-full px-3 py-2 hover:bg-gray-500"
        />
        <X
          size={20}
          strokeWidth={1}
          className="h-full w-full px-3 hover:bg-red-500"
        />
      </div>
    </div>
  );
};

export default TitleBar;
