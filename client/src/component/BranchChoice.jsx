import React,{useContext} from 'react'
import { Link,useHistory,useParams } from 'react-router-dom';
import { CollegeContext } from '../context/CollegeProvider';
import './branchChoice.css';
const BranchChoice = () => {
  const choiceBranch = useParams();
  let history = useHistory();
  const {setCollegeLogged} = useContext(CollegeContext);
  const logout = (e)=>{
    e.preventDefault();
    // setStudentLogged({});
    setCollegeLogged(false);
    history.push('/');
}
  return (
    <div className='semesterChoice'>
      <h1 className="semsterlinkHeading">Branch</h1>
      <button onClick={(e)=>logout(e)} className='studentLogoutButton'>LogOut</button>
        <div className="semesterlinkContainer">
          <Link to='/addsemresult/CS'  className='addsemesterlink'>CS</Link>
          <Link to='/addsemresult/IT' className='addsemesterlink'>IT</Link>
          <Link to='/addsemresult/EC'  className='addsemesterlink'>ECE</Link>
          <Link to='/addsemresult/EE' className='addsemesterlink'>EE</Link>
          <Link to='/addsemresult/EIC'  className='addsemesterlink'>EIC</Link>
          <Link to='/addsemresult/AE'  className='addsemesterlink'>AE</Link>
          <Link to='/addsemresult/CE'className='addsemesterlink'>CE</Link>
          <Link to='/addsemresult/ME' className='addsemesterlink'>ME</Link>
          <Link to='/addsemresult/PE' className='addsemesterlink'>PE</Link>
        </div>
    </div>
  )
}

export default BranchChoice