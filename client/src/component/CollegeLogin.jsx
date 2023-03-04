import React,{useState,useContext,useEffect} from 'react'
import './collegeLogin.css';
import { useHistory } from 'react-router-dom';
import { CollegeContext } from '../context/CollegeProvider';
const CollegeLogin = () => {
  const {setCollegeLogged} = useContext(CollegeContext);
  let history = useHistory();
  // useEffect(() => {
  //   history.push("/collegeLogin");
  // }, [])
  const[college,setCollege]=useState({
      email:"",
      password:""
  });

  const values=(e)=>{
    setCollege({...college,[e.target.name]:e.target.value});
      console.log(college)
  }
  const collegeLogin=(e)=>{
    e.preventDefault();
    if(college.email.length===0 || college.password.length===0){
        alert('Please Fill the all Details');
    }else{
       if(college.email==="college@gmail.com" && college.password==="collegeLogin"){
         alert('Successfully college logged in');
         setCollegeLogged(true);
         history.push('/studentchoice');
       }else{
         alert('Please Enter Right Email and Password');
       }
       
    }
}

  return (
    <div className='collegeLogin'>
      <div className="studentLoginContainer">
            <h1>College Login</h1>
            <input type='email' className='emailInput' onChange={(e)=>values(e) } name='email' value={college.email} placeholder='Enter your Email'/>
            <input type='password' className='passwordInput' onChange={(e)=>values(e) } name='password' value={college.password} placeholder='Enter your Password'/>
            <button onClick={(e)=>{collegeLogin(e)}} className='loginButton'>Login</button>
       </div>
    </div>
  )
}

export default CollegeLogin