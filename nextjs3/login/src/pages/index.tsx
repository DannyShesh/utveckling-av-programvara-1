import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
const [counter, setCounter] = useState(0)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href={'/login'}><button className='no-underline p-5 rounded-sm border-none shadow-md bg-amber-700 text-cyan-200'>Login</button></Link>
        <Link href={'/register'}><button className='no-underline p-5 border-none rounded-sm shadow-md bg-amber-700 text-cyan-200'>Register</button></Link>
      </div>
      <button onClick={()=>setCounter(counter + 1)}>Click</button>
      {counter}
    </main>
  )
}