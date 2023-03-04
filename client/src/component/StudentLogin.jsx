import './studentLogin.css';
import React,{useState,useContext,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const StudentLogin = () => {
  const {studentLogged, setStudentLogged} = useContext(UserContext);
  let history = useHistory();
  // useEffect(() => {
  //   history.push("/studentLogin")
  // }, [])
  

  const[student,setStudent]=useState({
      email:"",
      rollnumber:"",
      password:""
  });
  const values=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});
      // console.log(student)
  }
  const loginStudent=(e)=>{
      e.preventDefault();
      if(student.rollnumber.length===0 || student.email.length===0 || student.password.length===0){
          alert('Please Fill the all Details');
      }else{
        // setStudentLogged("kjhsfhk")
          loadContactList();
      }
  }
  const loadContactList= async () =>{
    try {
     const loginstudent= await axios.post("http://localhost:8805/studentlogin",student);
     setStudentLogged(loginstudent.data);
     if(loginstudent!==null){
      console.log("student logged ",studentLogged);
      console.log("logged in", loginstudent.data);
      history.push(`/reportcard/${student.rollnumber}`);
     }else{
       alert('wrong email , roll Number, password');
     }
    } catch (error) {

      console.log('login again');
      alert('wrong email , roll Number, password');
    }
  };
  const [points, setPoints] = useState("");
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
        await axios.post("http://localhost:8805/complaintsPoints",points);
        // setAllPoints("");
        setPoints("")
      alert("sended")
    // sendPoints("");
    } catch (error) {
      console.log("sendPoints error ",error);
    }
  }

          useEffect(() => {
            const getPoints=async()=>{
              const data= await axios.get("http://localhost:8805/getcollegePoints");
              console.log(data.data);
              setAllPoints(data.data.reverse());
             }
            getPoints();
        }, [])

  return (
    <div className='studentLogin' >
        <div className="studentLoginContainer">
            <h1>Student Login</h1>
            <input type='email' value={student.email} name="email" onChange={(e)=>values(e)} required className='emailInput' placeholder='Enter your Email'/>
            <input  className='passwordInput' value={student.rollnumber} name="rollnumber" onChange={(e)=>values(e)} required placeholder='Enter your Roll Number'/>
            <input type='password'  value={student.password} name="password" onChange={(e)=>values(e)} required className='passwordInput' placeholder='Enter your Password'/>
            <button onClick={(e)=>{loginStudent(e)}} className='loginButton'>Login</button>
       </div>
       <div className="complaintAndAnnouncement">
        <div className="studentcomplaints">
          <h1>Complaints</h1>
          <input className='pointsBox' placeholder='write your points here' onChange={(e)=>setPoints(e.target.value)} value={points}/>
          <button onClick={(e)=>postPoints(e)} className='postAnnouncementButton'>Post Complaint</button>
        </div>
        <div className="studentannouncement">
          <h1>Announcement</h1>
          <div className="allAnnouncement">

          {
            allPoints.map((item,key)=>{
              return(
              <>
                <p className="collegepointsLine">{(key+1)+" -> "+item.point}</p>
              </>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin