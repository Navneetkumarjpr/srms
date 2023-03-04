import './firstsem.css';
import React,{useEffect,useState} from 'react'
import {useParams } from 'react-router-dom';
import axios from 'axios';
const FirstSem = ({sem,setStudent,setSem,branch,student, values, addResultData}) => {
  const choiceSem = useParams();
  useEffect(() => {
    setSem(choiceSem.sem);
    const fetchSubject=async()=>{
      const data  = await  axios.get(`http://localhost:8805/getsubject/${choiceSem.sem}/${branch}`)
      console.log("data ",data.data);
      student.name="";
      student.rollnumber="";
      student.semester=choiceSem.sem;
      student.fathername="";
      student.mothername="";
      if(data.data.length===0 ){
        student.subject1name="";
        student.subject2name="";
        student.subject3name="";
        student.subject4name="";
        student.subject5name="";
        student.subject6name="";
      }else{
        console.log("inside")
      student.subject1name=data.data[0].subject1;
      student.subject2name=data.data[0].subject2;
      student.subject3name=data.data[0].subject3;
      student.subject4name=data.data[0].subject4;
      student.subject5name=data.data[0].subject5;
      student.subject6name=data.data[0].subject6;
      }
      student.subject1="";
      student.subject2="";
      student.subject3="";
      student.subject4="";
      student.subject5="";
      student.subject6="";
      student.totalmarks="0";
      student.percentage="0";
      student.branch=branch;
      setStudent({...student});
      // console.log("subjects ",allSubject[0].subject1);
    }
    fetchSubject();
    // console.log(choiceBranch.branch);
  }, [sem])
  return (
    <div className='firstsem'>
        <h1>{`Add Result of ${choiceSem.name} Semester`}</h1>
        <div className='innerContainer'>
         <input className='newStudentInfoDetail' value={student.name} name='name' onChange={(e)=>{values(e)}} type="text" required placeholder='Name of the Student'/>
         <input className='newStudentInfoDetail' value={student.rollnumber} name='rollnumber' onChange={(e)=>{values(e)}} type="text" required placeholder='Roll Number'/>
         <input className='newStudentInfoDetail' value={choiceSem.sem} name='semester'  type="text"  placeholder='Semester'/>
        </div>
        <div className='innerContainer'>
         <input className='newStudentInfoDetail' value={student.fathername} name='fathername' onChange={(e)=>values(e)} type="text" required placeholder='Father Name'/>
         <input className='newStudentInfoDetail' value={student.mothername} name='mothername' onChange={(e)=>values(e)} type="text" required placeholder='Mother Name'/>
         <input className='newStudentInfoDetail' value={branch} name='branch'  type="text"  placeholder='Branch Name'/>
        </div>
        <div className='innerContainer'>
         <h2>{student.subject1name}</h2>
         <input className='newStudentInfoDetail' value={student.subject1} name='subject1' onChange={(e)=>values(e)} type="text" required placeholder='Marks 0'/>
        </div>
        <div className='innerContainer'>
        <h2>{student.subject2name}</h2>
         <input className='newStudentInfoDetail' value={student.subject2} name='subject2' onChange={(e)=>values(e)} type="text" required placeholder='Marks 0'/>
        </div>
        <div className='innerContainer'>
        <h2>{student.subject3name} </h2>
         <input className='newStudentInfoDetail' value={student.subject3} name='subject3' onChange={(e)=>values(e)} type="text" required placeholder='Marks 0'/>
        </div>
        <div className='innerContainer'>
        <h2>{student.subject4name}</h2>
         <input className='newStudentInfoDetail' value={student.subject4} name='subject4' onChange={(e)=>values(e)} type="text" required placeholder='Marks 0'/>
        </div>
        <div className='innerContainer'>
        <h2>{student.subject5name}</h2>
         <input className='newStudentInfoDetail' value={student.subject5} name='subject5' onChange={(e)=>values(e)} type="text" required placeholder='Marks 0'/>
        </div>
        <div className='innerContainer'>
        <h2>{student.subject6name}</h2>
         <input className='newStudentInfoDetail' value={student.subject6} name='subject6' onChange={(e)=>values(e)} type="text" required placeholder='Marks 0'/>
        </div>
        <div className='marksContainer'>
            <div className="totalmarks">
                <h2>Total Marks</h2>
                <p>{student.totalmarks}</p>
            </div>
            <div className='totalPercentage'>
                <h2>Percentage</h2>
                <p>{student.percentage}%</p>
            </div>
        </div>
        <button onClick={(e)=>{addResultData(e)}} className='addResultButton'>Add Result</button>
    </div>
  )
}

export default FirstSem