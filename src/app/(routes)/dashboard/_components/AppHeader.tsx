import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import path from 'path'
import React from 'react'



const menuOptions = [
    {
        id:1,
        name:"home",
        path:"/home"
    },
    {
        id:2,
        name:"History",
        path:"/history"
    },
    {
        id:3,
        name:"Pricing",
        path:"/pricing"
    },
    {
        id:4,
        name:"Profile",
        path:"/profile"
    }
]
const AppHeader = () => {
  return (
    <div className='flex items-center justify-between p-4 shadow'>
        <Image src={"/logo.svg"} alt='logo' width={120} height={60}></Image>
        <div className='hidden md:flex gap-5  items-center '>
            {menuOptions.map((options , index)=>(
                <div key={index}>
                    <h1>{options.name}</h1>
                </div>
            ))}
        </div>
        <UserButton></UserButton>
    </div>
  )
}

export default AppHeader