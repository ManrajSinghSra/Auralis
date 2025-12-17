import { db } from "@/db/db"
import { agent, meeting } from "@/db/schema"
import { eq } from "drizzle-orm";

export const POST=async(req)=>{

    const {userId}=await req.json() 
    const data=await db.select().from(meeting).leftJoin(agent,eq(meeting.agentId,agent.id)).where(eq(meeting.userId,userId))
   
    return Response.json({data})
}