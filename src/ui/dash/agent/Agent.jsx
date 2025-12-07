"use client"

import { Button } from "@/components/ui/button";
import AgentDialog from "@/ui/dash/agent/AgentDialog";
import { Plus } from "lucide-react"; 
import { useState } from "react";

const Agent = ({res}) => {

  const [open,isOpen]=useState(false)
  const setOpen=()=>isOpen(!open)

  return (
   
            <div>
              <AgentDialog open={open} setOpen={setOpen}/>
                <div className="m-3 flex  justify-between">
                    <h1 className="text-4xl">My Agents </h1>
                    <Button className="bg-blue-900" onClick={()=>isOpen(!open)}>
                    <Plus />
                    New Agent
                    </Button>
                </div>

                    <h1>{JSON.stringify(res,null,2)}</h1>
            </div>
   
  )
}

export default Agent