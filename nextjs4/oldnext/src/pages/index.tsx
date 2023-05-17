import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text, setText] = useState("")
  const [num, setNum] = useState(0)
  function guessNumber(){
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    console.log(num);
    
    
    let output = document.getElementById("output");

    if(num == randomNumber){
        setText("du gissa rätt");
        
    }else{
      setText("du gissa fel");
      
    }
}
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <b> Gissa talet 1-10 <input onChange={(e)=>setNum((e.target.value)as any)} type="number" id="calc"/></b>
    {text}
  <button type="submit" onClick = {guessNumber}> gissa </button>   
    <h3 id="output"></h3>
    </main>
  )
}
