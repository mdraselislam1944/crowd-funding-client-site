import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';
const ProjectDescription = () => {
    const [data,setData]=useState(useLoaderData());
    const navigate=useNavigate();

    const handleAction=(id)=>{
        console.log(id)
        const saveUser={
            status:"approved",
        }
        fetch(`http://localhost:5000/blogsUpdate/${id}`,{
            method:"PATCH",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(saveUser)
          })
          .then(res=>res.json())
          .then(result=>{
            console.log(result)
            if (result.modifiedCount > 0) {
              alert("modified successfully");
              navigate("/dashboard/allProject");
            }
          })
          .catch(error=>console.log(error))
    }
    return (
        <div className='text-center text-white '>
            <h1 className='my-5'>{data?.email}</h1>
            <h1>{data?.name}</h1>
            <button onClick={() => handleAction(data._id)} className="btn btn-info my-5">change role</button>
        </div>
    );
};

export default ProjectDescription;