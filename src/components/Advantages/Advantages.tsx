import { advantagesData } from "@/data/advantages";
import style from './Advantages.module.scss';
import Layout from "@/components/Layout/Layout";
import Image from 'next/image';
import Link from 'next/link';
import AnimatedNumber from "@/components/Prices/components/AnimatedNumbers/AnimatedNumbers";

export default function Advantages() {
    return (
        <Layout>
            <section className={style.advantages}>
                <div className={style.container}>

                    <AnimatedNumber/>

                    <div className={style.companies}>
                        {advantagesData.map((company, index) => (
                            <Link key={index} href={company.url} target="_blank" className={style.company}>
                                <Image src={company.image} alt={company.alt} width={210} height={77}/>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>
        </Layout>
    )
}