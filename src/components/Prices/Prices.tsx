import style from './Prices.module.scss'
import Layout from "@/components/Layout/Layout";
import BlockTitle from "@/components/BlockTitle/BlockTitle";
import Image from "next/image";
import PricesTitle from "@/components/Prices/components/Title/PricesTitle";

export default function Prices() {
    return (
        <Layout>
            <section className={style.prices}>

                <BlockTitle title={'Тарифы'} isTransparent={false}/>
                <PricesTitle title={'Простые и Гибкие Тарифы'}/>

                <div className={style.cards}>
                    <div className={style.card}>

                    </div>
                    <div className={style.card}>

                    </div>
                    <div className={style.card}>

                    </div>
                </div>
                <Image className={style.bgImage} src={'/Container.svg'} alt={'asd'} width={1300} height={900}/>
            </section>
        </Layout>
    )
}