import { db } from "@/db/db"
import { agent } from "@/db/schema" 

export const GET=async()=>{

  const data = await db.select().from(agent);


     new Promise((res)=>setTimeout(res,2000000))
    // throw new Error("error")

     return new Response(JSON.stringify(data),
       { status: 200,headers: { "Content-Type": "application/json" },
  });
}