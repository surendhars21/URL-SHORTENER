import React, { useEffect, useState } from 'react'
import style from "./Home.module.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    let navigate=useNavigate();
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [data,setData]=useState([]);
    useEffect(()=>{
    axios.get("http://localhost:8080/user")
    .then((e)=>{setData(e.data)})
    .catch(()=>{console.log("error");})
    },[])
 let formHandle=(e)=>{
    e.preventDefault();

    if(email.length==""&&password.length==""){
        let small=document.getElementsByTagName("small");
        small[0].style.display="block";
        small[0].innerText="Email or phone is empty.!!!";
        small[1].style.display="block";
        small[1].innerText="Password is empty.!!!!";
    }
    else if(email.length!=""&&password.length==""){
        let small=document.getElementsByTagName("small");
        small[0].style.display="none";
        small[1].style.display="block";
        small[1].innerText="Password is empty.!!!!";
    }
    else if(email.length==""&&password.length!=""){
        let small=document.getElementsByTagName("small");
        small[0].style.display="block";
        small[0].innerText="Email or phone is empty.!!!";
        small[1].style.display="none";
    }else{
        let count=0;
        data.data?.map((e)=>{
            if((e.phone===Number(email)&&e.password===password)||(e.email===email&&e.password===password)){
                alert("Login successfully......");
                navigate(`/dashboard/${e.id}`);
                count++;
            }
        })
        if(count===0){
            alert("Invalid phone email or password");
        }
   }     
 } 
 let handleemail=()=>{
    if(email.length<10){
    let small=document.getElementsByTagName("small");
        small[0].style.display="block";
        small[0].innerText="Invalid Email or phone";
    }else{
    let small=document.getElementsByTagName("small");
        small[0].style.display="none";
    }
}
let handlepassword=()=>{
    if(password.length<10){
        let small=document.getElementsByTagName("small");
        small[1].style.display="block";
        small[1].innerText="Password lenght should be grater than 10";
    }
    else{
        let small=document.getElementsByTagName("small");
        small[1].style.display="none";
    }
}
  return (
    <div className={style.login}>
         <div className={style.box}>
            <h1>Login Form</h1>
            <label>Email or Phone</label>
            <input type="text" placeholder='Enter the email or phone' value={email} onChange={(e)=>{setEmail(e.target.value)}} onKeyUp={handleemail}/>
            <small></small>
            <label>Password</label>
            <input type="password" placeholder='Enter the password' value={password} onChange={(e)=>{setPassword(e.target.value)}} onKeyUp={handlepassword}/>
            <small></small>
            <p>Forgot Password?</p>
            <button onClick={formHandle}>LOGIN</button>
            <h3>Not a member?<Link to={'/signup'}>Signup now</Link></h3>
         </div>
    </div>
  )
}

export default Login