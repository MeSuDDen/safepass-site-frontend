import style from './CardReviews.module.scss'
import Image from "next/image";

interface cardReviewsProps {
    Stars: number
    Text: string
    AuthorImage: string
    AuthorName: string
    AuthorJob: string
}

export default function CardReviews({Stars, Text, AuthorImage, AuthorName, AuthorJob} : cardReviewsProps) {

    // Функция для создания звезд
    const renderStars = () => {
        const starsArray = [];

        // Генерируем 5 звезд
        for (let i = 0; i < 5; i++) {
            // Если текущая звезда меньше или равна оценке — она заполнена, иначе — прозрачная с обводкой
            if (i < Stars) {
                starsArray.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={style.starFull}>
                        <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2"/>
                    </svg>
                );
            } else {
                starsArray.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className={style.starOutline}>
                        <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2"/>
                    </svg>
                );
            }
        }

        return starsArray;
    }

    return (
        <div className={style.cardReviews}>
            <div className={style.cardReviewsContainer}>
                <div className={style.cardReviewsStars}>
                    {renderStars()} {/* Рендерим звезды */}
                    <span className={style.starRating}>{Stars.toFixed(1)}</span> {/* Показываем рейтинг */}
                </div>
                <div className={style.cardReviewsText}>{Text}</div>
                <div className={style.cardReviewsAuthor}>
                    <Image width={47} height={47} src={AuthorImage} alt={AuthorName} className={style.cardReviewsAuthorImage} />
                    <div className={style.cardReviewsAuthorContent}>
                        <div className={style.cardReviewsAuthorName}>{AuthorName}</div>
                        <div className={style.cardReviewsAuthorJob}>{AuthorJob}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
