import React,{useState} from 'react'
import './getUpdate.css';
import {useHistory} from "react-router-dom"
import axios from 'axios';
const GetUpdate = () => {
    
  let history = useHistory();
    const[student,setStudent]=useState({
        name:"",
        rollnumber:"",
        semester:"",
        branch:""
  
    });
    const values=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
        console.log(student);
      }
      const getResultData=async(e)=>{
        e.preventDefault();
        if(student.rollnumber.length===0 || student.name.length===0 || student.semester.length===0 || student.branch.length===0){
            alert('Please Fill the all Details');
        }else{
            loadContactList();
        }
    }
    const loadContactList= async () =>{
      try {
       const data=await axios.get(`https://main-srms-backend-k1yr68eci-navneetkumarjpr.vercel.app/getResult/${student.rollnumber}/${student.semester}`);
       console.log('datata  ',data);
       alert("result found");
       history.push(`/updateResult/${student.rollnumber}/${student.semester}`);
      } catch (error) {
        alert("Result of the Student is not Found");
      }
    };
  return (
    <div className='getUpdate'>
        <h1>Which Result you Want to Update</h1>
         <input onChange={(e)=>{values(e)}} name='name' className='subjectName' placeholder='Enter the Name of Student'/>
         <input onChange={(e)=>{values(e)}} name='rollnumber' className='subjectName' placeholder='Enter the Roll Number'/>
         <input onChange={(e)=>{values(e)}} name='semester' className='subjectName' placeholder='Enter the Semester like - 1'/>
         <input onChange={(e)=>{values(e)}} name='branch' className='subjectName' placeholder='Enter the Branch like - ECE'/>
         <button onClick={(e)=>getResultData(e)} className='getResButton'>get</button>
    </div>
  )
}

export default GetUpdate