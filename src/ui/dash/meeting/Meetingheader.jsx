"use client"
import { Button } from '@/components/ui/button'
import {  Plus } from 'lucide-react'
import React, { useState } from 'react'
import AddMeeting from './AddMeeting'

const Meetingheader = ({agents,session}) => {

    const [open,setOpen]=useState(false)    
    const handleOpen=()=>setOpen(!open)

  return (<>
        <AddMeeting agents={agents} open={open} setOpen={setOpen} handleOpen={handleOpen}  session={session}/>
        
        <div className='flex justify-between mx-4'>
              <h1 className='text-4xl font-extrabold '>Meetings</h1>
              <Button className="bg-blue-900"  onClick={()=>handleOpen()}> <Plus className='w-50' /> New Meeting</Button>
        </div>
     </>
  )
}

export default Meetingheader