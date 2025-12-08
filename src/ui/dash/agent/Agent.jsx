"use client"

import { Button } from "@/components/ui/button";
import AgentDialog from "@/ui/dash/agent/AgentDialog";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./column";
import { Input } from "@/components/ui/input";

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

              <div className="m-3 flex  justify-between ">
                <h1 className="text-4xl">My Agents </h1>
                <Button className="bg-blue-900" onClick={() => isOpen(!open)}>
                  <Plus />
                  New Agent
                </Button>
              </div>

              <div>
                <Input placeholder="Search Agent" className="w-[40%] m-5" value={filterAgent} onChange={(e)=>setFilterAgent(e.target.value)} />
              </div>

            <div className="w-auto mx-3 overflow-hidden h-screen">
                <DataTable columns={columns} data={filteredAgents()} />
              </div>
              

              
            </div>

  )
}

export default Agent