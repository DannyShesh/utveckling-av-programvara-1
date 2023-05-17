import React, {useEffect, useState} from "react"

export default function Home() {

const [timeLeft, setTimeLeft] = useState(10)

useEffect(() =>{
  const intervalId = setInterval(() =>{
    setTimeLeft((time) => {
      if (time === 0) {
        clearInterval(intervalId);
        return 0
      }
      return time -1
    });
  }, 1000);
  return () => clearInterval(intervalId)
}, []);
  return (
    <div>{timeLeft} </div>
  )
}
