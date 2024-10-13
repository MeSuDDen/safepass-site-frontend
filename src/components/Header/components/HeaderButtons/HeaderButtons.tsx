import style from './HeaderButtons.module.scss'
import Button from "@/components/ui/Button/Button";


export default function HeaderButtons() {
    return (
        <div className={style.headerButtons}>
            <Button type={'transparent'} url={'/auth/login'} style={'border border-DarkBlue text-DarkBlue md:block hidden'}>
                Авторизироваться
            </Button>
            <Button type={'dark'} url={'/auth/login'} style={'bg-DarkBlue text-White '}>
                Начать
            </Button>
        </div>
    );
}