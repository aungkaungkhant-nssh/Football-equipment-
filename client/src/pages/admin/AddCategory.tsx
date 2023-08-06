import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import useBrand from '../../hook/useBrand';
import { toast } from 'react-toastify';
import { addCategory, resetCategory } from '../../features/categories/categorySlice';
import useCategory from '../../hook/useCategory';
import Loading from '../../components/Loading';
const AddCategory = () => {
    const [name,setName] = useState("");
    const dispatch:AppDispatch = useDispatch();
    const {loading,categories,success,errorMessages} = useCategory();
    const handleAddCategory = (e:FormEvent<EventTarget>)=>{
        e.preventDefault()
        dispatch(addCategory({name}))
        setName("")
    }
    useEffect(()=>{
        if(success){
            toast.success('Create Category Success', {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(resetCategory(""))
        }
    },[categories,success])

   
  return (
    <div className='my-10'>
        <div className='bg-white p-5 rounded shadow'>
             <div className='flex justify-between items-center  px-4 '>
                <h3 className='text-xl font-bold'>Add Category</h3>
                
                <Link to="/admin/categories" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                    <i className="fa-solid fa-list-ul text-xl"></i>
                </Link>
            </div>
            <hr className='my-10' />
            <div className='px-4 w-[90%] mx-auto '>
                <form onSubmit={handleAddCategory}>
                    <div className='w-full'>
                        <label htmlFor="brandName" className='block mb-3'>Name </label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  id="brandName" placeholder='Enter category name' className={`mb-1   border border-gray-200 ${errorMessages.find((e:any)=>e.path==="name") && 'border-red-500'}  px-3 py-4  w-full focus:outline-amber-200 text-gray-500 rounded`}/>
                        {
                           errorMessages.find((e:any)=>e.path==="name") && (
                                    <span className='text-red-500 '>Name field is required</span>
                            )
                        }
                    </div>
                    <div className='w-[100%] mt-5'>
                        <button className='mt-3 bg-amber-500 text-white px-5 rounded-md py-4 shadow-lg hover:bg-amber-500 hover:text-white transition all duration-300 w-full'>
                            {
                                loading ? (
                                    <Loading bgColor='bg-amber-100' />
                                ):(
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

export default AddCategory