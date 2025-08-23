
"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import AddNewSession from './AddNewSession';
import { DialogTrigger } from '@/components/ui/dialog';
const HistoryList = () => {
    const [historyList , setHistoryList]  =  useState([]);
  return (
    <div className='mt-10'>
        {historyList.length==0?
        <div className='flex items-center flex-col justify-center p-7 border-2 border-dashed rounded-xl'>
            <Image src={'/medical-assistance.png'} alt='assistance' width={200} height={200}></Image>
            <h2 className='font-bold text-2xl mt-2'>No Recent Consultations</h2>
            <p>Consult with a doctor to see your history here</p>
            <AddNewSession></AddNewSession>
        </div>
        :
        <div>List</div>    
    }
    </div>
  )
}

export default HistoryList