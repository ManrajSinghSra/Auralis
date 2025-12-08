import { Button } from '@/components/ui/button'
import React from 'react'

const AgentFooter = () => {
  return (
    <div className='flex justify-between mx-10 my-10'>

         <div className='text-gray-600'>
            Page of 1 of 3
         </div>
         <div className='flex gap-4'>
             <Button className="" variant="outline">Previous</Button>
             <Button variant="outline">Next</Button>
         </div>

    </div>
  )
}

export default AgentFooter