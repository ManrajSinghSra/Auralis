"use client"
import { Button } from '@/components/ui/button'
import {  Plus } from 'lucide-react'
import React, { useState } from 'react'
import AddMeeting from './AddMeeting'

const Meetingheader = () => {


    const [open,setOpen]=useState(false)
    
    const handleOpen=()=>setOpen(!open)

  return (<>
        <AddMeeting open={open} setOpen={setOpen} handleOpen={handleOpen} />
        
        <div className='flex justify-between mx-4'>
              <h1 className='text-4xl font-extrabold '>Meetings</h1>
              <Button className="bg-blue-900"  onClick={()=>handleOpen()}> <Plus className='w-50' /> New Meeting</Button>
        </div>
     </>
  )
}

export default Meetingheader