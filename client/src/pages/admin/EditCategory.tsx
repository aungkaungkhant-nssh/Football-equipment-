import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import { fetchCategory, resetCategory, updateCategory } from '../../features/categories/categorySlice';

import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useCategory from '../../hook/useCategory';
import Tooltip from '../../components/Tooltip/Tooltip';
import AnimatePlus from '../../components/Loading/AnimatePlus';
import Spinner from '../../components/Loading/Spinner';
const EditCategory = () => {

    const dispatch:AppDispatch = useDispatch();
    const {loading,categories,success,errorMessages} = useCategory();
    const {id} = useParams()
 
    const [name,setName] = useState("");
    const navigate = useNavigate();

    const handleUpdateCategory = (e:FormEvent<EventTarget>)=>{
        e.preventDefault()
        dispatch(updateCategory({_id:id,name}))
        setName("")
    }
    useEffect(()=>{
    
        if(id){
            dispatch(fetchCategory(id))
            const brand = categories.find((b)=>b._id == id)
            if(brand) setName(brand.name)
        }
    },[id,navigate,categories])    
    useEffect(()=>{
        if(success){
            toast.success('Update category Success');
            dispatch(resetCategory(""))
            navigate("/admin/categories")
        }
    },[categories,success])


  return (
    <div className='my-10'>
        <div className='bg-white p-5 rounded shadow dark:bg-gray-900'>
             <div className='flex justify-between items-center  px-4 '>
                <h3 className='text-xl font-bold dark:text-gray-100'>Edit Category</h3>
                
                <Tooltip  tooltipsText='Category Lists' position='top'> 
                    <button onClick={()=>navigate("/admin/categories")} className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                        <i className="fa-solid fa-list-ul text-xl"></i>
                    </button>
                </Tooltip>
            </div>
            <hr className='my-10' />
            {
                
                    <div className='px-4 w-[90%] mx-auto '>
                    <form onSubmit={handleUpdateCategory}>
                        <div className='w-full'>
                            <label htmlFor="brandName" className='block mb-3 dark:text-gray-100'>Name </label>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  id="brandName" placeholder='Enter brand name' className={`mb-1   border border-gray-200 ${errorMessages.find((e:any)=>e.path==="name") && 'border-red-500'}  px-3 py-4  w-full focus:outline-amber-200 text-gray-500 rounded`}/>
                            {
                               errorMessages.find((e:any)=>e.path==="name") && (
                                        <span className='text-red-500 '>Name field is required</span>
                                )
                            }
                        </div>
                        <div className='w-[100%] mt-5'>
                            <button disabled={loading} className='mt-3 bg-amber-500  px-5 rounded-md py-4 shadow-lg  text-dark transition all duration-300 w-full hover:text-white'>
                                {
                                    loading ? (
                                        <AnimatePlus bgColor='bg-amber-100' />
                                    ):(
                                        <>
                                            <i className="fa-solid fa-circle-plus mr-3 text-xl" ></i>
                                            <span className='text-xl'>Update</span>
                                        </>
                                    )
                                }
                                
                            </button>
                        </div>
                        
                    </form>
                     </div>
            }
           
        </div>
        
    </div>
  )
}

export default EditCategory