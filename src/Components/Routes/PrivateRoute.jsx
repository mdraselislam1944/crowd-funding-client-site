import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    // const { pathname } = useLocation();
    const location=useLocation();
    const dispatch=useDispatch();
    const {email,isLoading}=useSelector((state)=>state.userSlice);
    if(isLoading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(email&&!isLoading){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate> ;
};

export default PrivateRoute;
