import React, { useState } from 'react'

const UserForm = (props) => {
  const {inputs, setInputs} = props;
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const onChange = (event) => {
    setInputs({...inputs, [event.target.name]: event.target.value})
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    const newUser = {firstname:inputs.firstName,
                    email:inputs.email,
                    password:inputs.password}
    console.log(newUser)
    setHasSubmitted(true)
  }

  return (
    <form onSubmit = {handleCreateUser}>
      {
        hasSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome please submit the form</h3>

      }
      <label htmlFor="firstName">First Name</label>
      <input onChange={onChange} type="text" name="firstName" />
      <label htmlFor="lastName">Last Name</label>
      <input onChange={onChange} type="text" name="lastName"/>
      <label htmlFor="email">Email</label>
      <input onChange={onChange} type="text" name="email"/>
      <label htmlFor="password">Password</label>
      <input onChange={onChange} type="password" name="password"/>
      <input type="submit" value="Create User"/>
    </form>
  )
}
export default UserForm