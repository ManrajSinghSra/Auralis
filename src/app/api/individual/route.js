import { db } from "@/db/db";
import { agent } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export const POST=async(req)=>{


    const body=await req.json()

    const user=body.userName
    const agentName=body.agentName
 

    const data=await db.select().from(agent).where(and(eq(agent.name,agentName), eq(agent.userId,user)));
    return Response.json({data})
}