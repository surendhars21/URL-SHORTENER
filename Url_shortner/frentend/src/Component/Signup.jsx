import React, { useState } from 'react'
import style from "./Home.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
    let [name,setName]=useState("");
    let [phone,setPhone]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [conformPass,setConpassword]=useState("");
    let data={
        name:name,
        phone:phone,
        email:email,
        password:password,
        conpassword:conformPass
    }
  let formHandle=(e)=>{
   if(name==""&&phone==""&&email==""&&password==""&&conformPass==""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="block";
    small[0].innerText="Name is empty..!!!"
    small[1].style.display="block";
    small[1].innerText="Phone is empty..!!!"
    small[2].style.display="block";
    small[2].innerText="Email is empty..!!!"
    small[3].style.display="block";
    small[3].innerText="Password is empty..!!!"
    small[4].style.display="block";
    small[4].innerText="Conform Password is empty..!!!"
   }
   else if(name!=""&&phone==""&&email==""&&password==""&&conformPass==""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="none";
    small[1].style.display="block";
    small[1].innerText="Phone is empty..!!!"
    small[2].style.display="block";
    small[2].innerText="Email is empty..!!!"
    small[3].style.display="block";
    small[3].innerText="Password is empty..!!!"
    small[4].style.display="block";
    small[4].innerText="Conform Password is empty..!!!"
   }
   else if(name==""&&phone!=""&&email==""&&password==""&&conformPass==""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="block";
    small[0].innerText="Name is empty..!!!"
    small[1].style.display="none";
    small[2].style.display="block";
    small[2].innerText="Email is empty..!!!"
    small[3].style.display="block";
    small[3].innerText="Password is empty..!!!"
    small[4].style.display="block";
    small[4].innerText="Conform Password is empty..!!!"
   }
   else if(name==""&&phone==""&&email!=""&&password==""&&conformPass==""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="block";
    small[0].innerText="Name is empty..!!!"
    small[1].style.display="block";
    small[1].innerText="Phone is empty..!!!"
    small[2].style.display="none";
    small[3].style.display="block";
    small[3].innerText="Password is empty..!!!"
    small[4].style.display="block";
    small[4].innerText="Conform Password is empty..!!!"
   }
   else if(name==""&&phone==""&&email==""&&password!=""&&conformPass==""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="block";
    small[0].innerText="Name is empty..!!!"
    small[1].style.display="block";
    small[1].innerText="Phone is empty..!!!"
    small[2].style.display="block";
    small[2].innerText="Email is empty..!!!"
    small[3].style.display="none";
    small[4].style.display="block";
    small[4].innerText="Conform Password is empty..!!!"
   }
   else if(name==""&&phone==""&&email==""&&password==""&&conformPass!=""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="block";
    small[0].innerText="Name is empty..!!!"
    small[1].style.display="block";
    small[1].innerText="Phone is empty..!!!"
    small[2].style.display="block";
    small[2].innerText="Email is empty..!!!"
    small[3].style.display="block";
    small[3].innerText="Password is empty..!!!"
    small[4].style.display="none";
   }
   else if(name!=""&&phone!=""&&email==""&&password==""&&conformPass==""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="none";
    small[1].style.display="none";
    small[2].style.display="block";
    small[2].innerText="Email is empty..!!!"
    small[3].style.display="block";
    small[3].innerText="Password is empty..!!!"
    small[4].style.display="block";
    small[4].innerText="Conform Password is empty..!!!"
   }
   else if(name!=""&&phone!=""&&email!=""&&password==""&&conformPass==""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="none";
    small[1].style.display="none";
    small[2].style.display="none";
    small[3].style.display="block";
    small[3].innerText="Password is empty..!!!"
    small[4].style.display="block";
    small[4].innerText="Conform Password is empty..!!!"
   } 
   else if(name!=""&&phone!=""&&email!=""&&password!=""&&conformPass==""){
    let small=document.getElementsByTagName("small");
    small[0].style.display="none";
    small[1].style.display="none";
    small[2].style.display="none";
    small[3].style.display="none";
    small[4].style.display="block";
    small[4].innerText="Conform Password is empty..!!!"
   }
   else if(name.length>=5&&phone.length>=10&&email.length>=10&&password.length>=10&&conformPass.length>=10){
    let small=document.getElementsByTagName("small");
    small[0].style.display="none";
    small[1].style.display="none";
    small[2].style.display="none";
    small[3].style.display="none";
    small[4].style.display="none";
    axios.post("http://localhost:8080/user",data)
    .then(()=>{console.log("Send the data......");
      setConpassword("")
      setEmail("")
      setName("")
      setPassword("")
      setPhone("")
      })
    .catch(()=>{console.log("error....");})
    alert("Sign up successfully");
    alert("Go to login page......")
   }
  }

  let formname=()=>{
   if(name.length<=5){
   let small=document.getElementsByTagName("small");
   small[0].style.display="block";
   small[0].innerText="Name must be greater than 5"
   }
   else{
    let small=document.getElementsByTagName("small");
    small[0].style.display="none";
   }
  }
  let formphone=()=>{
    if(phone.length<10){
        let small=document.getElementsByTagName("small");
        small[1].style.display="block";
        small[1].innerText="Phone must be 10 number";
        }
        else{
            let small=document.getElementsByTagName("small");
            small[1].style.display="none";
           }
  }
  let formemail=()=>{
   
    if(email.length<=10){
        let small=document.getElementsByTagName("small");
        small[2].style.display="block";
        small[2].innerText="Email must be greater than 10"
        }
        else{
            let small=document.getElementsByTagName("small");
            small[2].style.display="none";
           }
  }
  let formpassword=()=>{
    if(password.length<=10){
        let small=document.getElementsByTagName("small");
        small[3].style.display="block";
        small[3].innerText="Password must be greater than 10";
        }
        else{
            let small=document.getElementsByTagName("small");
            small[3].style.display="none";
           }
  }
  let formconpassword=()=>{
    if(password!=conformPass){
        let small=document.getElementsByTagName("small");
        small[4].style.display="block";
        small[4].innerText="Conform password cannot be same as password";
    }
    else if(conformPass.length<=10){
        let small=document.getElementsByTagName("small");
        small[4].style.display="block";
        small[4].innerText="Conform password must be greater than 10";
        }
        else{
            let small=document.getElementsByTagName("small");
            small[4].style.display="none";
           }
  }
  return (
    <div className={style.login}>
    <div className={style.box}>
       <h1>Join us today!</h1>
       <h2>Sign up now to become a member.</h2>
       <label>Name</label>
       <input type="text" placeholder='Enter the name' value={name} onKeyUp={formname} onChange={(e)=>{setName(e.target.value)}}/>
       <small></small>
       <label>Phone</label>
       <input type="number" placeholder='Enter the phone' value={phone} onKeyUp={formphone} onChange={(e)=>{setPhone(e.target.value)}}/>
       <small></small>
       <label>Email</label>
       <input type="email"  required placeholder='Enter the email' value={email} onKeyUp={formemail} onChange={(e)=>{setEmail(e.target.value)}}/>
       <small></small>
       <label>Password</label>
       <input type="password" placeholder='Enter the password' value={password} onKeyUp={formpassword} onChange={(e)=>{setPassword(e.target.value)}}/>
       <small></small>
       <label>Conform Password</label>
       <input type="password" placeholder='Enter the password' value={conformPass} onKeyUp={formconpassword} onChange={(e)=>{setConpassword(e.target.value)}}/>
       <small></small>
       <button onClick={formHandle}>SignUp</button>
       <h3>Already a member?<Link to={'/'}>Login Here</Link></h3>
    </div>
</div>
  )
}

export default Signup