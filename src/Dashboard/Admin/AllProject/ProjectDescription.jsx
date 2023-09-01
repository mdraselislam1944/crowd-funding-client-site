import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';
const ProjectDescription = () => {
  const [data, setData] = useState(useLoaderData());
  const navigate = useNavigate();
  console.log(data)
  const handleAction = (id) => {

    const saveUser = {
      status: "approved",
    }
    fetch(`http://localhost:5000/blogsUpdate/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.modifiedCount > 0) {
          alert("modified successfully");
          navigate("/dashboard/allProject");
        }
      })
      .catch(error => console.log(error))
  }
  return (
    <div className=' text-white '>
      <h1 className='-mt-4 text-center text-2xl font-bold'>{data.name} project description idea</h1>
      <div className='flex flex-row mx-10 my-5'>
        <div className='basis-1/2'>
          <h1 className='my-2'>Name: {data.name}</h1>
          <p className='my-2'>Phone: {data.phone}</p>
          <p className='my-2'>Email: {data.email}</p>
          <p className='my-2'>Address: {data.address}</p>
          <p className='my-2'>Country: {data.country}</p>
          <p className='my-2'>Status: {data.status}</p>
          <button onClick={() => handleAction(data._id)} className="btn btn-info my-5">change role</button>
        </div>
        <div className='basis-1/2'>
          <p className='my-2'><small className='font-bold text-2xl'>Project Idea: </small>{data.ideas}</p>
          <p className='my-2'><small className='font-bold text-2xl'>Project Money: </small>{data.money}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;