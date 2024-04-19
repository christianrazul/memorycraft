import { Minus, Square, X } from 'lucide-react';
import './style.css';
import { ReactNode } from 'react';

const TitleBar = () => {
  return (
    <div className='w-full h-8 flex justify-between items-center border-b border-gray-600'>
      <p className='ml-4'>MemoryCraft 1.20.24</p>
      <div className='flex items-center h-full'>
        <Minus size={14} strokeWidth={1} className='hover:bg-gray-500 p-2 px-3 w-full h-full' />
        <Square size={12} strokeWidth={1} className='hover:bg-gray-500 py-2 px-3 w-full h-full' />
        <X size={20} strokeWidth={1} className='hover:bg-red-500 px-3 w-full h-full' />
      </div>
    </div>
  );
};

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

function App() {
  return (
    <div className='flex justify-center items-center'>
      <Window></Window>
    </div>
  );
}

export default App;
