import React, { useEffect, useState } from 'react'
import InputText from '../../components/Form/InputText'
import AnimatePlus from '../../components/Loading/AnimatePlus';
import { useDispatch } from 'react-redux';
import { resetPassword, resetUserAuth } from '../../features/Auth/authSlice';
import { AppDispatch } from '../../app/store';
import useAuth from '../../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const dispatch:AppDispatch = useDispatch();
    const {loading,errormessages,success,user} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!success && user){
            return navigate("/")
          }
        if(success){
            dispatch(resetUserAuth(""))
        }
        return ()=>{
            dispatch(resetUserAuth(""));
          }
    },[success])

  return (
    <section  className='my-10 px-4 max-w-screen-md mx-auto h-screen' >
        <div className='bg-white shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] px-8 py-8 rounded'>
            <div className='text-center  border border-white border-b-gray-200 pb-5 mb-3'>
                <h3 className='uppercase text-3xl font-thin'>Forgot password</h3>
            </div>
                <div className='flex justify-between mt-8 md:items-center flex-col md:flex-row '>
                    <div className='basis-full '>
                        <label htmlFor="" className='block mb-2 font-thin'>Email *</label>
                        <InputText type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'   errormessages={errormessages} name="email"/>
                    </div>
                  
               </div>
               <div className='flex flex-col justify-between md:items-center mt-3'>
                <button className='bg-amber-500 text-lg text-gray-100 rounded w-[100%] md:w-[60%] rounded-full py-3 hover:bg-amber-600 transition all duration-300'
                onClick={()=> dispatch(resetPassword(email))}
                >
                    {
                    loading ? (
                        <AnimatePlus bgColor='bg-gray-200' />
                    ):(
                        "Send"
                    )
                    }
                
                </button>
               </div>
        </div>
   
    </section>
  )
}

export default ForgotPassword