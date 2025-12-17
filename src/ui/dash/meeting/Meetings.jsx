"use client"
import  { useState } from 'react'
import { DataTable } from './data-table'
import { columns } from './column'
import { Input } from '@/components/ui/input'
import { StatusFilter } from './StatusFilter' 
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const Meetings = ({res}) => {


  console.log(res);
  

      const data = res.data.map((curr) => ({
        meetingName: curr.meeting.name,
        agentName: curr.agent?.name ?? "Unknown",
        status: curr.meeting.status,
        meetId:curr.meeting.id
      }))

      const [filter,setFilter]=useState("")
    
  return (<>
  <ScrollArea>
    <div className='flex'>
    

     
        <div>
          <Input placeholder="Search Meeting" className="w-[70%] ml-4"  />
        </div>
        <div>
          <StatusFilter filter={filter} />
        </div>
        <div>
          <h1>Agentt filter </h1>
        </div>
        

    </div>
    <ScrollBar />
     </ScrollArea>


    <div>Meetings 
            <div className='flex flex-col w-full'>
                <DataTable columns={columns} data={data} />
            </div>
        
    </div>
    </>
  )
}

export default Meetings