import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import React from 'react'

const AgentHeader = ({isOpen,open,setFilterAgent, filterAgent}) => {
  return (<>

   <div className="m-3 flex  justify-between ">
                  <h1 className="text-4xl font-extrabold">My Agents </h1>
                  <Button className="bg-blue-900" onClick={() => isOpen(!open)}>
                    <Plus />
                    New Agent
                  </Button>
                </div>
  
                <div>
                  <Input placeholder="Search Agent" className="w-[40%] m-5" value={filterAgent} onChange={(e)=>setFilterAgent(e.target.value)} />
                </div>
  
  </>
   
  )
}

export default AgentHeader