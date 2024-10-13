import Link from "next/link";
import {navigationData} from "@/data/navigation";
import style from "./HeaderNavigation.module.scss";

export default function HeaderNavigation() {
    return (
        <nav className={style.navigation}>
            <ul className={style.navigationLinks}>
                {navigationData.map((item, index) => (
                    <li key={index} className={style.navigationLink}>
                        <Link href={item.url}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}