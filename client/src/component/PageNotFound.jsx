import React from 'react'
import "./pageNotFound.css"

import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
        <h1>Page Not Found</h1>
        <Link to='/' className='collegeLoginButon'>Home page</Link>
    </div>

  )
}

export default PageNotFound