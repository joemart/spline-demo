import Spline from '@splinetool/react-spline';
import Wrapper from "./components/Wrapper"
import Content from "./components/Content"
import Menu from "./components/Menu"
import Socials from "./components/Socials"
import styles from '../styles/Home.module.scss'
import Layout from './components/Layout';

import Link from "next/link"

App.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout className={`${styles.layout}`}>

        {page}</Layout>
}

export default function App() {



    return (
        <Wrapper className={`${styles.wrapper}`}>


            <Spline className={`${styles.spline}`} scene="https://prod.spline.design/zbTwaL0-hYYh3vJx/scene.splinecode" />

            <Content className={`${styles.content}`}>
                <Menu className={`${styles.menu}`}>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15H8.4C8.71667 15 8.98767 14.8873 9.213 14.662C9.43834 14.4367 9.55067 14.166 9.55 13.85V10.15C9.55 9.83333 9.43734 9.56234 9.212 9.337C8.98667 9.11167 8.716 8.99934 8.4 9H6V15ZM7.15 13.85V10.15H8.4V13.85H7.15ZM10.875 15L13.325 14.975V13.85H11.275V12.55H12.575V11.4H11.275V10.15H13.325V9H10.875C10.6583 9 10.4793 9.07067 10.338 9.212C10.1967 9.35334 10.1257 9.53267 10.125 9.75V14.25C10.125 14.4667 10.196 14.6457 10.338 14.787C10.48 14.9283 10.659 14.9993 10.875 15ZM16.025 14.975C16.2417 14.975 16.4293 14.904 16.588 14.762C16.7467 14.62 16.8507 14.441 16.9 14.225L18.3 9H17.1L16.025 13.1L14.95 9H13.75L15.15 14.225C15.2 14.4417 15.3043 14.621 15.463 14.763C15.6217 14.905 15.809 14.9757 16.025 14.975ZM5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5Z" fill="#745EFF" />
                        </svg>
                    </li>
                    <li><Link className={`${styles.myLink}`} href={"#"}>Home</Link></li>
                    <li><Link className={`${styles.myLink}`} href={"#"}>Download</Link></li>
                    <li><Link className={`${styles.myLink}`} href={"#"}>App</Link></li>
                    <li><Link className={`${styles.myLink}`} href={"#"}>Login</Link></li>
                    <li><Link className={`${styles.myLink}`} href={"https://www.twitch.tv/obtusedangle"}>ObtusedAngle</Link></li>
                    <li><button>Get Started</button></li>

                </Menu>

                <h1>Collaborate with people</h1>
                <p >Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
                <button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 18C21.1 18 22 17.1 22 16V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" fill="#FFF" />
                    </svg>
                    Bubba was here
                </button>
            </Content>

            <Socials className={`${styles.socials}`}>
                <div className={`${styles.line}`} />
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                    <path d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28004 5.09 4.11004 3.38 2.00004 0.79C1.63004 1.42 1.42004 2.16 1.42004 2.94C1.42004 4.43 2.17004 5.75 3.33004 6.5C2.62004 6.5 1.96004 6.3 1.38004 6V6.03C1.38004 8.11 2.86004 9.85 4.82004 10.24C4.19077 10.4122 3.53013 10.4362 2.89004 10.31C3.16165 11.1625 3.69358 11.9084 4.41106 12.4429C5.12854 12.9775 5.99549 13.2737 6.89004 13.29C5.37367 14.4904 3.49404 15.1393 1.56004 15.13C1.22004 15.13 0.880039 15.11 0.540039 15.07C2.44004 16.29 4.70004 17 7.12004 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z" fill="white" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="white" />
                </svg>
            </Socials>



        </Wrapper>
    );

}
