import React from 'react';
import { useLoaderData } from 'react-router';
const ProjectDescription = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div className='text-center text-white '>
            <h1 className='my-5'>{data.email}</h1>
            <h1>{data.name}</h1>
        </div>
    );
};

export default ProjectDescription;