import Agent from "@/ui/dash/agent/Agent";   
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AgentFooter from "@/ui/dash/agent/AgentFooter";
import { PAGE_SIZE } from "@/const"; 

const page = async({searchParams}) => {
 
       const session=await auth.api.getSession({
        headers:await headers()
       })

       const params=await searchParams;
       const currPage=Number(params.page) || 1;
  
        const data=await fetch(`http://localhost:3000/api/agents?page=${currPage}&limit=${PAGE_SIZE}`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({userId:session.user.id})
        })
  
      const res=await data.json(); 
      
      return (<div className="flex flex-col w-full">
          
          <Agent res={res.data} />

          <AgentFooter currPage={currPage} totalCount={res.totalCount[0].count}  />

    </div>
  )

  
}

export default page