'use client'
import { navigationData } from "@/data/navigation";
import style from "./HeaderNavigation.module.scss";

export default function HeaderNavigation() {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.substring(1)); // Убираем `#` из URL

        if (targetElement) {
            const yOffset = -80; // Отступ в пикселях
            const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    return (
        <nav className={style.navigation}>
            <ul className={style.navigationLinks}>
                {navigationData.map((item, index) => (
                    <li key={index} className={style.navigationLink}>
                        <a href={item.url} onClick={(e) => handleScroll(e, item.url)}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
