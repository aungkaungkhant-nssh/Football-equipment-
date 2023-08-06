import React, { useEffect, useRef, useState } from 'react'
import InputText from '../../../components/Form/InputText'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { adminLogin, resetAdminAuth } from '../../../features/adminAuth/authSlice';
import useAdmin from '../../../hook/useAdmin';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';

const AdminLogin = () => {
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("")
  const {admin,loading,success,errormessages} = useAdmin();
  const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(success){
        navigate("/admin/dashboard")
        dispatch(resetAdminAuth(""))
    }
    if(admin){
        navigate("/admin/dashboard")
    }
   
  },[success,navigate])
  return (
    <section className='grid place-items-center h-screen'>
        <div className='w-[30%]'>
            <h3 className='text-center mb-6 animate-spin'><i className="fa-brands font-bold fa-slack  text-amber-500 dark:text-gray-100 text-4xl"></i></h3>
            <h3 className='text-center font-bold text-2xl mb-6 text-gray-500'>Admin Sign In</h3>
            <div className=''>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    dispatch(adminLogin({email,password}))
                }}>
                    <div className='my-3'>
                        <InputText type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} errormessages={errormessages} name= "email" />
                    </div>
                    <div className='my-3'>
                        <InputText type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} errormessages={errormessages} name= "password" />
                    </div>
                    <button className='mt-3 bg-amber-500  px-5 rounded-md py-4 shadow-lg  text-white transition all duration-300 w-full text-xl hover:bg-amber-600'>
                        {
                            loading ?
                            <Loading bgColor='bg-amber-100' />
                            :(
                                <>
                                    <span className='text-xl'>Sign In</span>
                                </>
                            )
                           }

                    </button>
                </form>
            </div>
           
        </div>
       
    </section>
  )
}

export default AdminLogin