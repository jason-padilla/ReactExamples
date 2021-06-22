import React from 'react'

const UserResults = (props) => {
  const {firstName, lastName, email, password} = props.data;
  return(
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  )
}

export default UserResults;