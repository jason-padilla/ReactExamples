import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Navbar = (props) => {
  const context = useContext(MyContext);
  return (
  <div>
    <h1>The name will go here {context.contextVal}</h1>
  </div>)
}

export default Navbar;