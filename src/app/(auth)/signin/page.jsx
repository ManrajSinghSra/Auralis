import { auth } from '@/lib/auth'
import { SignInView } from '@/ui/auth/signin' 
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {


  const session=await auth.api.getSession({
    headers:await headers()
  })

  if(session){
    return redirect("/")
  }
  return (
    <div>
        
        <SignInView />
    </div>
  )
}

export default page