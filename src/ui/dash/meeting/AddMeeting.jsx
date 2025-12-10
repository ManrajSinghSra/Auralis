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
import { GenerateAvatar } from "../../../../Avatar/avatar"
import { Textarea } from "@/components/ui/textarea"


const AddMeeting = ({open,handleOpen}) => {
  return (
    <div>

        <Dialog  open={open} onOpenChange={handleOpen} >
                
                        <DialogContent className="sm:max-w-[425px]">
        
                            <DialogHeader>
                                <DialogTitle>New Meeting</DialogTitle>
                                <DialogDescription>Make a new Meeting</DialogDescription>
                            </DialogHeader>
        
                            <div>
                                <GenerateAvatar 
                                seed="homo"
                                variant="botttsNeutral"
                                className="w-40 h-50"
                                 />
                            </div>
        
                           <form>
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" name="name" placeholder="eg.. John"    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="instruction">Instructions</Label>
                                    <Textarea id="instruction" name="instruction"    />
        
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


     
    </div>
  )
}

export default AddMeeting