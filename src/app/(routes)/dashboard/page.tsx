import React from 'react'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'
import DoctorsAgentList from './_components/DoctorsAgentList'
import AddNewSession from './_components/AddNewSession'

const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
<h1 className='font-vold text-2xl '>My DashBoard</h1>
<AddNewSession></AddNewSession>
      
      </div>
      <HistoryList></HistoryList>
      <DoctorsAgentList></DoctorsAgentList>
      </div>
  )
}

export default Dashboard