import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link,useParams , useHistory} from 'react-router-dom'
import './getStudentDetail.css';
const GetStudentDetail = () => {
    const roll = useParams();
    const history = useHistory();
    const [detail, setDetail] = useState([])
    useEffect(() => {
             const getDetail = async()=>{
                 try {
                     const data = await axios.get(`https://main-srms-backend-k1yr68eci-navneetkumarjpr.vercel.app/getDetail/${roll.studentRoll}`)
                     console.log(data.data);
                     if(data.data.length===0){
                        alert("Student Detail not Found");
                        history.push('/addnewstudent')
                     }else{

                         setDetail(data.data);
                     }
                     
                 } catch (error) {
                     console.log("heloo eoor")
                     alert("Student Detail not Found");
                     history.push('/addnewstudent')

                 }
             }
             getDetail();
    }, [])
    
  return (
    <div className='getStudentDetail'>
        <div className="getStudentdetailContainer">
            <h1>Student Detail</h1>
            <div className="name">
               <h2>Name : </h2>
               <h2 className='detailValue'>{detail.length!==0?detail[0].name:"not found"}</h2>
            </div>
            <div className="name">
               <h2>Roll Number : </h2>
               <h2 className='detailValue'>{detail.length!==0?detail[0].rollnumber:"not found"}</h2>
            </div>
            <div className="name">
               <h2>Email : </h2>
               <h2 className='detailValue'>{detail.length!==0?detail[0].email:"not found"}</h2>
            </div>
            <div className="name">
               <h2>Password : </h2>
               <h2 className='detailValue'>{detail.length!==0?detail[0].password:"not found"}</h2>
            </div>
            <Link className='gobackButton' to='/addnewstudent'>Go Back</Link>
        </div>
    </div>
  )
}

export default GetStudentDetail