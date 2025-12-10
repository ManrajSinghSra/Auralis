import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" 
import { GenerateAvatar } from "../../../../../Avatar/avatar";
import IHeader from "@/ui/dash/agent/individualAgent/iHeader";
   

const page = async({params}) => {
    
      const {agentName}=await params
      const session=await auth.api.getSession({
        headers:await headers()
      })
      const userName=session.user.id

      const data=await fetch("http://localhost:3000/api/individual",{
        method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({agentName,userName})
      });

      const response=await data.json();
      const agentData=response.data[0];
   
      

  return (
      <div className='flex m-3 flex-col'>

        <IHeader agentName={agentName} />
      
            <Card className="m-10 sm:w-auto md:w-200">
 
                <CardHeader>
                  <CardTitle>
                      <div className="flex gap-3 items-center">
                         <GenerateAvatar seed={agentName} variant="botttsNeutral"/>
                         <h1 className="text-2xl">{agentName}</h1>
                      </div>
                  </CardTitle>
                  <CardDescription>{agentData.instruction}</CardDescription>
                </CardHeader>

                {/* <CardContent>
                  <p>Card Content</p>
                </CardContent>

                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
      </Card>

        </div>
  )
}

export default page