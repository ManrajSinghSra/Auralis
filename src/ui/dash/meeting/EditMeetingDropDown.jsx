import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function EditMeetingDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10" align="end">
       
       
          <DropdownMenuItem>
            Edit 
          </DropdownMenuItem>
             <DropdownMenuItem>
            Delete 
          </DropdownMenuItem>
          
       
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
