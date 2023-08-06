import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import {addBrand, fetchBrand, resetBrand, setLoading, updateBrand } from '../../features/brands/brandSlice';
import useBrand from '../../hook/useBrand';
import { toast } from 'react-toastify';
import { useParams,useNavigate } from 'react-router-dom';
import FileListsPreview from '../../components/Image/FileListsPreview';
import InputText from '../../components/Form/InputText';
import axios from 'axios';
import Loading from '../../components/Loading';
type FileWithPreview = {
    file:File ,
    previewUrl:string
}
const EditBrand = () => {

    const dispatch:AppDispatch = useDispatch();
    const {loading,brands,success,errorMessages} = useBrand();
    const [images,setImages] = useState<string []>([])
    const {id} = useParams()
    const [filesWithPreview, setFilesWithPreview] = useState<FileWithPreview[]>([]);
    const [name,setName] = useState("");
    const [image,setImage] = useState<File>()
    const navigate = useNavigate();
    const ref = useRef<HTMLInputElement>(null)

    const handleUpdateBrand = async(e:FormEvent<EventTarget>)=>{
        e.preventDefault()
        dispatch(setLoading(true))
        let logo;
        if(image){
            const data:FormData = new FormData();
            data.append("upload_preset","footballeqp");
            data.append("cloud_name","dqlplxvtx");
            data.append("file",image)
            let result = await axios.post("https://api.cloudinary.com/v1_1/dqlplxvtx/image/upload",data);
            logo = result.data.url
        }
       
        dispatch(updateBrand({_id:id,name,logo : logo || images[0]}))
        dispatch(setLoading(false))
       

    }
    useEffect(()=>{
    
        if(id){
            dispatch(fetchBrand(id))
            const brand = brands.find((b)=>b._id == id)
            if(brand) {
                setName(brand.name)
                setImages([brand.logo])
            }
        }
    },[id,navigate,brands])    
    useEffect(()=>{
        if(success){
            toast.success('Update Brand Success', {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(resetBrand(""))
            setName("")
            setFilesWithPreview([])
            navigate("/admin/brands")
        }
    },[brands,success])


  return (
    <div className='my-10'>
        <div className='bg-white p-5 rounded shadow'>
             <div className='flex justify-between items-center  px-4 '>
                <h3 className='text-xl font-bold'>Edit Brand</h3>
                
                <Link to="/admin/brands" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                    <i className="fa-solid fa-list-ul text-xl"></i>
                </Link>
            </div>
            <hr className='my-10' />
            <div className='px-4 w-[90%] mx-auto '>
                <form onSubmit={handleUpdateBrand}>
                    <div className='w-full'>
                        <label htmlFor="brandName" className='block mb-3'>Name </label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  id="brandName" placeholder='Enter brand name' className={`mb-1   border border-gray-200 ${errorMessages.find((e:any)=>e.path==="name") && 'border-red-500'}  px-3 py-4  w-full focus:outline-amber-200 text-gray-500 rounded`}/>
                        {
                           errorMessages.find((e:any)=>e.path==="name") && (
                                    <span className='text-red-500 '>Name field is required</span>
                            )
                        }
                    </div>
                    <div className='flex gap-3 my-4'>
                        <div className='flex gap-3'>
                            {
                                images.map((image,i)=>(
                                    <FileListsPreview 
                                        key={i}
                                        image={image}
                                        onClick={()=>setImages(images.filter((f,index)=> index !== i))}
                                    />
                                ))
                             } 
                        </div>
                        <div className='flex gap-3'>
                            {
                                filesWithPreview.map((fileWithPreview,i)=>(
                                    fileWithPreview?.file.type.startsWith('image')&&(
                                        <FileListsPreview
                                            key={i}
                                            image={fileWithPreview.previewUrl}
                                            onClick = {()=>setFilesWithPreview(filesWithPreview.filter((f,index) => index!== i))}
                                        />
                                    )
                                ))
                            }
                        </div>
                         {/* upload logo */}
                         {
                            
                         }
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
                                            setImages([])
                                        }
                                        // for (let i = 0; i < selectedFiles.length; i++) {
                                        //     const file = selectedFiles[i];
                                        //     const fileWithPreview: FileWithPreview = {
                                        //     file,
                                        //     previewUrl: URL.createObjectURL(file),
                                        //     };
                                        //     filesToPreview.push(fileWithPreview);
                                        // }
                                    
                                        // setFilesWithPreview([...filesWithPreview,...filesToPreview]);
                                    
                                        

                                    }} errormessages={errorMessages} name="logo"
                                />
                        
                        </div>
                    </div>
                    <div className='w-[100%] mt-5'>
                        <button disabled={loading?true:false}  className='mt-3 bg-amber-500 text-white px-5 rounded-md py-4 shadow-lg hover:bg-amber-500 hover:text-white transition all duration-300 w-full'>
                            {
                                loading ? (
                                    <Loading bgColor='bg-amber-100' />
                                ) : (
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
        </div>
        
    </div>
  )
}

export default EditBrand