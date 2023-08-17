// import React from 'react';
import {  useContext, useEffect } from "react";
// import img  from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {

    const { createUser } =useContext(AuthContext);
    const handleSignUP =event=>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const email = form.email.value;

        const password=form.password.value;
        // const photo=form.photo.value;
        console.log(name,password,email);
        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user); 
            form.reset();
        })
        .catch(error=>console.log(error));
    }
    useEffect ( () => {
      document.title = "Sign Up";
  },[])
    return (
        <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="hero-content flex-col lg:flex-row">
        <div className="text-center text-black lg:text-left w-1/2 mr-12">
                    <h1 className="font-black">A little boy, with his safari of toys</h1>
                    <br />
                    <p>With a chest full of toys and a heart full of glee,
                        A young boy sets out on a wild safari spree.
                        All his animal friends, big and small, come out to play,
                        As he leads them on a march in his own little way.

                        The lion roars, the gorilla swings,
                        The elephant trumpets, the dinosaur sings.
                        Together they march to the beat of his drum,
                        A joyful sight, a childhood memory to come.
                    </p>
                </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-black">
            <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-white">Sign Up</h1>
             <form onSubmit={handleSignUP} >
             <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered text-black" />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo_URL</span>
                </label>
                <input type="text" name="photoURL" placeholder="url" className="input input-bordered text-white" />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="enter email" className="input input-bordered text-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Confirm Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>
              
              
              
              <div className="form-control mt-6">
                <button className="btn bg-base-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type='submit' value="Sign Up">Sign Up</button>
              </div>
              
             </form>
             <p className='my-4 text-center text-white'>Already Have an Account ? : <Link  className="text-secondary font-bold" to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;