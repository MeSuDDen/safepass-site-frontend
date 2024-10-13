import { FaArrowRight } from "react-icons/fa";

interface BlockTitleProps {
    title: string;
    isTransparent?: boolean;
}

export default function BlockTitle({title, isTransparent} : BlockTitleProps) {
    return (
        <div className={`text-sm font-semibold flex items-center justify-center gap-2 ${isTransparent ? 'bg-transparent border border-DarkBlue' : 'bg-LightGray text-white'} px-3 py-1 rounded max-w-[100px]`}>
            <div className='p-1 bg-DarkBlue rounded text-white'><FaArrowRight /></div>
            <span>{title}</span>
        </div>
    )
}