import { X } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorWindow = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-96 -translate-x-1/2 -translate-y-1/2 transform flex-col border border-black bg-white text-black shadow-md">
      <div className="flex h-8 justify-between">
        <p className="flex items-center pl-3 text-sm text-gray-500">
          MemoryCraft 1.20.24
        </p>
        <div>
          <X
            size={1}
            strokeWidth={1}
            className="h-full w-full p-1 text-gray-500 hover:bg-red-600"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 py-1 pb-4">
        <p className="font-semibold text-blue-700">
          MemoryCraft 1.20.24 has stopped working
        </p>
        <p className="text-sm font-medium">Good job! You win!</p>
      </div>
      <div className="flex h-12 justify-end gap-2 border-t border-gray-300 bg-gray-100 p-2">
        <Link
          to="/"
          className="flex items-center rounded-none border-2 border-blue-500 bg-gray-100 px-4 py-0 text-sm text-black hover:text-black"
        >
          End Process
        </Link>
        {/* <Link
          to="/play"
          className="flex items-center rounded-none border border-gray-400 bg-gray-100 px-4 py-0 text-sm text-black hover:text-black"
        >
          Play Again
        </Link> */}
      </div>
    </div>
  );
};

export default ErrorWindow;
