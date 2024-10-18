import style from './ClickToAction.module.scss'
import Layout from "@/components/Layout/Layout";
import Button from "@/components/ui/Button/Button";

export default function ClickToAction() {
    return (
        <Layout>
            <section className={style.clickToAction}>
                <div className={style.titleContainer}>
                    <h1 className={style.title}>Лучшее Место Для Хранения Паролей</h1>
                </div>
                <div className={style.textContainer}>
                    <span className={style.text}>Ganttify позволил вам добиться ясности и значительных результатов в больших масштабах, связав задачи и рабочие процессы с общими целями компании. </span>
                </div>
                <div className={style.buttonContainer}>
                    <Button type={"white"} url={'/'}>Начать</Button>
                    <Button type={"dark"} url={'/'} style={'bg-DarkBlue text-White'}>Узнать больше</Button>
                </div>
            </section>
        </Layout>
    )
}