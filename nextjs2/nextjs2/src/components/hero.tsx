import { ReactNode } from "react"
import styles from "./hero.module.css"


type HeroProps = {
    children?: ReactNode
}
export default function Hero({children}: HeroProps) {
    return(
        <div>
            HERO
        </div>
    )
}