import React, { FormEvent, useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { addCustomer, resetCustomer } from '../../features/customers/customerSlice';
import useCustomer from '../../hook/useCustomer';
import InputText from '../../components/Form/InputText';
import toast from 'react-hot-toast';
import Tooltip from '../../components/Tooltip/Tooltip';
import AnimatePlus from '../../components/Loading/AnimatePlus';
const AddCustomer = () => {
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [confirmPassword,setConfirmPassword] = useState<string>("");
    const dispatch:AppDispatch = useDispatch();
    const {errorMessages,success,customers,loading} = useCustomer()
    const navigate = useNavigate()
    const handleAddCustomer = (e:FormEvent<EventTarget>)=>{
        e.preventDefault()
        dispatch(addCustomer({name,email,password,confirmPassword}))
    }
    useEffect(()=>{
        if(success){
            toast.success('Create Customer Success');
            setName("")
            setEmail("");
            setPassword("");
            setConfirmPassword("")
            dispatch(resetCustomer(""))
        }
    },[success,customers])
  return (
    <div className='my-10'>
        <div className='bg-white p-5 pb-8 rounded shadow  dark:bg-gray-900'>
            <div className='flex justify-between items-center  px-4 mb-5'>
                <h3 className='text-xl font-bold dark:text-gray-100'>Add Customer</h3>
                
                <Tooltip  tooltipsText='Customer Lists' position='top'> 
                    <button onClick={()=>navigate("/admin/customers")} className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                        <i className="fa-solid fa-list-ul text-xl"></i>
                    </button>
                </Tooltip>
            </div>
            <hr /> 
            <div className='px-4 w-[90%] mx-auto mt-5'>
                <form onSubmit={handleAddCustomer}>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3 dark:text-gray-100'>Name </label>
                        <InputText type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'   errormessages={errorMessages} name="name"/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3 dark:text-gray-100'>Email </label>
                        <InputText type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'   errormessages={errorMessages} name="email"/>
                    </div>
                
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3 dark:text-gray-100'>Password</label>
                        <InputText passwordIndicator={true} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'   errormessages={errorMessages} name="password"/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3 dark:text-gray-100'>Confirm Password </label>
                        <InputText passwordIndicator={true} type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'   errormessages={errorMessages} name="confirmPassword"/>
                    </div>
                    <div className='w-[100%] mt-5'>
                    <button  disabled={loading?true:false} className='mt-3 bg-amber-500  px-5 rounded-md py-4 shadow-lg  text-dark transition all duration-300 w-full hover:text-white'>
                           {
                            loading ?
                            <AnimatePlus bgColor='bg-amber-100' />
                            :(
                                <>
                                    <i className="fa-solid fa-circle-plus mr-3 text-xl" ></i>
                                    <span className='text-xl'>Add</span>
                                </>
                            )
                           }
                           

                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddCustomer