import React from 'react';
import {Link} from '@reach/router';
const PageOne = (props) => {

  return ( <div>
    <h1>This is page One</h1>
    <Link to="/route-two"> Go to Page Two</Link>
  </div> )
}

export default PageOne;