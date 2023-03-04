import React,{useState,useEffect} from 'react'
import './subjectAdd.css';
import { Link,useHistory} from "react-router-dom"
import axios from 'axios';
const SubjectAdd = () => {
    
  let history = useHistory();
  const[updateSub,setUpdateSub]=useState({
    semester:"",
    branch:"",
});
    const[subjects,setSubjects]=useState({
        semester:"",
        branch:"",
        subject1:"",
        subject2:"",
        subject3:"",
        subject4:"",
        subject5:"",
        subject6:"",  
    });
    const updateValues=(e)=>{
        setUpdateSub({...updateSub,[e.target.name]:e.target.value});
        console.log(updateSub);
      }
      const upValues=(e)=>{
        e.preventDefault();
          if(updateSub.semester==="" || updateSub.branch===""){
              alert("fill the vallue")
          }else{
              history.push(`/update/${updateSub.semester}/${updateSub.branch}`)
          }
      }
    const values=(e)=>{
        setSubjects({...subjects,[e.target.name]:e.target.value});
        console.log(subjects);
      }
      const addSubjectData=async(e)=>{
        e.preventDefault();
        if(subjects.semester.length===0 || subjects.branch.length===0 || subjects.subject1.length===0 ||
            subjects.subject2.length===0
          || subjects.subject3.length===0 || subjects.subject4.length===0 || subjects.subject5.length===0
          || subjects.subject6.length===0){
            alert('Please Fill the all Details');
        }else{
            loadContactList();
        }
    }
      const loadContactList= async () =>{
        try {
         const data=await axios.post("http://localhost:8805/addsubjects",subjects);
         console.log(data.data);
         alert("result added");
        //  setSubjects({...subjects,
        //     ['semester']:""
        //   })
        // setSubjects({});
          subjects.semester="";
         subjects.branch="";
         subjects.subject1="";
         subjects.subject2="";
         subjects.subject3="";
         subjects.subject4="";
         subjects.subject5="";
         subjects.subject6="";
         subjects.branch="";
         setSubjects({...subjects})
         history.push('/studentchoice')
        } catch (error) {
            console.log("error ",error)
        }
      };
  return (
    <div className='subjectAdd'>
        <div className="innerContainerSubject">
            <h1>Add subject</h1>
            <input className='subjectName' name='semester' onChange={(e)=>{values(e)}} placeholder='Enter the Semester like - 1'/>
            <input className='subjectName' name='branch' onChange={(e)=>{values(e)}} placeholder='Enter the Branch like - EC'/>
            <input className='subjectName' name='subject1' onChange={(e)=>{values(e)}} placeholder='Enter the Subject 1'/>
            <input className='subjectName' name='subject2' onChange={(e)=>{values(e)}} placeholder='Enter the Subject 2'/>
            <input className='subjectName' name='subject3' onChange={(e)=>{values(e)}} placeholder='Enter the Subject 3'/>
            <input className='subjectName' name='subject4' onChange={(e)=>{values(e)}} placeholder='Enter the Subject 4'/>
            <input className='subjectName' name='subject5' onChange={(e)=>{values(e)}}placeholder='Enter the Subject 5'/>
            <input className='subjectName' name='subject6' onChange={(e)=>{values(e)}} placeholder='Enter the Subject 6'/>
            <button onClick={(e)=>addSubjectData(e) } className='addSubjects'>Add Subjects</button>
            <p>or</p>
            <input onChange={(e)=>{updateValues(e)}} name='semester' className='subjectName' placeholder='Enter the Semester like - 1'/>
            <input onChange={(e)=>{updateValues(e)}} name='branch' className='subjectName' placeholder='Enter the Branch like - EC'/>
            {/* <Link to={`/update/${updateSub.semester}/${updateSub.branch}`}  className='addSubjects'>get to Update</Link> */}
            <button onClick={(e)=>upValues(e) } className='addSubjects'>Update</button>
        </div>
    </div>
  )
}

export default SubjectAdd