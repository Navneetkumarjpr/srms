import React from 'react'
import { Link } from 'react-router-dom';
import './allLoginPage.css';

const AllLoginPage = () => {
  return (
    <div className='allLoginPage'>
        <h1 className="loginPageHeading">Announcements & Results</h1>
        <div className="buttons">
           <Link to='/collegeLogin' className='collegeLoginButon'>College Login</Link>
           <Link to='/studentLogin' className='collegeStudentButon'>Student Login</Link>
        </div>
    </div>
  )
}

export default AllLoginPage