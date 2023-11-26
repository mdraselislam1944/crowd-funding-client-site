import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import video from "../../assets/Video/348855346_6387300347996886_8348118468822906576_n.mp4"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser, loggedWithGoogle } from "../../Redux/user/userSlice";
import { Password } from "@mui/icons-material";
import { useSetUsersMutation } from "../../Redux/features/api/userApi";
import axios from "axios";
const Login = () => {
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [flag,setFlag]=useState(false);
    const [setUser, { data: postData, isLoading: isSetDataLoading, errorUser }] = useSetUsersMutation();
    const { name, email, isLoading, isError, error, } = useSelector(state => state.userSlice);
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        dispatch(loggedWithGoogle());
        setFlag(true);
        // signInWithPopup(auth, googleProvider)
        //     .then(result => {
        //         const loggedInUser = result.user;
        //         setSuccess('Google Successfully');
        //         console.log(loggedInUser);
        //         // setUser(loggedInUser);
        //         const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        //         // ---------------------------jwt add for google signIn----------------------
        //         fetch('https://crowdfunding-gamma.vercel.app/users', {
        //             method: "POST",
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(saveUser)
        //         })
        //             .then(res => res.json())
        //             .then(result => {
        //                 // console.log(result);

        //                 fetch('https://crowdfunding-gamma.vercel.app/jwt', {
        //                     method: "POST",
        //                     headers: {
        //                         'Content-Type': 'application/json'
        //                     },
        //                     body: JSON.stringify(loggedInUser)
        //                 })
        //                     .then(res => res.json())
        //                     .then(result => {
        //                         console.log(result);
        //                         localStorage.setItem('set-token-for-user', result.token)
        //                     })
        //             })
        //         navigate(from, { replace: true });
        //     })
        //     .catch(error => {
        //         console.log('error', error.message);
        //     })
    }

    const {register,reset,handleSubmit,formState: { errors },} = useForm()
    const onSubmit = (data) => {
        dispatch(loggedUser(data));
        reset();
        setSuccess(true);

        // console.log(data.password, data.email);
        // signIn(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         setSuccess('Login Successfully')
        //         console.log(user);
        //         // form.reset();
        //         fetch('https://crowdfunding-gamma.vercel.app/jwt', {
        //             method: "POST",
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(user)
        //         })
        //             .then(res => res.json())
        //             .then(result => {
        //                 console.log(result);
        //                 localStorage.setItem('set-token-for-user', result.token)
        //             })
        //         navigate(from, { replace: true });
        //     })
        //     .catch(error => console.log(error))
    }

    if (flag && name) {
        const result = setUser({email,name});
        setFlag(false);
        setSuccess(true);
        if (result.error) {
            swal({
                title: "Oh sorry",
                text: result.error,
                icon: "warning",
                button: "click now!",
            });
        } else {
            swal({
                title: "Thank you!",
                text: result.data,
                icon: "success",
                button: "click now!",
            });
        }
    }
    if(success){
        axios.post('http://localhost:4000/api/authentication/jwt',{
            body:{name,email}
        })
        .then(result=>{
            console.log(result);
            localStorage.setItem('set-token-for-user', result.data.token)
        })
        setSuccess(false);
        navigate("/");
    }
    return (
        <div>
            <div className="hero bg-base-200 text-white ">

                <video className='videoTag  lg:mx-auto w-auto lg:block md:block hidden ' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>

                <div className="hero-content p-0 flex-none lg:flex-row">
                    <div className="text-center text-white font-black lg:text-left w-1/2 mr-12 lg:block md:hidden hidden">
                        <h1 className="text-rose-400 text-4xl my-6"> {!isLoading && isError && error}</h1>
                        <h1 className="font-black text-3xl"><span className="text-[#F99F24] text-4xl">CrowdFunding</span> - All You Need To Know</h1>
                        <br></br><br />
                        <p className="">It sounds simple, but exactly how does crowdfunding look in practice? Well, sometimes crowdfunding campaigns seek financing in the form of donations or investments, but that’s not always the case.
                            <br /><br />
                            Crowdfunding is the practice of collecting money from multiple individuals or sources in order to finance a new project. Often, CrowdFounders turn to social media to share their platform or idea with the purpose of inspiring others to contribute to the crowdfunding campaign.
                        </p>
                    </div>

                    <div className="card rounded-none flex-shrink-0 max-w-sm shadow-2xl">
                        <video className='videoTag lg:mx-auto w-auto lg:hidden md:hidden block' autoPlay loop muted>
                            <source src={video} type='video/mp4' />
                        </video>
                        <div className="card lg:m-0 md:m-0 m-5 ps-4 pe-4">

                            <h1 className="text-2xl text-center font-bold bg-[#F99F24] rounded-lg p-1 text-white">Login</h1>
                            <form onSubmit={handleSubmit(onSubmit)} >

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl lg:text-white md:text-white text-black">Email</span>
                                    </label>
                                    <input type="email"
                                        {...register("email", { required: true })} name="email" placeholder="Email" className="input bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black" />
                                </div>
                                <div className="form-control text-white">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl lg:text-white md:text-white text-black">Password</span>
                                    </label>
                                    <input type="password"
                                        {...register("password", { required: true })} name="password" placeholder="password" className="input bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-[#F99F24]">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        isLoading ? <span className="loading loading-spinner loading-lg"></span> : <>
                                            <input className="btn bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black  hover:bg-[#F99F24] hover:border-none hover:text-black lg:font-semibold md:font-semibold font-extrabold  lg:text-base md:text-base text-lg" type='submit' value="Login" />
                                        </>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        isLoading ? <span className="loading loading-spinner loading-lg"></span> : <>
                                            <button onClick={handleGoogleSignIn} className="btn bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black hover:bg-[#F99F24] hover:border-none hover:text-black lg:font-semibold md:font-semibold font-extrabold lg:text-base md:text-base text-lg" type='submit' value="Login"><span className="mr-2 bg-white rounded-full"><FcGoogle /></span> Google</button>
                                        </>
                                    }
                                </div>
                            </form>

                            <p className='my-4 text-center lg:text-white md:text-white text-black'>New Member ?  ::  <Link className="font-bold   text-[#F99F24]" to="/signUp">Sign Up</Link></p>

                            <p className="text-success">{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;