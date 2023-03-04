import './App.css';
import axios from 'axios';
import React,{useState,useContext} from 'react'
import {Route,Switch, useHistory} from "react-router-dom"
import AllLoginPage from './component/AllLoginPage';
import StudentLogin from './component/StudentLogin';
import CollegeLogin from './component/CollegeLogin';
import SemesterChoice from './component/SemesterChoice';
import StudentChoice from './component/StudentChoice';
import AddNewStudent from './component/AddNewStudent';
import FirstSem from './component/semesters/FirstSem';
import ReportCard from './component/ReportCard';
import BranchChoice from './component/BranchChoice';
import SubjectAdd from './component/SubjectAdd';
import PageNotFound from './component/PageNotFound';
import UpdateSub from './component/UpdateSub';
import GetUpdate from './component/GetUpdate';
import UpdateRes from './component/UpdateRes';
import { UserContext } from './context/UserProvider';
import { CollegeContext } from './context/CollegeProvider';
import GetStudentDetail from './component/GetStudentDetail';

function App() {
  let history = useHistory();
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  const {collegeLogged} = useContext(CollegeContext);
  const {studentLogged} = useContext(UserContext);
  const[student,setStudent]=useState({
      name:"",
      rollnumber:"",
      semester:"",
      fathername:"",
      mothername:"",
      subject1name:"",
      subject2name:"",
      subject3name:"",
      subject4name:"",
      subject5name:"",
      subject6name:"",
      subject1:"",
      subject2:"",
      subject3:"",
      subject4:"",
      subject5:"",
      subject6:"",
      totalmarks:"0",
      percentage:"0",
      branch:""

  });
  const values=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});
    // console.log("student ",student);
  }
   
  const totalMarks = async()=>{
    let sum = parseInt(student.subject1)+parseInt(student.subject2)+parseInt(student.subject3)+parseInt(student.subject4)
    +parseInt(student.subject5)+parseInt(student.subject6);   
    student.branch=branch;
    student.totalmarks=sum;
    student.semester=sem; 
    setStudent({...student})
    // console.log("sem ",student.semester);
  }
  const Percentage = async()=>{
    let  per = (student.totalmarks/600)*100;
    student.percentage=per
    setStudent({...student});
  }
  const addResultData=async(e)=>{
      e.preventDefault();
      if(student.rollnumber.length===0 || student.name.length===0 || student.mothername.length===0 
        || student.fathername.length===0 || student.subject1.length===0 || student.subject2.length===0
        || student.subject3.length===0 || student.subject4.length===0 || student.subject5.length===0
        || student.subject6.length===0 || student.totalmarks.length===0 || student.percentage.length===0){
          alert('Please Fill the all Details');
      }else{
          await totalMarks(e);
          await Percentage(e);
          loadContactList();
      }
  }
  const loadContactList= async () =>{
    try {
     await axios.post("https://main-srms-backend-k1yr68eci-navneetkumarjpr.vercel.app/addsemresult",student);
     alert("result added");
     student.name="";
     student.rollnumber="";
     student.semester="";
     student.fathername="";
     student.mothername="";
     student.subject1name="";
     student.subject2name="";
     student.subject3name="";
     student.subject4name="";
     student.subject5name="";
     student.subject6name="";
     student.subject1="";
     student.subject2="";
     student.subject3="";
     student.subject4="";
     student.subject5="";
     student.subject6="";
     student.totalmarks="0";
     student.percentage="0";
     student.branch="";
     setStudent({...student});
     history.push('/branchchoice')
    } catch (error) {
    }
  };

  const getResultData=async(e)=>{
    e.preventDefault();
    if(student.rollnumber.length===0 || student.name.length===0 || student.mothername.length===0 
      || student.fathername.length===0 || student.subject1.length===0 || student.subject2.length===0
      || student.subject3.length===0 || student.subject4.length===0 || student.subject5.length===0
      || student.subject6.length===0 || student.totalmarks.length===0 || student.percentage.length===0 || 
      student.semester.length===0 || student.branch.length===0 ){
        alert('Please Fill the all Details');
    }else{
        await totalMarksUpdated(e);
        await Percentage(e);
        // console.log(student.semester," hello ",student.branch)
        resultLoadContactList();
    }
}
const totalMarksUpdated = async()=>{
  let sum = parseInt(student.subject1)+parseInt(student.subject2)+parseInt(student.subject3)+parseInt(student.subject4)
  +parseInt(student.subject5)+parseInt(student.subject6);   
  student.totalmarks=sum;
  setStudent({...student})
  // console.log("sem ",student.semester);
}
const resultLoadContactList= async () =>{
  try {
    console.log(student.semester," ",student.branch)
   await axios.put(`https://main-srms-backend-k1yr68eci-navneetkumarjpr.vercel.app/semresultupdate/${student.semester}/${student.rollnumber}`,student);
   alert("result updated");
   student.name="";
   student.rollnumber="";
   student.semester="";
   student.fathername="";
   student.mothername="";
   student.subject1name="";
   student.subject2name="";
   student.subject3name="";
   student.subject4name="";
   student.subject5name="";
   student.subject6name="";
   student.subject1="";
   student.subject2="";
   student.subject3="";
   student.subject4="";
   student.subject5="";
   student.subject6="";
   student.totalmarks="0";
   student.percentage="0";
   student.branch="";
   setStudent({...student});
  //  history.push('/branchchoice')
  } catch (error) {
    
  }
};
  return (
      <>
       <Switch>
         <Route exact path='/'><AllLoginPage/></Route>
         <Route path='/collegeLogin'><CollegeLogin/></Route>
         <Route path='/getUdateResult'>{collegeLogged===true?<GetUpdate/>:<CollegeLogin/>}</Route>
         <Route path='/updateResult/:rollnumber/:semester'>{collegeLogged===true?<UpdateRes student={student} setStudent={setStudent} values={values} getResultData={getResultData}/>:<CollegeLogin/>}</Route>
         <Route path='/subjectAdd'>{collegeLogged===true?<SubjectAdd/>:<CollegeLogin/>} </Route>
         <Route path='/update/:semester/:branch'>{collegeLogged===true?<UpdateSub/>:<CollegeLogin/>}</Route>
         <Route path='/studentLogin'><StudentLogin/></Route>
         <Route path='/getStudentDetail/:studentRoll'>{collegeLogged===true?<GetStudentDetail/>:<CollegeLogin/>}</Route>
         <Route path='/addsemresult/:branch'>{collegeLogged===true?<SemesterChoice setBranch={setBranch}/>:<CollegeLogin/>}</Route>
         <Route path='/studentchoice'>{collegeLogged===true?<StudentChoice/>:<CollegeLogin/>}</Route>
         <Route path='/branchchoice'>{collegeLogged===true?<BranchChoice/>:<CollegeLogin/>}</Route>
         <Route path='/addnewstudent'>{collegeLogged==true?<AddNewStudent/>:<CollegeLogin/>}</Route>
         <Route path='/addresult/:sem/:name'>{collegeLogged===true?<FirstSem sem={sem} setStudent={setStudent} setSem={setSem} branch={branch} student={student} values={values} addResultData={addResultData}/>:<CollegeLogin/>}</Route>
         <Route path='/reportcard/:rollnumber'>{Object.keys(studentLogged).length!==0?<ReportCard/>:<StudentLogin/>}</Route>
         <Route path='*'><PageNotFound/></Route>
       </Switch>
      </>    
  );
}

export default App;
