import React,{useState,useContext} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './addNewStudent.css';
import { CollegeContext } from '../context/CollegeProvider';

const AddNewStudent = () => {
  let history = useHistory();
  const [studentRoll, setStudentRoll] = useState("")
  const[student,setStudent]=useState({
      name:"",
      rollnumber:"",
      email:"",
      password:""
  });
  const values=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});
      console.log(student)
  }
  const addNewStudent=(e)=>{
      e.preventDefault();
      if(student.name.length===0 || student.rollnumber.length===0 || student.email.length===0 || student.password.length===0){
          alert('Please Fill the all Details');
      }else{
          alert('Successfully added the new Contact');
          loadContactList();
      }
  }
  const loadContactList= async () =>{
    try {
      await axios.post("https://main-srms-backend-k1yr68eci-navneetkumarjpr.vercel.app/newstudent",student);
      console.log("added");
      history.push("/studentchoice");
    } catch (error) {
      console.log(error);
    }
  };
  const {setCollegeLogged} = useContext(CollegeContext);
  const logout = (e)=>{
    e.preventDefault();
    setCollegeLogged(false);
    history.push('/');
}
   const getDetail=(e)=>{
       e.preventDefault();
       history.push(`/getStudentDetail/${studentRoll}`);
   }
  return (
    <div className='addNewStudent' >
        <div className="addnewStudentContainer">
            <h1 className="addnewStudentHeading">Add New Student</h1>
            {/* <form> */}
              <div className="newStudentInfo">
                  <input className='newStudentInfoDetail' value={student.name} name="name" onChange={(e)=>values(e)}  type="text" required placeholder='Name of the Student'/>
                  <input className='newStudentInfoDetail' value={student.rollnumber} name="rollnumber" onChange={(e)=>values(e)} type="text" required placeholder='Roll Number of the Student'/>
                  <input className='newStudentInfoDetail' value={student.email} name="email" onChange={(e)=>values(e)}  type="email" required placeholder='Email of the Student'/>
                  <input className='newStudentInfoDetail' value={student.password} name="password" onChange={(e)=>values(e)} type="password" required placeholder='Password of the Student'/>
              </div>
            {/* </form> */}
            <button onClick={(e)=>{addNewStudent(e)}} className='addnewStudentButton'>Add Student</button>
            <h2>Or</h2>
            <input className='newStudentInfoDetail' value={studentRoll} name="studentRoll" onChange={(e)=>setStudentRoll(e.target.value)} type="text" required placeholder='Roll Number of the Student'/>
            <button onClick={(e)=>{getDetail(e)}} className='addnewStudentButton'>Get Detail</button>
            <button onClick={(e)=>logout(e)} className='addnewStudentButton'>LogOut</button>
        </div>
    </div>
  )
}

export default AddNewStudent