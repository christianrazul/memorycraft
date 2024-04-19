import { ReactNode } from 'react';
import TitleBar from './TItleBar';

interface WindowProps {
  children?: ReactNode;
}

const Window = ({ children }: WindowProps) => {
  return (
    <div className='relative flex flex-col rounded-md md:w-[1000px] md:h-[600px] lg:w-[1000px] lg:h-[700px] xl:w-[1200px] xl:h-[800px] border border-gray-600 shadow-2xl bg-black'>
      <TitleBar />
      {children}
    </div>
  );
};
export default Window;
