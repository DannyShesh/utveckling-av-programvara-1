
import React, {useEffect, useState} from "react"

const save = () => {
  const [data, setData] = useState([])
  const [update, setUpdate] = useState(false)
 
  const contact = {
      name: "cwiss",
      pho: 356742
  }
  useEffect(()=>{
  setData(JSON.parse(window.localStorage.getItem("contacts")))
  window.localStorage.setItem("contacts", JSON.stringify(contact))
},[update])
return (
  <div>
    <button onClick={()=>setUpdate(!update)  }></button>
  </div>
)
}

