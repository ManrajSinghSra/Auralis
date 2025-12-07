import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import {DashSide} from '@/ui/dash/Dashboar.Sidebar'
import DashNavbar from '@/ui/dash/DashNavbar'
import React from 'react'

const layout = ({children}) => {
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