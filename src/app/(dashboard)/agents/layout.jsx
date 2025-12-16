import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const layout = async({children}) => {


   const data=await auth.api.getSession({
      headers:await headers()
    })
    if(!data){
      redirect("/signin")
    }
  return (
    <div className='flex flex-col justify-center items-center'> 
      {children}
    </div>
  )
}

export default layout 