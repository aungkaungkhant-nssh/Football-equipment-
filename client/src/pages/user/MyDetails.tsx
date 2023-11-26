import React, { useEffect, useState } from 'react'
import useAuth from '../../hook/useAuth'
import InputText from '../../components/Form/InputText';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { resetUserAuth, userDetailsUpdate, userPasswordUpdate } from '../../features/Auth/authSlice';
import AnimatePlus from '../../components/Loading/AnimatePlus';
import toast from 'react-hot-toast';
const MyDetails = () => {
  const {user,loading,success,errormessages,successMessage} = useAuth();
  const [name,setName] = useState<string | undefined>(user?.name)
  const [email,setEmail] = useState<string | undefined>(user?.email);
  const [showChangePasswordDiv,setShowChangePasswordDiv] = useState<boolean>(false);
  const [currentPassword,setCurrentPassword] =  useState<string>("")
  const [newPassword,setNewPasword] = useState<string>("");
  const dispatch:AppDispatch  = useDispatch();



  useEffect(()=>{
    if(success){
        if(successMessage === "Details") toast.success(`Update ${successMessage} success`)
        if(successMessage === "Password"){
            toast.success(`Update ${successMessage} success`) ;
            setCurrentPassword("");
            setNewPasword("");
            setShowChangePasswordDiv(false);
        }   

        dispatch(resetUserAuth(""));
    }
  },[success])
  
  return (
    <section className='p-8'>
        <div className='mb-8'>
            <h3 className='text-3xl font-bold'>My Details</h3>
            <p className='mt-3 font-thin text-lg'>Please enter or update your details  below</p>
        </div>
        <div className='mb-'>
                <div className='w-full mb-3'>
                        <label htmlFor="Name" className='block text-lg mb-3 font-bold'>Name </label>
                        <InputText type="text" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)} errormessages={errormessages} name= "name"/>
                </div>
                <div className='w-full'>
                        <label htmlFor="Email" className='block text-lg mb-3 font-bold'>Email </label>
                        <InputText disabled={true} type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} errormessages={errormessages} name= "email"/>
                </div>
                <div className='mt-5'>
                    <button className='bg-amber-500 text-white p-3 rounded hover:bg-amber-600'
                    disabled={loading?true:false}
                      onClick={()=>{
                      dispatch(userDetailsUpdate({name}))
                    }}
                    >
                        {
                            loading && !showChangePasswordDiv ?  <AnimatePlus bgColor='bg-amber-100' />
                            : "Update Details"
                        }
                      
                       
                    </button>
                </div>

        </div>
        <hr className='my-10' />
        {
            user && !user.provider && (
                <>
                         <div >
            {
                showChangePasswordDiv ? (
                    <>
                        <h3 className='text-3xl font-bold mb-3'>
                             Change your Password
                         </h3>
                         <p className='mt-3 font-thin text-lg'>Change your password</p>
                    </>
                   
                ):(
                    <h3 className='text-3xl font-bold'>Password</h3>
                )
            }
 

        </div>
        <hr  className='my-5'/>
        {
            showChangePasswordDiv ? (
                    <div>
                        <div className='mb-5'>
                                <label htmlFor="CurrentPassword" className='block text-lg mb-3 font-bold'>Current Password</label>
                                <InputText passwordIndicator={true} type="password" placeholder='Current password' value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)} errormessages={errormessages} name="currentPassword" />
                        </div>
                        <div>
                                <label htmlFor="NewPassword" className='block text-lg mb-3 font-bold'>New Password</label>
                                <InputText passwordIndicator={true} type="password" placeholder='New password' value={newPassword} onChange={(e)=>setNewPasword(e.target.value)} errormessages={errormessages} name="newPassword" />
                        </div>
                        <div className='mt-3'>
                            <button className="bg-amber-500 text-white w-[150px] py-4 mr-4 rounded hover:bg-amber-600 transition duration-200"
                            onClick={()=>dispatch(userPasswordUpdate({currentPassword,newPassword}))}
                            >
                            {
                                loading && showChangePasswordDiv ?  <AnimatePlus bgColor='bg-amber-100' />
                                : "Update  password"
                                }
                            </button>
                            <button onClick={()=>setShowChangePasswordDiv(false)} className='border border-gray-900 w-[120px] py-4 rounded hover:bg-gray-100'>Cancel</button>
                        </div>
                    </div>
                  ):(
                            <div>
                                <div className='rounded border border-gray-900 flex items-center  justify-between p-4 cursor-pointer hover:bg-amber-500 hover:text-white duration-300 hover:border-white'
                                onClick={()=>setShowChangePasswordDiv(true)}
                                >
                                    <p>******</p>
                                    <i className="fa-solid fa-lock text-lg"></i>
                                </div>
                            </div>
                            )
                }
                
                </>
            )
        }
       
      

    </section>
  )
}

export default MyDetails