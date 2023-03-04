import './reportCard.css';
import React,{useState,useEffect,useContext} from 'react'
import { UserContext } from '../context/UserProvider';
import {useParams,useHistory} from "react-router-dom"
import axios from 'axios';
const ReportCard = () => {
    let history  = useHistory();
    const [results, setResults] = useState([]);
    const {studentLogged,setStudentLogged} = useContext(UserContext);
    let rollnumber =useParams();
    useEffect(() => {
      const fetchResult= async()=>{
          try {
            const res = await axios.get(`http://localhost:8805/reportcard/${rollnumber.rollnumber}`)
            // setStudentLogged(res.data);
            setResults(res.data);
            
            console.log("logged hai ",studentLogged);
            console.log(res.data);
          } catch (error) {
              console.log("res error ", error)
          }
      }
      fetchResult();

    }, [])
    const logout = (e)=>{
        e.preventDefault();
        setStudentLogged({});
        history.push('/');
    }
  return (
    <div className='reportCard'>
        <div className="reportCardHeading">
            <h1>All Semester Results</h1> 
            <button onClick={(e)=>logout(e)} className='studentLogoutButton'>LogOut</button>
        </div>
        {
            results!==[]? results.map((item,key)=>{
                return(
<div className="singleResult">
            <div className="personalnfo">
                <div className="nameInfo">
                    <h1>Name : </h1>
                    <h2>{item.name}</h2>
                </div>
                <div className="nameInfo">
                    <h1>Roll Number : </h1>
                    <h2>{item.rollnumber}</h2>
                </div>
                <div className="nameInfo">
                    <h1>Semester : </h1>
                    <h2>{item.semester}</h2>
                </div>
                <div className="nameInfo">
                    <h1>Branch : </h1>
                    <h2>{item.branch}</h2>
                </div>
                <div className="nameInfo">
                    <h1>Mother Name : </h1>
                    <h2>{item.mothername}</h2>
                </div>
                <div className="nameInfo">
                    <h1>Father Name : </h1>
                    <h2>{item.fathername}</h2>
                </div>
            </div>
            <div className="marksInfo">
         <table>
            <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Decision</th>
            </tr>
            <tr>
            <td>{item.subject1name}</td>
            <td>{item.subject1}/100</td>
            <td>{`${item.subject1>33?"Pass":"Fail"}`}</td>
            </tr>
            <tr>
            <td>{item.subject2name}</td>
            <td>{item.subject2}/100</td>
            <td>{`${item.subject2>33?"Pass":"Fail"}`}</td>
            </tr>
            <tr>
            <td>{item.subject3name}</td>
            <td>{item.subject3}/100</td>
            <td>{`${item.subject3>33?"Pass":"Fail"}`}</td>
            </tr>
            <tr>
            <td>{item.subject4name}</td>
            <td>{item.subject4}/100</td>
            <td>{`${item.subject4>33?"Pass":"Fail"}`}</td>
            </tr>
            <tr>
            <td>{item.subject5name}</td>
            <td>{item.subject5}/100</td>
            <td>{`${item.subject5>33?"Pass":"Fail"}`}</td>
            </tr>
            <tr>
            <td>{item.subject6name}</td>
            <td>{item.subject6}/100</td>
            <td>{`${item.subject6>33?"Pass":"Fail"}`}</td>
            </tr>
        </table>
            </div>
        </div>
                )
            }):<div className='resultNot'>"Result is not available"</div>}
        
    </div>
  )
}

export default ReportCard