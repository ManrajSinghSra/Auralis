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



const AddMeeting = ({agents,open,handleOpen}) => {
  
      const agentsN=agents.data;

      const [addingMeeting,setAddingMeeeting]=useState({title:"",userId:"",agentId:""})

      const handleSubmit=(e)=>{
         e.preventDefault() 
         console.log();
         
         
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
                                    <Input placeholder="meeting" name="title"></Input>
                                </div>

                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue  placeholder="Select an Agent" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>Agents</SelectLabel>
                                           {agentsN.map((curr)=>{
                                            return(
                                        <SelectItem className="" key={curr.id} value={curr.name}>{curr.name}</SelectItem>)
                                        })}
                                       
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

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