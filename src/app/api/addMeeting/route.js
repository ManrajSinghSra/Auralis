export const POST=async(req)=>{


    const data=await req.json();

    console.log("data",data);
    
    return Response.json({hey:true});
}