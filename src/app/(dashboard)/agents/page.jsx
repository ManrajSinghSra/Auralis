
const page = async() => {


    const data=await fetch("http://localhost:3000/api/agents",{
          cache: "no-store",
    })
    const res=await data.json();
    console.log(res);
    
    
  return (

    <div>Agents
        <h1>{JSON.stringify(res,null,2)}</h1>
    </div>
  )
}

export default page