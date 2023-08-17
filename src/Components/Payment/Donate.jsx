import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckOut from './CheckOut';
// const stripePromise = loadStripe('pk_test_51NEmG3IxzytApYUlrVvQjOkLBL4TdwZ6aTq4Mz4FnMKHgzjX83FRLIjyEjCddXis3csWUdu0pnLWkkt5QSxJAjb300a5y8iSib');
const Donate = () => {
    const navigate=useNavigate();
    const handlePayment=(event)=>{
        event.preventDefault();
        const form=event.target;
      
        const paymentData={
            name:form.name.value,
            number:form.number.value,
            address:form.address.value,
            price:form.payment.value,
            message:form.message.value,
        }
        fetch("http://localhost:5000/saveAddress",{
            method:"POST",
           headers: {
            "content-type":"application/json",
            },
            body:JSON.stringify(paymentData),
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result.insertedId)
                navigate(`/donatePayment/${result.insertedId}`)
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <h1 className='text-center text-xl my-3'>Please fill-up your information</h1>
            <form className='my-3 mx-[5vw]' onSubmit={handlePayment}>
            <input type='text' name='name' className='input input-bordered w-[89vw] my-2 bg-white' placeholder='Enter your name' required></input><br />
            <input type='number' name='number' className='input input-bordered w-[89vw] my-2 bg-white' placeholder='Enter your mobile number' required></input><br />
            <textarea rows="10" cols="50" name='address' className='input input-bordered w-[89vw] my-2' placeholder='Enter your address' required></textarea><br />
            <input type='number' name='payment' className='input input-bordered w-[89vw] my-2 bg-white' placeholder='Enter total payment dollars' required></input><br />
            <textarea rows="10" cols="50" name='message' className='input input-bordered w-[89vw] my-2' placeholder='feedback for massage' ></textarea><br />
            {/* <Elements stripe={stripePromise}>
                <CheckOut price={tk}></CheckOut>
            </Elements> */}
            <input type="submit" value="submit" className='btn btn-warning input-bordered w-[89vw] my-2 ' /><br/>
            </form>
        </div>
    );
};

export default Donate;