import React, { useEffect, useState } from 'react'
import InputText from '../../components/Form/InputText';
import AnimatePlus from '../../components/Loading/AnimatePlus';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { resetUserAuth, resetVerifyPassword } from '../../features/Auth/authSlice';

const ResetPasswort = () => {
    const [password,setPassword] = useState<string>("");
    const [confirmPassword,setConfirmPassword] = useState<string>("");
    const {token} =  useParams();
    const {loading,errormessages,success,user}= useAuth();
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!success && user){
            return navigate("/")
          }
        if(success){
            navigate("/login");
            dispatch(resetUserAuth(""))
        }
    },[success])
  return (
    <section  className='my-10 px-4 max-w-screen-md mx-auto h-screen' >
    <div className='bg-white shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] px-8 py-8 rounded'>
        <div className='text-center  border border-white border-b-gray-200 pb-5 mb-5'>
            <h3 className='uppercase text-3xl font-thin'>Reset password</h3>
        </div>
           
            <div className='basis-full '>
                <label htmlFor="" className='block mb-2 font-thin'>Password *</label>
                <InputText passwordIndicator={true} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'   errormessages={errormessages} name="password"/>
            </div>
            <div className='basis-full my-5 '>
                <label htmlFor="" className='block mb-2 font-thin'>ConfirmPassword *</label>
                <InputText passwordIndicator={true} type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Passsword'   errormessages={errormessages} name="confirmPassword"/>
            </div>
           <div className='flex flex-col justify-between md:items-center mt-5'>
            <button className='bg-amber-500 text-lg text-gray-100 rounded w-[100%] md:w-[60%] rounded-full py-3 hover:bg-amber-600 transition all duration-300'
                onClick={()=>dispatch(resetVerifyPassword({password,confirmPassword,token}))}
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

export default ResetPasswort