import { EditMeetingDropDown } from "@/ui/dash/meeting/EditMeetingDropDown";

const layout = async({children,params}) => {

    const {meetId}=await params

  const data=await fetch(`${process.env.APP_URL}/api/meetId`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({meetId})
  })
  const  res=await data.json();
  const meetingData=res.data[0];
 

  const meetingName=meetingData.meeting.name

  console.log(meetingName);
  
  return (
  <div className="m-10  ">

    <div className='flex justify-between  '>
         <div>
            <span className='text-4xl font-extrabold text-gray-500'>Meetings &gt;&gt;</span>
           <span className='text-4xl font-extralight '>{meetingName}</span>
         </div>
        <div>
          <EditMeetingDropDown />
        </div>
        
    </div>
    <div className="mt-10">
       {children}
    </div>


   
    </div>
  )
}

export default layout