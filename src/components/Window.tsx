import { ReactNode } from "react";
import TitleBar from "./TitleBar";

interface WindowProps {
  children?: ReactNode;
}

const Window = ({ children }: WindowProps) => {
  return (
    <div className="relative flex flex-col rounded-md border border-gray-600 bg-black bg-[url('./assets/Dirt_background_JE2.webp')] shadow-2xl md:h-[600px] md:w-[800px] lg:h-[700px] lg:w-[1000px] xl:h-[800px] xl:w-[1200px]">
      <TitleBar />
      {children}
    </div>
  );
};
export default Window;
