import { Avatar } from "@/components/ui/avatar";
import { botttsNeutral, initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

export const GenerateAvatar=({seed,className,variant})=>{
    let avatar;
    if(variant=="botttsNeutral"){
        avatar=createAvatar(botttsNeutral,{seed})
    }
    else{
        avatar=createAvatar(initials,{seed,fontWeight:500,fontSize:45})
    }
    return(<>

          <Avatar>
            <AvatarImage src={avatar.toDataUri()}/>
            <AvatarFallback>
                 
            </AvatarFallback>

          </Avatar>

    
         </>)

}