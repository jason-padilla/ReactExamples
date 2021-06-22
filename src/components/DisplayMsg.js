import React from 'react'

const DisplayMsg = (props) => {
  console.log("hey")
  return(
    <div>
      <h2>This is the message</h2>
      <h2>{props.message}</h2>
    </div>
  )
}

export default DisplayMsg;