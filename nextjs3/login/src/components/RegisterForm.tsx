import React, {FormEvent, useState} from 'react'

const RegisterForm = () => {
  const  [username, setUserName] = useState("")
  const  [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  function handleSubmit(e:FormEvent){
    e.preventDefault()
    console.log(username, email, password);
    
  }
  return (

    <div className=" w-full h-screen flex justify-center items-center">
    <form onSubmit={handleSubmit} className='h-auto w-96 text-center'>
        <h1 className='text-stone-500 text-3xl p-4'>Register</h1>
            <div className="mb-6">
              <input
              onChange={(e)=>setUserName(e.target.name)}
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
              >Sign In</button>
            </div>
            <a
            href="javascript:void(0)"
            className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
          >
            Forget Password?
          </a>
          <p className="text-base text-[#adadad]">
            Not a member yet?   
            <a href="/register" className="text-primary hover:underline">
              Sign Up
            </a>
            </p>
          </form>
    </div>
  )
}

export default RegisterForm