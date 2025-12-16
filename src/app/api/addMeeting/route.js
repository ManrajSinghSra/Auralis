import { db } from "@/db/db";
import { meeting } from "@/db/schema";

export const POST=async(req)=>{
 
    const {name,userId,agentId}=await req.json();
 
    if(!name || !userId || !agentId){
        return Response.json({error:"Data Incomplete"},{status:400})
    }

    console.log(name,userId,agentId);

    await db.insert(meeting).values({
        name,userId,agentId
    })

    
    return Response.json({hey:true});
}