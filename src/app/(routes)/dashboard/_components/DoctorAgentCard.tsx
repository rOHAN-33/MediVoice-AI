import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'



type doctorAgent={
    id:number,
    specialist:string,
    description:string,
    image:string,
    agentPrompt:string
}

type props = {
    doctorAgent:doctorAgent
}
const DoctorAgentCard = ({doctorAgent}:props) => {
  return (
    <div className=''>
        <Image src={doctorAgent.image} alt={doctorAgent.specialist}
        width={200}
        height={300}
        className='w-full h-[250px] object-cover rounded-xl mt-5'></Image>
        <h2 className='font-bold text-lg mt-1'>{doctorAgent.specialist}</h2>
        <p className='line-clamp-2 mt-1 text-sm text-gray-500'>{doctorAgent.description}</p>
        <Button className='w-full mt-2'>Start Consultation <IconArrowRight></IconArrowRight></Button>
    </div>
  )
}

export default DoctorAgentCard