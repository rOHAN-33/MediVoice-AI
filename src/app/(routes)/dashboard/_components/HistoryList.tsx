
"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
const HistoryList = () => {
    const [historyList , setHistoryList]  =  useState([]);
  return (
    <div>
        {historyList.length==0?
        <div>
            <Image src={'/medical-assistance.png'} alt='assistance' width={200} height={200}></Image>
            <h2>No Recent Consultations</h2>
            <p>Consult with a doctor to see your history here</p>
        </div>
        :
        <div>List</div>    
    }
    </div>
  )
}

export default HistoryList