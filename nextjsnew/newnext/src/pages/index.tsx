import React, {useEffect, useState} from  "react"


export default function Home() {
  const [update, setUpdate] = useState(0)
  const [users, setUsers] = useState([])
  async function fetchData(){
    const res = await fetch('http://10.111.3.78:3000/api/users');
    const data = await res.json();
    setUsers(data)
  }

  useEffect(()=>{
    fetchData()
    console.log("render");
    
  }, [update])
  return (
   <div>
    {users.map(users=>(
      <div>
        <h1>{users.name}</h1>
      </div>
    ))}
    <button onClick={()=>setUpdate(update + 1)}>render</button>
   </div>
  )
}
