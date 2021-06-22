import React from 'react'

const BoxForm = props => {
  const {boxes, setBoxes} = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    setBoxes([...boxes,event.target.clx.value]);
    event.target.clx.value="";
  };

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Color</label>
      <input type="text" name="clx" />
      <input type="submit" value="add"/>
    </form>
  )
}

export default BoxForm;