import styles from "./Footer.module.css"

export default function Footer(){
    return(
      <footer className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()}jimi
      </footer> 
    )
}