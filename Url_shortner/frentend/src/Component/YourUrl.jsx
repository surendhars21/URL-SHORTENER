import React, { useEffect, useState } from 'react'
import style from "./Home.module.css";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import profile from "./image/user-profile-icon.jpg";
const YourUrl = () => {
    let [url,setUrl]=useState([]);
    let userId=useParams();
    let [data,setData]=useState([]);
    useEffect(()=>{
   axios.get(`http://localhost:8080/url/by-user/${userId.id}`)
   .then((res)=>{setUrl(res.data.data); console.log(res.data.data);})
   .catch(()=>{console.log("errorr");alert("No data on this database");})

   axios.get(`http://localhost:8080/user/${userId.id}`)
    .then((res)=>{setData(res.data)})
    .catch(()=>{console.log("errorr........");})
    },[url])
    
  return (
    <div className={style.yoururl}> 
    <div className={style.nav}>
    <ul>
      <li> <Link to={`/dashboard/${userId.id}`}>Dashboard</Link></li>
      <li><Link to={`/yoururl/${userId.id}`}>Your Links</Link></li>
      <li><Link to={"/"}>LogOut</Link></li>
    </ul>
    </div>
    <div className={style.title}>
        <h1><img src={profile} alt="profile" name="profile" /> {data.data?.name}</h1>
     </div>
    <div className={style.table}>
    <table>
            <tr>
                <th>Old URL</th>
                <th>New URL</th>
                <th>Click count</th>
            </tr>
            {
                url.map((x)=>{
                    let count=0;
                    return(
                        <tr>
                            <td><Link to={x.oldur}>{x.oldur}</Link></td>
                            <td><Link to={x.newurl}>{x.newurl}</Link></td>
                            <td>{x.count}</td>
                        </tr>
                    )
                })
            }
        
        </table>
    </div>
    </div>
  )
}

export default YourUrl