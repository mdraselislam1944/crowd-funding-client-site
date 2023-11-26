import Swal from "sweetalert2";
import SharedBanner from "../Contact/SharedBanner";
import campaignPhoto from "../../assets/img/Final/10.jpg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const Info = () => {
  const [project, setCountry] = useState("");
  const [districts,setDistricts]=useState();
  const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm();
  const { id } = useParams();
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('https://bdapis.com/api/v1.1/districts')
    .then(res=>{
      console.log(res.data.data);
      setDistricts(res.data.data);
    })
  },[]);

  const handleCountryChange = (event) => {
    setValue("country", event.target.value);
  };

  const handleDistrictChange=(event)=>{
    setValue("district", event.target.value);
  }
  const onSubmit = (data,e) => {
    e.preventDefault();
    if(id=='health'||id=='entrepreneur'||id=='disaster'){
      data.category = id;
      // data.image=" ",
      // console.log(data)

      const imageFile =e.target.image.files[0];
      const formData = new FormData();
      formData.append('image', imageFile);
      fetch('https://api.imgbb.com/1/upload?key=7a43c068c4477f76ae69e0549062c80e', {
          method: 'POST',
          body: formData,
      })
          .then((response) => response.json())
          .then((data1) => {
            data.image= data1.data.display_url;
            console.log(data)
            axios.post('http://localhost:4000/api/campaign', data)
            .then(res => {
             if(res.status==201){
              navigate("/")
              swal({
                title: "inserted data successfully!",
                text: "click me",
                icon: "success",
              });
             } 
             else{
              swal({
                title: "DO not insert you give me wrong route!",
                text: "click me",
                icon: "warning",
              });
             }
            })
            .catch(error => {
              console.error("An error occurred:", error);
            });
          }
      );
    }
    else{
      swal({
        title: "DO not insert you give me wrong route!",
        text: "click me",
        icon: "warning",
      });
      return;
    }
  }
  return (
    <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black 
    max-w-7xl mx-auto pb-8">
      <div className="max-w-7xl mx-auto">
        <SharedBanner
          background={campaignPhoto}
          title="Projects"
          titleHead="Submit your project details"
          titleDes={
            <>
              We will help you to start a new project or to collect funds for disasters.
            </>
          } />
      </div>

      <div className="text-center mt-8">
        <h2 className="text-3xl text-white font-bold">Submit Detail</h2>
        <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
      </div>

      <form className="card card-compact shadow-2xl p-10 max-w-7xl mx-auto w-11/12 text-base leading-6 space-y-6 sm:text-lg sm:leading-7 overflow-hidden mb-16 mt-8 bg-white" onSubmit={handleSubmit(onSubmit)}>

        <div className="relative">
          <input  {...register("name", { required: true })}
            name="name"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Full Name"
            required />

          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Full Name*
          </label>
        </div>
        <div className="relative">
          <input  {...register("email", { required: true })}
            name="email"
            type="email"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Enter valid email"
            required />

          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
           Enter valid  Email*
          </label>
        </div>
        <div className="relative">
          <input  {...register("phone", { required: true })}
            name="phone"
            type="number"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Enter valid email"
            required />

          <label
            htmlFor="phone"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
           Enter valid  phone*
          </label>
        </div>

        <div className="relative">
          <input  {...register("title", { required: true })}
            name="title"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Enter project title"
            required />

          <label
            htmlFor="project title"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
           Enter project title
          </label>
        </div>

        <div className="relative">
          <input  {...register("image", { required: true })}
            name="image"
            id="image"
            type="file"
            className="my-2 peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Enter project image"
            required />

          <label
            htmlFor="project image"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
           Enter project image
          </label>
        </div>

        <div className="relative">
          <input  {...register("description", { required: true })}
            name="description"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Enter project description"
            required />

          <label
            htmlFor="project image"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
           Enter project description
          </label>
        </div>

        <div className="relative">
          <input  {...register("date", { required: true })}
            name="date"
            type="date"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Enter project valid description"
            required />

          <label
            htmlFor="project time"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
           Enter project valid time
          </label>
        </div>

        <div className="relative">
          <input  {...register("location", { required: true })}
            name="location"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Enter project valid description"
            required />

          <label
            htmlFor="project location"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
           Enter project valid location
          </label>
        </div>

        <div className="relative">
          <input  {...register("budget", { required: true })}
            name="budget"
            type="number"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Enter project budget"
            required />

          <label
            htmlFor="project budget"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
           Enter project budget
          </label>
        </div>

        <div className="relative">
          <select
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-rose-600 text-sm text-gray-700"
            name="country"
            {...register("country", { required: true })}
            onChange={handleCountryChange}
          >
            <option value="" disabled>
              Country*
            </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Nepal">Nepal</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Egypt">Egypt</option>
            <option value="Niger">Niger</option>
            <option value="Venezuela">Venezuela</option>
          </select>

        </div>

        <div className="relative">
          <select
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-rose-600 text-sm text-gray-700"
            name="country"
            {...register("district", { required: true })}
            onChange={handleDistrictChange}
          >
            <option value="" disabled>
              Country*
            </option>
            {
             districts?.map(district=> <option value={district.district} key={district._id}>{district.district}</option>)
            }
          </select>

        </div>
        
        <div className="text-center">
          <button type="submit" className="px-3 w-1/2  py-1 border hover:border-[#F99F24] hover:text-white font-semibold bg-[#F99F24] text-black cursor-pointer hover:scale-95 duration-300 hover:duration-300 rounded-xl mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Info;