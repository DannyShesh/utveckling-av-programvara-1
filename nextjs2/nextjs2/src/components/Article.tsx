import Hero from "./hero"
import styles from "./Article.module.css"


type ArticleProps = {
    children
}

export default function Article(){
    return(
        <article>
            <Hero>Home page!</Hero>
        </article>
        
    )
}