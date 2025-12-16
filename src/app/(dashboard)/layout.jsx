import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { auth } from '@/lib/auth'
import {DashSide} from '@/ui/dash/Dashboar.Sidebar'
import DashNavbar from '@/ui/dash/DashNavbar'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async({children}) => {

   const session =await auth.api.getSession({
    headers:await headers()
  })

  if(!session){
    return redirect("/signin");
  }
  return (
    <>

        <SidebarProvider>
          
            <DashSide />

          <main className='w-full'>
             
             <DashNavbar/>
              {children}
          </main>

        </SidebarProvider>
    </>
  )
}

export default layout