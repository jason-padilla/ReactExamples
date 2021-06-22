import React from 'react'

const MessageForm = props => {
  const {setMessage} = props;
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return(
    <form onSubmit={handleSubmit} action="">
      <textarea onChange={(e) => {setMessage(e.target.value)} }
      name="" id="" cols="30" rows="10" ></textarea>
    </form>
  )
}

export default MessageForm;