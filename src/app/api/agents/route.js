import { db } from "@/db/db"
import { agent } from "@/db/schema"  
import { eq, sql } from "drizzle-orm"; 

export const POST=async(req)=>{
 

  const {userId}=await req.json()
 

  const {searchParams}= new URL(req.url);

  const pageNumber=Number(searchParams.get("page"))
  const limit=Number(searchParams.get("limit"))

  const offset=(pageNumber-1)*limit;

  const hasPagination= pageNumber>0 && limit>0;
 
 
  
  let data;
  if(hasPagination){
    data = await db.select().from(agent).where(eq(agent.userId,userId)).limit(limit).offset(offset);
  }
  else{ 
        data = await db.select().from(agent).where(eq(agent.userId,userId))
  }


  const totalCount=await db.select({count:sql`count(*)`}).from(agent).where(eq(agent.userId,userId))

 
     return  Response.json({data,totalCount});
}