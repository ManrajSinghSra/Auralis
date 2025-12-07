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
import { Label } from "@/components/ui/label"
import { GenerateAvatar } from "../../../Avatar/avatar"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea" 
import { authClient } from "@/lib/auth-client"

import { useRouter } from "next/navigation";

const AgentDialog = ({open,setOpen,}) => {

    const router=useRouter()


    const [agentName,setName]=useState("Abtone");
    const [instruction,setInstruction]=useState("This is a Math Tutor")

    const {data:session}= authClient.useSession()
      
    

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
              const res = await fetch("/api/addAgents", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: agentName, instruction,userId:session.user.id }),
              });
            
              if (!res.ok) throw new Error("Failed to create agent");
            
              setName("");
              setInstruction("");
              router.refresh();
              setOpen(false);
            } 
            catch (err) {
              console.error(err);
            }
        };

 
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        
                <DialogContent className="sm:max-w-[425px]">

                    <DialogHeader>
                        <DialogTitle>New Agent</DialogTitle>
                        <DialogDescription>Make a new agent</DialogDescription>
                    </DialogHeader>

                    <div>
                        <GenerateAvatar 
                        seed={agentName}
                        variant="botttsNeutral"
                        className="w-40 h-50"
                         />
                    </div>

                   <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="eg.. John"  value={agentName} onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="instruction">Instructions</Label>
                            <Textarea id="instruction" name="instruction"  value={instruction} onChange={(e)=>setInstruction(e.target.value)} />

                        </div>
                       
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                    </form>

        </DialogContent>
        

    </Dialog>

  )
}

export default AgentDialog