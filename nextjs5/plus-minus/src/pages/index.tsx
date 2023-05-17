import React, {useState} from "react"




export default function Home() {
  const [addNum, setAddNum] = useState(0);
  const decrease = () =>{
    if (addNum == 0) return;
    setAddNum(addNum - 1)
  }
  const increase = () =>{
    setAddNum(addNum + 1)
  };
  const reset = () => {
    setAddNum(0)
  }
  return (
    <div>
      {addNum} <br />
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
     

    </div>
    
  )
}
