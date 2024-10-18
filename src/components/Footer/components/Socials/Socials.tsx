import Link from "next/link";
import Image from "next/image";

interface SocialsProps {
    imageName: string;
    imageAlt: string;
}

export default function Socials({imageName, imageAlt} : SocialsProps) {
    return (
        <Link href={'/'} className={'h-10 w-10 flex items-center justify-center rounded-[8px] bg-DarkBlue border border-LightGray hover:bg-LightGray transition-all'} >
            <Image src={`/socials/${imageName}`} width={24} height={24} alt={`${imageAlt}`} className={''}></Image>
        </Link>
    )
}