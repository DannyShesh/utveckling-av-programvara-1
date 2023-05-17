import styles from "./Navbar.module.css"
import Link from "next/link"

export default function Navbar() {

    return(
        <nav className={styles.menu}>
            <Link href="/">Home</Link> 
            <Link href="/about">About</Link> 
            <Link href="/contact">Contact</Link> 
        </nav>
    )
}