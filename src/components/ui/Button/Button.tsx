import Link from 'next/link';
import React from "react";

type ButtonProps = {
    children: React.ReactNode
    type: 'transparent' | 'dark'
    url: string
    style?: string
}

export default function Button({children, type, url, style} : ButtonProps) {
    // Общий класс для кнопок
    const baseClass = "text-sm font-bold px-7 py-3 rounded-[10px] inline-block h-[43px] transition-all";

    // Определение стилей в зависимости от типа кнопки
    const buttonClass = type === 'transparent'
        ? `${baseClass} ${style || ''} hover:bg-DarkBlue hover:text-white`
        : `${baseClass} ${style || ''} hover:bg-opacity-90 hover:text-White hover:drop-shadow-md`;

    return (
        <Link href={url} className={buttonClass.trim()}>
            {children}
        </Link>
    );
}