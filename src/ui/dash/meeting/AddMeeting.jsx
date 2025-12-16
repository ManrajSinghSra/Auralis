"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle, 
} from "@/components/ui/dialog" 
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import { GenerateAvatar } from "../../../../Avatar/avatar" 
import { toast } from "sonner"
import { useRouter } from "next/navigation"


const AddMeeting = ({agents,open,handleOpen,session}) => {
   
      const agentsN=agents.data;

      const router=useRouter();
      
      const [addingMeeting,setAddingMeeeting]=useState({name:"",agentId:""})
      const [error,setError]=useState({have:false,text:""});
      
      const handleSubmit=async(e)=>{
                e.preventDefault()                  
                const res=await fetch(`http://localhost:3000/api/addMeeting`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({name:addingMeeting.name,userId:session.user.id,agentId:addingMeeting.agentId})
                })
  
                if(res.status==200){
                     toast.success("Meeting created successfully")
                      setError({have:false,text:""})
                     handleOpen()
                     router.refresh()

                }
                if(res.status==400){
                    const e=await res.json()
                    setError({have:true,text:e.error})
                }
        }

  return (
    <div>

        <Dialog   open={open} onOpenChange={handleOpen} >
                
                        <DialogContent className="sm:max-w-[425px]">
        
                            <DialogHeader>
                                <DialogTitle >New Meeting</DialogTitle>
                                <DialogDescription>Make a new Meeting</DialogDescription>
                            </DialogHeader>
        
                           <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">

                                <div>
                                    <Label htmlFor="title">Title</Label>
                                    <Input placeholder="meeting" name="name" value={addingMeeting.name} onChange={(e)=>setAddingMeeeting({...addingMeeting,name:e.target.value})} ></Input>
                                </div>

                                <Select
                                  value={addingMeeting.agentId}
                                 onValueChange={(e)=>setAddingMeeeting({...addingMeeting,agentId:e})}>

                                    <SelectTrigger className="w-full">
                                        <SelectValue  placeholder="Select an Agent" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup className="flex flex-col gap-4" >
                                        <SelectLabel>Agents</SelectLabel>
         
                                           {agentsN.map((curr)=>{
                                            return(
                                                <div className="flex " key={curr.id} >
                                                <GenerateAvatar seed={curr.name} variant="botttsNeutral" />
                                                <SelectItem className=""  value={curr.id}>{curr.name}</SelectItem>
                                                </div>)
                                        })}
                                       
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {error.have && (
                                        <div className="rounded-md border border-red-300 bg-red-50 px-3 py-2">
                                            <h1 className="text-sm font-medium text-red-600">
                                            {error.text}
                                            </h1>
                                        </div>
                                        )}

                                <div className="flex gap-3 mb-4 ">
                                    <h1 className="text-gray-500">Not found what you are looking for?</h1>
                                    <h1 className="text-blue-900">Create one</h1>
                                </div>
                               
                            </div>

                                <DialogFooter className="">
                                    <DialogClose asChild >
                                    <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Save</Button>
                                </DialogFooter>
                            </form>
        
                </DialogContent>
                
        
            </Dialog>


     
    </div>
  )
}

export default AddMeeting