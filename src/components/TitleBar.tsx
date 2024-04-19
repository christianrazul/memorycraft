import { Minus, Square, X } from 'lucide-react';
const TitleBar = () => {
  return (
    <div className='w-full h-8 flex justify-between items-center border-b border-gray-600'>
      <div className='ml-3 flex items-center gap-1'>
        <img src='.\src\assets\Item_Frame_29_JE3.webp' alt='icon' className='w-5 h-5' />
        <p>MemoryCraft 1.20.24</p>
      </div>
      <div className='flex items-center h-full'>
        <Minus size={14} strokeWidth={1} className='hover:bg-gray-500 p-2 px-3 w-full h-full' />
        <Square size={12} strokeWidth={1} className='hover:bg-gray-500 py-2 px-3 w-full h-full' />
        <X size={20} strokeWidth={1} className='hover:bg-red-500 px-3 w-full h-full' />
      </div>
    </div>
  );
};

export default TitleBar;
