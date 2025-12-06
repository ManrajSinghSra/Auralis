"use client"
import { FiLogOut } from "react-icons/fi";


import { SidebarMenuButton } from '@/components/ui/sidebar' 
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from 'lucide-react'  
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation'; 
import { GenerateAvatar } from '../avatar/avatar';

const User = () => {

      const router = useRouter();

    const {data:session}= authClient.useSession()


    if(!session){
        return<>Loading///</>
    }
  return (
    <>
          <DropdownMenu>
                        <DropdownMenuTrigger asChild  className="border border-foreground w-full p-5">
                            <SidebarMenuButton className="text-center flex p-7">

                                <GenerateAvatar 
                                seed={session.user.name}
                                variant="botttsNeutral"
                                />
                                <h1>{session.user.name}</h1>
                                <ChevronUp className="ml-auto" />

                            </SidebarMenuButton>
                        </DropdownMenuTrigger>



                        <DropdownMenuContent side="top" className="w-55">
                            
                                
                               <div className='flex gap-4 p-1 w-40'>
                                    
                                    <div>
                                        <GenerateAvatar 
                                        seed={session.user.name}
                                        variant="botttsNeutral"
                                         />
                                    </div>
                                   <div>
                                     <h1>{session && session.user.name}</h1>
                                
                                    
                                    <h1 className='text-gray-500'>@{session && session.user.email.substring(0,10)}</h1>
                                   </div>
                                </div>
                            
                             
                            <DropdownMenuSeparator />
                            
                            <DropdownMenuItem>

                                <FiLogOut />
                                <span onClick={()=>{
                                    authClient.signOut({
                                        fetchOptions:{
                                            onSuccess:()=>{
                                                router.push("/signin")
                                            }
                                        }
                                    })
                                }}>
                                    Log out</span>

                            </DropdownMenuItem>

                        </DropdownMenuContent>
            </DropdownMenu>
    </>
  )
}

export default User