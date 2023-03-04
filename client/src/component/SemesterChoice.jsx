import React,{useContext, useEffect} from 'react'
import { Link, useParams,useHistory } from 'react-router-dom';
import { CollegeContext } from '../context/CollegeProvider';
import './semesterChoice.css';

const SemesterChoice = ({setBranch}) => {
  const choiceBranch = useParams();
  const {setCollegeLogged} = useContext(CollegeContext);
  let history = useHistory();
  useEffect(() => {
    setBranch(choiceBranch.branch);
    // console.log(choiceBranch.branch);
  }, [])
  const logout = (e)=>{
    e.preventDefault();
    // setStudentLogged({});
    setCollegeLogged(false);
    history.push('/');
}
  return (
    <div className='semesterChoice'>
      <h1 className="semsterlinkHeading">Add Semester Result</h1>
      <button onClick={(e)=>logout(e)} className='studentLogoutButton'>LogOut</button>
        <div className="semesterlinkContainer">
          <Link to='/addresult/1/First'  className='addsemesterlink'>1st Semester</Link>
          <Link to='/addresult/2/Second' className='addsemesterlink'>2nd Semester</Link>
          <Link to='/addresult/3/Third'  className='addsemesterlink'>3rd Semester</Link>
          <Link to='/addresult/4/Fourth' className='addsemesterlink'>4th Semester</Link>
          <Link to='/addresult/5/Fifth'  className='addsemesterlink'>5th Semester</Link>
          <Link to='/addresult/6/Sixth'  className='addsemesterlink'>6th Semester</Link>
          <Link to='/addresult/7/Seventh'className='addsemesterlink'>7th Semester</Link>
          <Link to='/addresult/8/Eighth' className='addsemesterlink'>8th Semester</Link>
        </div>
    </div>
  )
}

export default SemesterChoice