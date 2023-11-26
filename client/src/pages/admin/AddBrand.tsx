import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import { addBrand, resetBrand, setLoading } from '../../features/brands/brandSlice';
import useBrand from '../../hook/useBrand';
import toast from 'react-hot-toast';
import InputText from '../../components/Form/InputText';
import FileListsPreview from '../../components/Image/FileListsPreview';
import axios from 'axios';

import { ImageType } from '../../features/products/productSlice';
import Tooltip from '../../components/Tooltip/Tooltip';
import AnimatePlus from '../../components/Loading/AnimatePlus';
import useDarkSide from '../../hook/useUi';
import tableTheme from '../../helper/tableTheme';
type FileWithPreview = {
    file:File ,
    previewUrl:string
}
const AddBrand = () => {
    const [name,setName] = useState("");
    const [image,setImage] = useState<File | null>(null);
    const dispatch:AppDispatch = useDispatch();
    const {loading,brands,success,errorMessages} = useBrand();
    const [filesWithPreview, setFilesWithPreview] = useState<FileWithPreview[]>([]);
    const navigate = useNavigate();
    const ref = useRef<HTMLInputElement>(null);
    const handleAddBrand = async(e:FormEvent<EventTarget>)=>{
        e.preventDefault()
        dispatch(setLoading(true))
        const data:FormData = new FormData();
        data.append("upload_preset","footballeqp");
        data.append("cloud_name","dqlplxvtx");
        let logo:ImageType={public_id:"",imageUrl:""};
        if(image){
            data.append("file",image)
            try{
                let result = await axios.post("https://api.cloudinary.com/v1_1/dqlplxvtx/image/upload",data);
                logo.public_id = result.data.public_id
                logo.imageUrl = result.data.url
             
            }catch(err){
                dispatch(setLoading(false))
                return;
            }
    
        }
        dispatch(addBrand({name,logo}))
        dispatch(setLoading(false))
      
    }
    useEffect(()=>{
        if(success){
            toast.success('Create Brand Success');
            setName("")
            setFilesWithPreview([])
            dispatch(resetBrand(""))
        }
    },[brands,success])


   
  return (
    <div className='my-10'>
        <div className='bg-white p-5 rounded shadow dark:bg-gray-900'>
             <div className='flex justify-between items-center  px-4 '>
                <h3 className='text-xl font-bold dark:text-gray-100'>Add Brand</h3>
                
                <Tooltip  tooltipsText='Brand Lists' position='top'> 
                    <button onClick={()=>navigate("/admin/brands")} className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                        <i className="fa-solid fa-list-ul text-xl"></i>
                    </button>
                </Tooltip>
            </div>
            <hr className='my-10' />
            <div className='px-4 w-[90%] mx-auto '>
                <form onSubmit={handleAddBrand}>
                    <div className='w-full'>
                        <label htmlFor="brandName" className='block mb-3 dark:text-gray-100'>Name </label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  id="brandName" placeholder='Enter brand name' className={`mb-1   border border-gray-200 ${errorMessages.find((e:any)=>e.path==="name") && 'border-red-500'}  px-3 py-4  w-full focus:outline-amber-200 text-gray-500 rounded`}/>
                        {
                           errorMessages.find((e:any)=>e.path==="name") && (
                                    <span className='text-red-500 '>Name field is required</span>
                            )
                        }
                    </div>
                    <div className='flex my-4'>
                        {/* preview logo lists */}
                        <div className='flex gap-3'>
                            {
                                filesWithPreview.map((fileWithPreview,i)=>(
                                    fileWithPreview?.file.type.startsWith('image')&&(
                                        <FileListsPreview
                                            image={fileWithPreview.previewUrl}
                                            onClick = {()=>setFilesWithPreview(filesWithPreview.filter((f,index) => index!== i))}
                                        />
                                    )
                                ))
                            }
                        </div>
                        {/* upload logo */}
                        {
                            filesWithPreview.length ===0  && (
                                <div
                            onClick={()=>ref.current?.click()}
                            className="rounded h-[100px] p-4 flex flex-col items-center gap-2 bg-gray-100  hover:bg-amber-100 group cursor-pointer items-center justify-center transition all duration-300"
                        >
                            <i className="fa-solid fa-cloud-arrow-up text-2xl tex-gray-600 group-hover:text-amber-500 transition all duration-300"></i>
                            <span className='text-gray-600 group-hover:text-amber-500  transition all duration-300'>Choose Brand Logo</span>
                            <InputText 
                            ref={ref}
                            type="file"      
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                                        const file= e.target.files?.[0];
                                        if(file){
                                            const filesToPreview: FileWithPreview={
                                                file:file,
                                                previewUrl:URL.createObjectURL(file)
                                            };
                                            setFilesWithPreview([filesToPreview])
                                            setImage(file)
                                        }
                                      
                                        

                                    }} errormessages={errorMessages} name="logo.public_id"
                                />
                        
                        </div>
                            ) 
                        }
                        

                    </div>
                    <div className='w-[100%] mt-5'>
                        <button className='mt-3 bg-amber-500 text-white px-5 rounded-md py-4 shadow-lg hover:bg-amber-500 hover:text-white transition all duration-300 w-full'>
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

export default AddBrand