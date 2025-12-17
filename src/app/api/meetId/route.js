import { db } from "@/db/db";
import { agent, meeting } from "@/db/schema";
import { eq } from "drizzle-orm";

export const POST=async(req)=>{
 
     const {meetId}=await req.json();
     
     const bdata=await db.select().from(meeting).leftJoin(agent,eq(meeting.agentId,agent.id)).where(eq(meeting.id,meetId))

     return Response.json({data:bdata},{status:200})
}