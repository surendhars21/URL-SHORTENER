import React, { useEffect, useState } from 'react'
import style from "./Home.module.css";
import profile from "./image/user-profile-icon.jpg";
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const Dashboard = () => {
    let [shorturl,setShorturl]=useState("");
    let [longurl,setLongurl]=useState("");
    let [data,setData]=useState([]);
    let userId=useParams();
    useEffect(()=>{
    axios.get(`http://localhost:8080/user/${userId.id}`)
    .then((res)=>{setData(res.data)})
    .catch(()=>{console.log("errorr........");})
    },[]) 
    let copied=async(e)=>{
        e.preventDefault();
        alert("Copied.!!!!")
        setShorturl("");
    }
    const handleLink = async (e) => {
      e.preventDefault();
   //  await axios(`https://tinyurl.com/api-create.php?url=${longurl}`)
   //   .then((data)=>{setShorturl(data.data);})
   //   .catch((err)=>{alert(err)})
     
   //    if(longurl.length==""){
   //       let small=document.getElementsByTagName("small");
   //       small[0].style.display="block";
   //       small[0].innerText="Url is empty......"
   //    }else{
   //       let small=document.getElementsByTagName("small");
   //       small[0].style.display="none";
   //    }

   let words = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890"
   let c=0
   let result=""
   while(c<7){
      result=result+words[Math.floor(Math.random()*words.length)]
      c+=1
   }
   let sUrl = "http://localhost:3000/"+result
   setShorturl(sUrl)
   let data={
      newurl:sUrl,
      oldur:longurl
     }
   await axios.post(`http://localhost:8080/url/${userId.id}`,data)
   .then(()=>{console.log("send the data on database");})
   .catch(()=>{console.log("errorr.............");})
  };
  return (
    <div className={style.dashboard}>
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
     <div className={style.inputs}>
        <h4>URL SHORTENER</h4>
        <input type="text" placeholder='Enter your URL' value={longurl} onChange={(e)=>{setLongurl(e.target.value)}}/>
        <button onClick={handleLink}>Submit</button> <br />
        <small>sad</small><br />
        <input type="text" id={style.copy} value={shorturl} onChange={(e)=>{setShorturl(e.target.value)}}/>
        <CopyToClipboard text={shorturl}>
        <button onClick={copied}>Copy to Clipboard</button>
        </CopyToClipboard>
     </div>
    </div>
  )
}

export default Dashboard