import { db } from "@/db/db"
import { meeting } from "@/db/schema"

export const POST=async()=>{
      
   const data=await db.select().from(meeting)

   console.log(data);
   
    return Response.json({data})
}