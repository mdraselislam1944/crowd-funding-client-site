import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/user/userSlice';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:4000/api',
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('set-token-for-user');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            dispatch(logoutUser());
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [dispatch(logoutUser()),navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;