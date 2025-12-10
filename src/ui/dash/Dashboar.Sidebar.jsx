import { BotIcon, VideoIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar" 

import User from "./Dasboars.User"
import Link from "next/link"
 
const items = [
  {
    title: "Meeting",
    url: "/meeting",
    icon: VideoIcon,
  },
  {
    title:"Agents",
    url:"/agents",
    icon:BotIcon
  }
]

export function DashSide() {
  return (
    <Sidebar> 

        <SidebarHeader>
            <div className="flex gap-4">
                <img src="../logo.svg" alt="" className="w-10 h-10" />
                <h1 className="text-3xl font-extrabold">Auralis</h1>
            </div>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent>

            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>

                        {items.map((curr) => (
                              <Link  key={curr.title} href={curr.url}>
                                <SidebarMenuItem key={curr.title}>
                                  <SidebarMenuButton className="h-10 hover:bg-blue-600 hover:text-white">
                                    <curr.icon className="w-5 h-5" />
                                    {curr.title}
                                  </SidebarMenuButton>
                              </SidebarMenuItem></Link>
                            ))}
                  
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

        </SidebarContent>

        <SidebarFooter>
           <SidebarMenu>
            <SidebarMenuItem>
              <User />
            </SidebarMenuItem>
            </SidebarMenu >
        </SidebarFooter>

    </Sidebar>
  )
}