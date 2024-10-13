import style from './Reviews.module.scss';
import {reviewsData} from "@/data/reviews";
import Layout from "@/components/Layout/Layout";
import BlockTitle from "@/components/BlockTitle/BlockTitle";
import CardReviews from "@/components/Reviews/components/CardReviews/CardReviews";


export default function Reviews() {
    return (
        <Layout>
            <section className={style.reviews}>
                <div className={style.reviewsBlockTitle}>
                    <BlockTitle title={'Отзывы'} isTransparent={true}/>
                </div>
                <div className={style.reviewsTitleContent}>
                    <h1 className={style.reviewsTitle}>Смотрите Что Говорят Наши Клиенты</h1>
                </div>
                <h2 className={style.reviewsText}>Вот что некоторые из наших клиентов говорят о нашей платформе.</h2>

                <div className={style.reviewsContent}>
                    {reviewsData.map((review, index) => (
                        <CardReviews key={index}
                                     Stars={review.stars}
                                     Text={review.text}
                                     AuthorImage={review.authorImage}
                                     AuthorName={review.authorName}
                                     AuthorJob={review.authorJob}/>
                    ))}
                </div>

            </section>
        </Layout>
    )
}