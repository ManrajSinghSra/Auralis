import { db } from "@/db/db"
import { agent } from "@/db/schema"  
import { eq } from "drizzle-orm"; 

export const POST=async(req)=>{
 

  const {userId}=await req.json()

  console.log(userId);
  
  
  const data = await db.select().from(agent).where(eq(agent.userId,userId))

 
     return new Response(JSON.stringify(data),
       { status: 200,headers: { "Content-Type": "application/json" },
  });
}