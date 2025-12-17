import { auth } from '@/lib/auth'
import Meetingheader from '@/ui/dash/meeting/Meetingheader'
import Meetings from '@/ui/dash/meeting/Meetings' 
import { headers } from 'next/headers'


const page = async() => {

  const session=await auth.api.getSession({
    headers:await headers()
  })

  const data=await fetch(`${process.env.APP_URL}/api/meetings/getMeetings`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({userId:session.user.id})

  })
  
  const res=await data.json();
  
   const data2=await fetch(`${process.env.APP_URL}/api/agents`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({userId:session.user.id})
          })
    const res2=await data2.json()    
     
    

  return (
    <div className='m-4 flex flex-col gap-3'>
    
      <Meetingheader session={session} agents={res2} />
      <Meetings res={res}/>

    </div>
  )
}

export default page