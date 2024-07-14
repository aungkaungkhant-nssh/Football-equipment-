import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { resetAdminAuth, resetUserAuth, userRegister } from '../../features/Auth/authSlice';
import useAuth from '../../hook/useAuth';
import InputText from '../../components/Form/InputText';
import AnimatePlus from '../../components/Loading/AnimatePlus';
const Register = () => {
  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [confirmPassword,setConfirmPassword] = useState<string>("");
  const dispatch:AppDispatch = useDispatch();
  const {user,errormessages,success,loading} = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect")? "/"+searchParams.get("redirect") :"/";
  useEffect(()=>{
    if(!success && user){
      return navigate("/")
    }
    if(success){
      navigate(redirect);
      dispatch(resetUserAuth(''));
    }
    if(user){
     return navigate(-1);
    }

    return ()=>{
      dispatch(resetUserAuth(""));
    }
  },[success,navigate])
  return (
    <section  className=' px-4 max-w-screen-md mx-auto' style={{marginTop:"50px",marginBottom:"50px"}}>
    <div className='bg-white shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] px-8 py-8 rounded'>
      <div className='text-center  border border-white border-b-gray-200 pb-5'>
        <h3 className='uppercase text-3xl font-thin'>Create Account</h3>
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        dispatch(userRegister({name,email,password,confirmPassword}))
        
      }}>
           <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Name </label>
                        <InputText type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'   errormessages={errormessages} name="name"/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Email </label>
                        <InputText type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'   errormessages={errormessages} name="email"/>
                    </div>
                
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Password</label>
                        <InputText type="password"  passwordIndicator={true}  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'   errormessages={errormessages} name="password"/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Confirm Password </label>
                        <InputText type="password" passwordIndicator={true} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'   errormessages={errormessages} name="confirmPassword"/>
                    </div>
          <div className='flex flex-col justify-between md:items-center'>
            <button className='bg-amber-500 text-md text-gray-100 rounded w-[100%] md:w-[60%] rounded-full py-3 hover:bg-amber-600 transition all duration-300 uppercase'>
              {
                loading ? (
                  <AnimatePlus bgColor='bg-gray-200' />
                ):(
                  "Create Account"
                )
              }
           
            </button>
            <h6 className='my-2 text-center'>or</h6>
            <form action="http://localhost:8000/google" className='text-md border-gray-500 border rounded-ful  text-gray-900 rounded w-[100%] md:w-[60%]  rounded-full py-3 hover:bg-gray-200 transition all duration-300 uppercase text-center cursor-pointer'>
              <button className='w-full'>
                  <i className="fa-brands fa-google mr-3 text-lg"></i>
                  <span className=''>Login With Google</span>
                </button>
            </form>
            <h4 className='font-bold my-5 text-center'>Already have an account?</h4>
            <Link to="/login" className='text-md border-gray-500 border rounded-ful  text-gray-900 rounded w-[100%] md:w-[60%]  rounded-full py-3 hover:bg-gray-200 transition all duration-300 uppercase text-center'>Sign in</Link>
          </div>
      </form>
      
    </div>
  
  </section>
  )
}

export default Register