import styles from "./Header.module.css"
import Navbar from "./Navbar"
import Logo from "./logo"

export default function Header(){
    return(
     <div className={styles.container}>
        
      <Logo />
      <Navbar />

     </div>
      
    )
}