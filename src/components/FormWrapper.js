import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const FormWrapper = (props) => {
  const context = useContext(MyContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    context.setContextVal(e.target.newName.value);
  }
  return (
  <div>
    <form onSubmit={handleSubmit}action="">
      <label htmlFor="">Your Name: </label>
      <input name="newName" type="text"/>
    </form>
  </div>)
}

export default FormWrapper;