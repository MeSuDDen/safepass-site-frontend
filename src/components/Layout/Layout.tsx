import React from "react";

type Props = {
    children: React.ReactNode;
}

export default function Layout({children}: Props) {
    return (
        <div className={'max-w-[1200px] mx-auto xl:px-10 lg:px-7 px-2'}>
            {children}
        </div>
    )
}