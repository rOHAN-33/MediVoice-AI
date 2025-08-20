// import React from 'react'
"use client"

import { useUser } from "@clerk/nextjs";
import axios from "axios"
import { useEffect, useState } from "react";
import { UserDetailContent } from "../../context/UserDetailContext";
export type UserDetail = {
    name:string,
    email:string,
    credits:number
}
const Provider = ({


  children,
}: Readonly<{
  children: React.ReactNode;
}>)=> {

    const{user} = useUser()
    const [userDetail, setUserDetail]  = useState<any>()

    useEffect(()=>{
        user&&CreateNewUser()
    },[user])

    const CreateNewUser = async()=>{
        const result = await axios.post('/api/users')
        console.log(result.data)
        setUserDetail(result.data)
    }
  return (
    <div>
        <UserDetailContent.Provider value={{userDetail, setUserDetail}}>
           {children} 
        </UserDetailContent.Provider>
        </div>
  )
}

export default Provider