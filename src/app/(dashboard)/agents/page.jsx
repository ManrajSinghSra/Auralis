import Agent from "@/ui/dash/agent/Agent"; 

const page = async() => {

    const data=await fetch("http://localhost:3000/api/agents",{
          cache: "no-store",
    })
    
    const res=await data.json();
    console.log(res);

  return (

    <Agent res={res}/>
  )
}

export default page