import { headers } from "next/headers";
import DashboardUserClient from "./Dashboard.User.Client";
import { auth } from '@/lib/auth'; 
import { redirect } from "next/dist/server/api-utils";

const User = async() => {
 
    const session=await auth.api.getSession({
        headers:await headers()
    })

    if(!session){
        redirect("/signin")
    }

  return (
    <>
         <DashboardUserClient session={session} />
    </>
  )
}

export default User