import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import image from "../../assets/SocialBLog/Green Minimalist Blog Post Linkedin Article Cover.png"

const AddPost = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://crowdfunding-gamma.vercel.app/socialPostBlog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You Added a Blog Successfully',
                        'success'
                      )
                } 
            })

    }


    return (
        <div className="max-w-7xl mx-auto text-black">
           
         <div>
            <img className="w-full" src={image} alt="" />
         </div>
            <div className="">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div >
                        <h5 className="font-bold text-4xl mt-3 ps-3">Title</h5>
                        <input className="p-2  w-full text-black  " defaultValue=""
                            {...register("sellerName")} />
                    </div>
                    <hr className="border border-gray-400" />
               
                  <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-9 ps-3">
                  <div>
                        <h5 className="font-bold  text-">Photo :</h5>
                        <input className="p-2  w-3/4 text-    border rounded-3xl" type="file"
                            {...register("photoURL")}  />
                    </div>
                  <div>
                        <h5 className="font-bold  ">Author - Name :</h5>
             <input className="p-3  w-3/4 text-black border
                         rounded-3xl" defaultValue=""
                            {...register("name")} />
                    </div>
                    <div>
                        <h5 className="font-bold ">Date :</h5>
                        <input className="p-3 w-3/4  text-black border rounded-3xl" type="date"
                            {...register("price")} />
                    </div>
                  </div>
                   
                   
                   
                   
                 
                   
                    <div>
                        <h5 className="font-bold text-2xl mt-3 ps-3"> Share your Blog </h5>
                        <input className="  w-full h-96 text-black lg:p-0   border 
                         rounded-lg" defaultValue="" {...register("details")} />
                    </div>
                    <div>

                    </div>
                    <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3 p-2">

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit"  className='btn bg-[#5c771e] text-white
                       hover:text-black   w-full mt-3 mb-3  '/>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;