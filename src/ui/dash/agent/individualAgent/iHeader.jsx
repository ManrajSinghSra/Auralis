"use client"

import { useRouter } from "next/navigation"

const IHeader = ({agentName}) => {


  const router=useRouter();
  return (
    <div className="flex  items-center gap-4">

        <h1 className='text-4xl font-extrabold cursor-pointer' onClick={()=>router.push("/agents")}> My Agent  </h1>
        <h1 className="text-3xl">  &gt;&gt;</h1>
        <h1 className="text-3xl"> {agentName} </h1>

    </div>
  )
}

export default IHeader