import { log } from 'console'
import React, {FormEvent, useState} from 'react'

const LoginForm = () => {
    const  [username, setUserName] = useState("")
    const  [email, setEmail] = useState("")
    const  [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    function handleSubmit(e:FormEvent){
      e.preventDefault()
      //setVisible(true)
      const user = await fetchData();
      await validateUser(users)
      
    }
 async function fetchData(){
  const res = await fetch("http://10.111.3.78:3000/api/users")
  const data:any[] = await res.json()
  return data;
}
  async function validateUser(data:any){
     console.log(data);
  if(data.includes(data.find(e=>e.email == email))){
    window.location.href = "/profile"
   
    }
  }
 
  
  
  

  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className='h-auto w-96 text-center'>
        <h1 className='text-stone-500 text-3xl p-4'>Login</h1>
            <div className="mb-6">
              <input
              onChange={(e)=>setUserName(e.target.name)}
                type="text"
                placeholder="Username"
                className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
              />
              <div className="mb-6"></div>
              <input
              onChange={(e)=>setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
              onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-10">
              <button
                type="submit"
                value="Sign In"
                className="bordder-primary w-full cursor-pointer bg-amber-700 rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
              >Register</button>
            </div>
            <a
            href="javascript:void(0)"
            className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
          >
            Forget Password?
          </a>
          <p className="text-base text-[#adadad]">
            Already a account?   
            <a href="/login" className="text-primary hover:underline">
              Login
            </a>
            </p>
          </form>
          {visible ? <div  className="w-[50%] h-[50%] flex justify-center items-center shadow-mg rounded-md ">
            <h2 className='text-xl'>You a re signed in as :</h2><span className='text-xl text-amber-700'>{email}</span>
            <div className='mb-3'></div>
            <h2 className='text-xl'>And your password is:</h2><span className='text-xl text-amber-700'>{password}</span>
            <button onClick={()=>setVisible(false)}>close</button>
          </div>: null}
          
    </div>
  )
}

export default LoginForm