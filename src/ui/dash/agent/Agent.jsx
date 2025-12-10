"use client"
 
import   AgentDialog from "@/ui/dash/agent/AgentDialog"; 
import { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./column"; 
import AgentHeader from "./AgentHeader";

const Agent = ({ res }) => {

  const [open, isOpen] = useState(false)
  const setOpen = () => isOpen(!open)

  const [filterAgent,setFilterAgent]=useState("")
    const filteredAgents = ()=>{
      return res.filter((curr)=>
        curr.name.toLowerCase().includes(filterAgent.toLowerCase())
      )
    }

      return (

            <div className="w-full">

              <AgentDialog open={open} setOpen={setOpen} />
              <AgentHeader isOpen={isOpen} open={open} setFilterAgent={setFilterAgent} filterAgent={filterAgent} />
 
              <div className="w-auto mx-3 overflow-hidden ">
                  <DataTable columns={columns} data={filteredAgents()} />
              </div>

            </div>

  )
}

export default Agent