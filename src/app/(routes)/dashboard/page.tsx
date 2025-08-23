import React from 'react'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'

const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
<h1 className='font-vold text-2xl '>My DashBoard</h1>
<Button>+ Consult WIth Doctor</Button>
      
      </div>
      <HistoryList></HistoryList>
      </div>
  )
}

export default Dashboard