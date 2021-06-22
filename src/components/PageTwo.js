import React from 'react';
import {Link} from '@reach/router';
const PageTwo = (props) => {

  return ( <div>
    <h1>This is page Two</h1>
    <Link to="/route-one"> Go to Page One</Link>
  </div> )
}

export default PageTwo;