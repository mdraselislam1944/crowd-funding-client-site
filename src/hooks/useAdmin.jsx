import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useAuth from './useAuth';
import { useState } from 'react';

const useAdmin = () => {
    const [isAdmin,setIsAdmin]=useState(false);
    const [loading,setLoading]=useState(true);
     useAuth();
    const { isLoading, isError, error, email, name, image } = useSelector((state) => state.userSlice);
    useEffect(()=>{
        axios.get(`http://localhost:4000/api/authentication/admin/${email}`,{
            headers:{
                Authorization: `bearer ${localStorage.getItem('set-token-for-user')}`
            }
        })
        .then(res=>{
            setIsAdmin(res.data.admin);
            setLoading(false);
        });
    },[email,name]);
    return [isAdmin,loading];
};

export default useAdmin;