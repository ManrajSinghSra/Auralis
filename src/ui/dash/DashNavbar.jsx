"use client"

import { Button } from "@/components/ui/button"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { SearchIcon } from "lucide-react" 
import Comd from "./Command"
import { useEffect, useState } from "react"

const DashNavbar = () => {

    const {state,isMobile,toggleSidebar}=useSidebar()

    const [open,isOpen]=useState(false);

    const setOpen=()=>{
        isOpen(!open)
    }

   useEffect(() => {
            const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                isOpen((open) => !open)
            }
            }
            document.addEventListener("keydown", down)
            return () => document.removeEventListener("keydown", down)
        }, [])

  return (
  <>

     <Comd open={open} setOpen={setOpen} />
    <div className="p-3 border-2 rounded-1xl flex  gap-10">
         <SidebarTrigger />
         <Button variant="outline" className="group w-50 flex justify-start" onClick={(e)=>isOpen(!open)}>
            <SearchIcon/>
           <h1>Search</h1>
            <h1 className="pl-10 text-gray-400 hidden group-hover:block">
                Ctrl+k
            </h1>
         </Button>
        
    </div>
    </>
  )
}

export default DashNavbar