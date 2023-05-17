import {motion} from "framer-motion"


export default function Home() {
  const {scrollYProgress} = useScroll()
  return (
   
    <div className="min-h-screen w-full bg-slate-100 gap-20 flex justify-center items-center">
  <motion.div style={{scaleX: scrollYProgress, background: "red", position: "fixed", top: 0, left: 0, height: "20px", width: "100% "}}></motion.div>
  <motion.div initial={{x: "-100vw"}} animate={{x: 0}} transition={{duration: 1}} className="h-48 w-48 bg-amber-700 shadow-sm rounded-sm" ></motion.div>
  <motion.div initial={{x: "-100vw"}} animate={{x: 0}} transition={{duration: 1}} className="h-48 w-48 bg-amber-700 shadow-sm rounded-sm" ></motion.div>

    </div>
  )
}
