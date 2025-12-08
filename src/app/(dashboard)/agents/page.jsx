import Agent from "@/ui/dash/agent/Agent";   
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AgentFooter from "@/ui/dash/agent/AgentFooter";
import { PAGE, PAGE_SIZE } from "@/const";

const page = async() => {


     PAGE
     PAGE_SIZE

       const session=await auth.api.getSession({
        headers:await headers()
       })
         
        const data=await fetch(`http://localhost:3000/api/agents?1?pageSize=${PAGE}&limit=${PAGE_SIZE}`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({userId:session.user.id})
        })
  
      const res=await data.json();
      console.log(res);

      return (<div className="flex flex-col w-full">
      
      <Agent res={res} />

      <AgentFooter/>

    </div>
  )

  
}

export default page