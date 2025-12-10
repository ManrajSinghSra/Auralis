import Meetingheader from '@/ui/dash/meeting/Meetingheader'
import Meetings from '@/ui/dash/meeting/Meetings'
import MeetingSearch from '@/ui/dash/meeting/MeetingSearch'


const page = async() => {



  const data=await fetch("http://localhost:3000/api/meetings/getMeetings",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({hello:"Meeting"})

  })

  const res=await data.json();

  console.log(res);
  


    
  return (
    <div className='m-4 flex flex-col gap-3'>
    
      <Meetingheader />
      <MeetingSearch  />

      <Meetings res={res}/>

    </div>
  )
}

export default page