"use client"
import React ,{useState}from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight } from 'lucide-react'
const AddNewSession = () => {
    const[note,setNote]  = useState <string>('');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-3'>+ Start a Consultation</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription>
            <div>
                <h2>
                    Add Symptoms or Any Other Details
                </h2>
            <Textarea placeholder='Add Deatil Here.....' className='h-[200px] mt-2' 
            onChange={(e)=> setNote(e.target.value)}/>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <DialogClose>
                <Button variant={"outline"}>Cancel</Button>
            </DialogClose>
            
            <Button disabled={!note}>Start Consultation <ArrowRight></ArrowRight></Button>
        </DialogFooter>
        {/* Your form or dialog contents */}
      </DialogContent>
    </Dialog>
  )
}

export default AddNewSession
