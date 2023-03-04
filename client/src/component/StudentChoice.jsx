import React,{useState,useEffect,useContext} from 'react'
import './studentChoice.css';
import { Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import { CollegeContext } from '../context/CollegeProvider';

const StudentChoice = () => {
  const [points, setPoints] = useState("");
  const history = useHistory();
  console.log(points);
  const [allPoints, setAllPoints] = useState([]);
  const postPoints=(e)=>{
    e.preventDefault();
    if(points.length===0){
      alert("Please write something  in the box");
    }else{
      sendPoints();
    }
  }
  const sendPoints=async()=>{
    try {
        await axios.post("http://localhost:8805/collegePoints",points);
        setPoints("");
      alert("sended")
    // sendPoints("");
    } catch (error) {
      console.log("sendPoints error ",error);
    }
  }

          useEffect(() => {
            getUpdatedPoints();
        }, [])
        const {setCollegeLogged} = useContext(CollegeContext);
        const logout = (e)=>{
          e.preventDefault();
          setCollegeLogged(false);
          history.push('/');
      }
      const getUpdatedPoints=async()=>{
        const data= await axios.get("http://localhost:8805/getstudentComplaint");
        console.log(data.data);
        setAllPoints(data.data.reverse());
       }
      const deletComment = async(e,id)=>{
        e.preventDefault();
        try{
          const sub = await axios.delete(`http://localhost:8805/deleteComment/${id}`);
          getUpdatedPoints();
          alert("deleted");
        }catch(error){
          alert("something is wrong");
        }
        
      }
     
  return (
    <div className="studentChoiceOuterContainer">
      <div className='studentChoice'>
          <Link to='/addnewstudent' className='addresult'>Add New Student</Link>
          <Link to='/subjectAdd' className='addresult'>Add New Subject or Update</Link>
          <Link to='/getUdateResult' className='addresult'>update the Result</Link>
          <Link to='/branchchoice' className='addresult'>Add Result of Existing Student</Link>
          <button onClick={(e)=>logout(e)} className='addnewStudentButton'>LogOut</button>
      </div>
      <div className="complaintAndAnnouncement">
        <div className="complaints">
          <h1>Complaints</h1>
          <div className="allComplaintsItem">
          {
            allPoints.map((item,key)=>{
              return(
                <>
                    <p className="collegepointsLine">{(key+1)+" -> "+item.complaint}</p>
                    <button onClick={(e)=>deletComment(e,item._id)} className='deleteComment'>Del</button>
                </>
              )
            })
          }
          </div>
        </div>
        <div className="announcement">
          <h1>Announcement</h1>
          <input className='pointsBox' placeholder='write your points here' onChange={(e)=>setPoints(e.target.value)} value={points}/>
          <button onClick={(e)=>postPoints(e)} className='postAnnouncementButton'>Post Announcement</button>
        </div>
      </div>
    </div>

  )
}

export default StudentChoice