import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import auth from '../Firebase/firebaseConfig';
import { setUser, toggleLoading } from '../Redux/user/userSlice';
import { useDispatch } from 'react-redux';

const useAuth = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            dispatch(setUser({
              name:user.displayName,
              email:user.email,
              image:user.photoURL,
            }),)
            dispatch(toggleLoading(false));
          }
          else{
            dispatch(toggleLoading(false));
          }
        })
      },[])
};

export default useAuth;