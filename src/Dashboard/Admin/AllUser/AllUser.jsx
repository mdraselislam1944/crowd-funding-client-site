import axios from "axios";
import { useState } from "react";
import {
  FaBars,
  FaDownload,
  FaGripLinesVertical,
  FaUndoAlt,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
const AllUsers = () => {
  let count = 1;
  const [, setTrHeight] = useState("h-10");
  const [data, setData] = useState(useLoaderData());

  console.log(data.data)
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    axios.get(`http://localhost:5000/users/${search}`)
      .then(result => setData(result));
  }
  const handleAction = (id,data) => {
    const saveUser = {
    }
    if(data.role=='admin'){
      saveUser.role='user';
    }
    else{
      saveUser.role='admin';
    }
    fetch(`http://localhost:5000/userAction/${id}`,{
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(saveUser)
    })
    .then(res=>res.json())
    .then(result=>{
      if (result.modifiedCount > 0) {
        alert("modified successfully");
        axios.get('http://localhost:5000/users')
        .then(result => setData(result));
      }
    })
  }
  return (
    <div className="bg-black px-10 mt w-full h-full mt-28 text-white">
      <div className="flex items-center justify-between mt-5">
        <h1 className="text-5xl text-orange-300 normal-case font-semibold">
          All Users
        </h1>
        <div className="form-control mt-1 text-black">
          <div >
            <form className="input-group" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search…"
                className=" input input-bordered border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%"
              />
              <button className="btn  border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10 ml-1 uppercase text-lg tracking-wide">
        <div className="flex items-center justify-center gap-5">
          {/* <p className='flex dropdown mb-32 items-center justify-center gap-2'><FaGripLinesVertical />Column</p> */}
          <details className="dropdown flex items-center justify-center gap-2">
            <summary className="m-1 btn bg-[#083149] hover:bg-slate-500 hover:px-2 hover:rounded text-white border-none p-0 text-lg font-normal rounded-none">
              <FaGripLinesVertical />
              Column
            </summary>
            <ul className="p-2 pt-0 flex flex-col -ml-1 mt-32 shadow-xl rounded w-80 bg-neutral text-neutral-content dropdown-content z-[1]">
              <small className="text-[8px]">Find Column</small>

              <input
                type="text"
                placeholder="Column Title"
                className="input input-bordered bg-neutral border-b-2 border-b-neutral-500 rounded-none"
              />

              <input type="checkbox" className="toggle" checked />
            </ul>
          </details>
          {/* <p className={`flex items-center justify-center gap-2`}><FaBars></FaBars>Density</p> */}
          <details className="dropdown">
            <summary className="m-1 ml-0 btn border-none hover:bg-[#083149] text-white text-lg uppercase font-normal bg-[#083149]">
              <FaBars></FaBars>Density
            </summary>
            <form className="p-2 shadow  menu dropdown-content z-[1] bg-slate-800  w-52">
              <option
                onClick={() => setTrHeight("h-10")}
                className="hover:bg-slate-600 p-2"
              >
                <FaBars></FaBars> Compact
              </option>
              <option
                onClick={() => setTrHeight("h-16")}
                className="hover:bg-slate-600 p-2"
              >
                <FaBars></FaBars> Standard
              </option>
              <option
                onClick={() => setTrHeight("h-20")}
                className="hover:bg-slate-600 p-2"
              >
                <FaBars></FaBars> Comfortable
              </option>
            </form>
          </details>
          <p className="flex items-center justify-center gap-2">
            <FaDownload></FaDownload>Export
          </p>
        </div>
        <div>
          <p className="flex items-center justify-center gap-2">
            <FaUndoAlt></FaUndoAlt>Refresh
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table text-white">
          {/* head */}
          <thead>
            <tr className="text-orange-300 text-xl">
              <th>Serial No</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.data.map(data => <tr key={data._id}>
                <th >{count++}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data?.role || "User"}</td>
                <td><button onClick={() => handleAction(data._id,data)} className="btn rounded-bl-full rounded-tr-full  bg-transparent text-[#F99F24] hover:text-black hover:bg-[#F99F24]  ">change role</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;