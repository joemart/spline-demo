import { useState } from "react"
import Link from "next/link"
import styles from "@/styles/Home.module.scss"




// type MenuProps = ({ className }: { className?: string }) => React.ReactNode


const Menu = () => {

    const [openBurger, setOpenBurger] = useState(false)
    const toggleBurger = () => {
        setOpenBurger(e => !e)
        console.log(openBurger)
    }

    const Burger = () => {
        return <div onClick={toggleBurger} className={`${styles.burger} ${openBurger ? styles['burger--open'] : ''} `}>
            <svg width="30" height="30" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2H30" stroke="#89C0F2" strokeWidth="3" />
                <path d="M0 11H30" stroke="#89C0F2" strokeWidth="3" />
                <path d="M0 20H30" stroke="#89C0F2" strokeWidth="3" />
            </svg>
        </div>
    }

    const NavBarItems = () => {
        return <ul className={`${styles.menu} ${openBurger ? styles['menu--open'] : ''}`} >
            <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15H8.4C8.71667 15 8.98767 14.8873 9.213 14.662C9.43834 14.4367 9.55067 14.166 9.55 13.85V10.15C9.55 9.83333 9.43734 9.56234 9.212 9.337C8.98667 9.11167 8.716 8.99934 8.4 9H6V15ZM7.15 13.85V10.15H8.4V13.85H7.15ZM10.875 15L13.325 14.975V13.85H11.275V12.55H12.575V11.4H11.275V10.15H13.325V9H10.875C10.6583 9 10.4793 9.07067 10.338 9.212C10.1967 9.35334 10.1257 9.53267 10.125 9.75V14.25C10.125 14.4667 10.196 14.6457 10.338 14.787C10.48 14.9283 10.659 14.9993 10.875 15ZM16.025 14.975C16.2417 14.975 16.4293 14.904 16.588 14.762C16.7467 14.62 16.8507 14.441 16.9 14.225L18.3 9H17.1L16.025 13.1L14.95 9H13.75L15.15 14.225C15.2 14.4417 15.3043 14.621 15.463 14.763C15.6217 14.905 15.809 14.9757 16.025 14.975ZM5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5Z" fill="#745EFF" />
                </svg>
            </li>
            <li><Link className={`${styles.myLink}`} href={"#"}>Home</Link></li>
            <li><Link className={`${styles.myLink}`} href={"#"}>Download</Link></li>
            <li><Link className={`${styles.myLink}`} href={"#"}>App</Link></li>
            <li><Link className={`${styles.myLink}`} href={"#"}>Login</Link></li>
            <li><button>Get Started</button></li>
        </ul>
    }

    return (<nav className={`${styles.nav}`}>
        <NavBarItems />
        <Burger />
    </nav>);
}

export default Menu;