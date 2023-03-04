import React,{useEffect,useState} from 'react'
import {useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateRes = ({student,setStudent,values,getResultData}) => {
    const {rollnumber, semester} = useParams();
    useEffect(() => {
        // setSem(choiceSem.sem);
        const fetchSubject=async()=>{
          const data  = await  axios.get(`https://main-srms-backend-k1yr68eci-navneetkumarjpr.vercel.app/getResult/${rollnumber}/${semester}`)
          console.log("data ",data.data);
          student.name=data.data[0].name;
          student.rollnumber=data.data[0].rollnumber;
          student.semester=data.data[0].semester;
          student.fathername=data.data[0].fathername;
          student.mothername=data.data[0].mothername;
          student.subject1name=data.data[0].subject1name;
          student.subject2name=data.data[0].subject2name;
          student.subject3name=data.data[0].subject3name;
          student.subject4name=data.data[0].subject4name;
          student.subject5name=data.data[0].subject5name;
          student.subject6name=data.data[0].subject6name;
          student.subject1=data.data[0].subject1;
          student.subject2=data.data[0].subject2;
          student.subject3=data.data[0].subject3;
          student.subject4=data.data[0].subject4;
          student.subject5=data.data[0].subject5;
          student.subject6=data.data[0].subject6;
          student.totalmarks=data.data[0].totalmarks;
          student.percentage=data.data[0].percentage;
          student.branch=data.data[0].branch;
        //   student.name=
          setStudent({...student});
          
          // console.log("subjects ",allSubject[0].subject1);
        }
        fetchSubject();
        // console.log(choiceBranch.branch);
      }, [])
      return (
        <div className='firstsem'>
            <h1>{`Update Result of ${semester} Semester`}</h1>
            <div className='innerContainer'>
             <input className='newStudentInfoDetail' value={student.name} name='name' onChange={(e)=>{values(e)}} type="text" required placeholder='Name of the Student'/>
             <input className='newStudentInfoDetail' value={student.rollnumber} name='rollnumber' onChange={(e)=>{values(e)}} type="text" required placeholder='Roll Number'/>
             <input className='newStudentInfoDetail' value={student.semester} name='semester'  type="text"  placeholder='Semester'/>
            </div>
            <div className='innerContainer'>
             <input className='newStudentInfoDetail' value={student.fathername} name='fathername' onChange={(e)=>values(e)} type="text" required placeholder='Father Name'/>
             <input className='newStudentInfoDetail' value={student.mothername} name='mothername' onChange={(e)=>values(e)} type="text" required placeholder='Mother Name'/>
             <input className='newStudentInfoDetail' value={student.branch} name='branch'  type="text"  placeholder='Branch Name'/>
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
            <button onClick={(e)=>{getResultData(e)}} className='addResultButton'>Update Result</button>
        </div>
      )
    }

export default UpdateRes