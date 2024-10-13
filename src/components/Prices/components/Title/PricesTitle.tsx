import style from "@/components/Prices/Prices.module.scss";

interface PricesTitleProps {
    title: string;
}

export default function PricesTitle({title} : PricesTitleProps) {
    return (
        <h1 className={style.title}>{title}</h1>
    )
}