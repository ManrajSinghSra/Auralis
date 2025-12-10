import React from 'react'

const Meetings = ({res}) => {
  return (
    <div>Meetings
        <h1>
            {JSON.stringify(res,null,2)}
        </h1>
    </div>
  )
}

export default Meetings