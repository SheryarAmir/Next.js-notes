import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import {HandMetal} from 'lucide-react'
const Navbar = () => {
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zin-200 fixed z-10 w-full  top-0'>


      <div className=" container flex justify-between items-center mx-auto  ">
       <Link className={buttonVariants()} href="/"><HandMetal /></Link> 
       <Link className={buttonVariants()} href="sign-in">sign-in</Link>
</div>
    </div>
  )
}

export default Navbar
