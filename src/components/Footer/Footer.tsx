import style from './Footer.module.scss'
import Layout from "@/components/Layout/Layout";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Footer/components/Socials/Socials";

export default function Footer() {
    return (
        <Layout>
            <footer className={style.footer}>
                <div className={style.footerContainer}>
                    <div className={style.footerTopContainer}>
                        <h1 className={style.footerHeading}>Готовы защитить свои пароли и повысить цифровую безопасность на новый уровень?</h1>
                        <span className={style.footerText}>Начните пользоваться менеджером паролей уже сегодня и защитите свои данные.</span>
                        <Button type={"white"} url={'/'}>
                            Начать
                        </Button>
                    </div>
                    <div className={style.footerBottomContainer}>
                        <span className={style.footerBottomText}>Copyright ©2024 SafePass</span>
                        <Link href={'/Privacy'} className={style.footerBottomPrivacyLink}>Политика конфиденциальности</Link>
                        <Link href={'/Privacy'} className={style.footerBottomPrivacyLink}>Политика конфиденциальности</Link>
                        <div className={style.footerBottomsSocials}>
                            <Socials imageName={'instagram.svg'} imageAlt={'Инстаграм'}/>
                            <Socials imageName={'github.svg'} imageAlt={'GitHub'}/>
                            <Socials imageName={'twitter.svg'} imageAlt={'Twitter'}/>
                            <Socials imageName={'whatsapp.svg'} imageAlt={'WhatsApp'}/>
                            <Socials imageName={'linkin.svg'} imageAlt={'LinkedIn'}/>
                        </div>
                    </div>
                </div>
                <Image className={style.bgImage} src={'/Container.svg'} alt={'asd'} width={1120} height={750}/>
            </footer>
        </Layout>
    )
}