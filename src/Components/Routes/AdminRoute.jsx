import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { useSelector } from "react-redux";


const AdminRoute = ({ children }) => {
  const [isAdmin, loading] = useAdmin();
  const location = useLocation();

  const {email,isLoading}=useSelector((state)=>state.userSlice);

  if (isLoading ) {
    return <progress className="progress w-56"></progress>;
  }
  if(email && loading && !isAdmin){
    return <progress className="progress w-56"></progress>;
  }
  if (email && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;