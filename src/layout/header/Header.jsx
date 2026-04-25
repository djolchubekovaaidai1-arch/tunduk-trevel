import styles from './Header.module.css'
import { RiSearchLine } from "react-icons/ri";
import {Button} from "@mui/material"
import { Link } from 'react-router-dom';



const menu = [
    {
        name: "Каталог",
        link: "/catalog"
    },
    {
        name: "Контакты",
        link: "/contacts"
    },
    {
        name: "Kомпании",
        link: "/about-company"
    },
    {
        name: "Блог",
        link: "/blog"
    },
    {
        name: "Новости",
        link: "/news"
    }
]

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className={styles.header__logo}>
                    <img src="/logo.png" alt="" />
                    <div>
                        <h2>TUNDUK TREVEL</h2>
                        <p>Кыялыныздагы эс алуу</p>
                    </div>
                </div>
                <div className={styles.header__nav}>
                    {menu.map(item => <Link key={item.name} to={item.link}>{item.name}</Link>)}
                </div>
                <div className={styles.header__search}>
                    <input type="text" placeholder='Поиск' />
                    <span>
                        <RiSearchLine  size={20}/>
                    </span>
                </div>
                <div className={styles.header__order_call}>
                    <Button sx={{
                        borderRadius: "40px",
                        bgcolor:"#2D9CDB",
                        textTransform:"none",
                        color:"#f2f2f2"
                    }} size='large' variant='contained'>Обратный звонок</Button>
                </div>
                <div className={styles.header__info}>
                    <h2>
                        <a href="tel:+996755099069">+996755099069</a>
                    </h2>
                    <p>9:00 - 19:00 ежедневно</p>
                </div>
            </div>
        </header>
    )
}

export default Header