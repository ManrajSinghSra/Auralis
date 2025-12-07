import { db } from "@/db/db";
import { agent } from "@/db/schema";
 
export const POST=async(req)=>{

        const data=await req.json();
        console.log(data);
          const { name, instruction ,userId} = data;

        await db.insert(agent).values({
            name,instruction,userId
        })
 
        
        return Response.json({ok:true})
}