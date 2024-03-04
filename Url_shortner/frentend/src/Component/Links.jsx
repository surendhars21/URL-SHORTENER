import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Links = () => {
    let [data,setData]=useState([]);
    let link = "http://localhost:3000/"+useParams().link
    console.log(link)

    useEffect(()=>{
     axios.get(`http://localhost:8080/url`)
     .then((res)=>{
        setData(res.data?.data)
    })
     .catch(()=>{console.log("error");})
    },[])
    data.map((x)=>{
        if(x.newurl==link){
            let count = x.count+1
            let data={
                id:x.id,
                newurl:x.newurl,
                oldur:x.oldur,
                count:count
            }
            axios.put("http://localhost:8080/url",data)
            .then(()=>{console.log("put the dataa");})
            .catch(()=>{console.log("error...");})
            window.location.replace(x.oldur)
        }
    })

  return (
    <div>

    </div>
  )
}

export default Links