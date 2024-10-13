import style from './Header.module.scss';
import Image from "next/image";
import Logo from "@/assets/images/main-logo.png"
import HeaderNavigation from "@/components/Header/components/HeaderNavigation/HeaderNavigation";
import HeaderButtons from "@/components/Header/components/HeaderButtons/HeaderButtons";
import Link from "next/link";
import MobileNavigation from "@/components/Header/components/MobileNavigation/MobileNavigation";


export default function Header() {
    return (
        <section className={style.headerContainer}>
            <header className={style.header}>
                <div className={style.headerLeft}>
                    <Link href="/" className={style.logo}>
                        <Image src={Logo} className={style.headerLogo} alt="SafePass" width={50} height={50} placeholder={"blur"}/>
                        <h1 className={style.title}>SafePass</h1>
                    </Link>
                    <HeaderNavigation/>
                </div>
                <div className={style.headerRight}>
                    <HeaderButtons/>
                    <div className={style.mobile}>
                        <MobileNavigation/>
                    </div>
                </div>

            </header>
        </section>
    )
}