import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ban } from "lucide-react";

const page =async ({params}) => {

    const {meetId}=await params
  const data=await fetch(`${process.env.APP_URL}/api/meetId`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({meetId})
  })
  const  res=await data.json();
  const meetingData=res.data[0];


  
  
  return (
    <div> 

      <Card  className="flex items-center justify-center">
          <h1 className="text-3xl">
            Not Started Yet
          </h1>
          <p>Once you start, a summary appear here.</p>

          <div className="flex gap-3">
            <Button variant="secondary"><Ban />Cancel Meeting</Button>
            <Button className="bg-blue-900">Start Meeting</Button>
          </div>


      </Card>
    </div>
  )
}

export default page