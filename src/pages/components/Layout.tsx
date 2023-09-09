import { Lilita_One } from "next/font/google"

const lilita = Lilita_One({ weight: '400', subsets: ["latin"] })


export default function Layout({ children, className }: { children: React.ReactNode, className?: string }) {
    return <>
        <div className={`${className} ${lilita.className}`}>
            {children}
        </div>

    </>



}