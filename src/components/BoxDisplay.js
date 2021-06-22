import React from 'react';

const BoxDisplay = props => {
  return(
    <div>
      <div style={{display: "flex"}}>
        {
          props.boxes.map((color, i) => {
            return <div key={i} style={{backgroundColor: color, width: 200, height: 200, margin: 10}}>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default BoxDisplay;