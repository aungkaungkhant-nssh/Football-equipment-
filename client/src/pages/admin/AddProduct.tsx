import React, { useState,useRef, FormEvent, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { addProduct, resetProduct, setLoading } from '../../features/products/productSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store'
import {  BrandType, fetchLatestBrands } from '../../features/brands/brandSlice';
import useBrand from '../../hook/useBrand';
import { CategoryType, fetchLatestCategories } from '../../features/categories/categorySlice';
import useCategory from '../../hook/useCategory';
import axios from 'axios';
import useProduct from '../../hook/useProduct';
import InputText from '../../components/Form/InputText';
import TextArea from '../../components/Form/TextArea';
import SelectText from '../../components/Form/SelectText';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import FileListsPreview from '../../components/Image/FileListsPreview';
type FileWithPreview = {
    file:File,
    previewUrl:string
}
const AddProduct = () => {
    const [name,setName] = useState<string>("");
    const [photos,setPhotos] = useState<FileList>();
    const [price,setPrice] = useState<string>("")
    const [description,setDescription] = useState<string>("")
    const [brand,setBrand] = useState<BrandType []>([]);
    const [category,setCategory] = useState<CategoryType []>([]);
    const [sizes,setSizes] = useState<string []>([]);
    const [colors,setColors] = useState<string []>([]);
    const [stock,setStock] = useState<string>("")
    const {brands} = useBrand();
    const {categories} = useCategory();
    const {errorMessages,success,products,loading} = useProduct();
    const dispatch:AppDispatch= useDispatch();
    const ref = useRef<HTMLInputElement>(null)
    const [filesWithPreview, setFilesWithPreview] = useState<FileWithPreview[]>([]);
    const handleSelectSize = (e:React.FormEvent<HTMLInputElement>):void=>{ 
      const existChooseSize = sizes.findIndex((s)=>e.currentTarget.value === s);
       if(existChooseSize  <=-1){
            setSizes([...sizes,e.currentTarget.value])
       }else{
            setSizes(sizes.filter((s)=>s !== e.currentTarget.value))
       }
    }

    const handleAddProductSubmit = async(e:FormEvent<EventTarget>)=>{
        
        e.preventDefault();
        dispatch(setLoading(true))
        const data:FormData = new FormData();
        data.append("upload_preset","footballeqp");
        data.append("cloud_name","dqlplxvtx");
        let images:string[]=[];
        if(photos){
            for (const f of photos!) {
               
                 if(filesWithPreview.find((fp)=>fp.file.name === f.name )){
                    data.append("file", f);
                    let result = await axios.post("https://api.cloudinary.com/v1_1/dqlplxvtx/image/upload",data);
                    images.push(result.data.url)
                 }
             
            }
        }
        dispatch(addProduct(
            {
                name,
                images,
                price,
                description,
                brand,
                category,
                sizes,
                stock:Number(stock),
                colors
            }
        ))
    }
    useEffect(()=>{
        if(brands.length===0 || categories.length===0){
            dispatch(fetchLatestBrands())
            dispatch(fetchLatestCategories())
        }else{
             setCategory([categories[0]])
            setBrand([brands[0]])
        }
  
    },[brands,categories])
    const chooseColor = (color:string)=>{
        if(!colors.find(c=>c===color)){
            setColors([...colors,color])
        }else{
            setColors(colors.filter((c) => c !== color))
        }
    }
    useEffect(()=>{
        if(success){
            toast.success('Create Product Success', {
                position: toast.POSITION.TOP_RIGHT
            });
            setName("")
            setPrice("")
            setDescription("")
            setBrand([brand[0]])
            setCategory([category[0]])
            setSizes([])
            setColors([])
            dispatch(resetProduct(""))
            setFilesWithPreview([])
        }
    },[products,success])
  return (
    <div className='my-10'>
        <div className='bg-white p-5 pb-8 rounded shadow'>
             <div className='flex justify-between items-center  px-4 mb-5'>
                <h3 className='text-xl font-bold'>Add Product</h3>
                
                <Link to="/admin/products" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                    <i className="fa-solid fa-list-ul text-xl"></i>
                </Link>
            </div>
            <hr />
            <div className='px-4 w-[90%] mx-auto mt-5'>
                <form onSubmit={handleAddProductSubmit}>
                    <div className='w-full my-6'>
                        <label htmlFor="brandName" className='block text-lg mb-3'>Name </label>
                        <InputText type="text" placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)} errormessages={errorMessages} name= "name"/>
                    </div>
                    <div className='flex gap-3'>
                        {/* preview image lists */}
                        <div className='flex gap-3'>
                            {
                                filesWithPreview.map((fileWithPreview,i)=>(
                                    fileWithPreview.file.type.startsWith('image')&&(
                                        <FileListsPreview
                                            image={fileWithPreview.previewUrl}
                                            onClick = {()=>setFilesWithPreview(filesWithPreview.filter((f,index) => index!== i))}
                                        />
                                    )
                                ))
                            }
                        </div>
                     
                        <div
                            onClick={()=>ref.current?.click()}
                            className="rounded h-[100px] p-4 flex flex-col items-center gap-2 bg-gray-100  hover:bg-amber-100 group cursor-pointer items-center justify-center transition all duration-300"
                        >
                            <i className="fa-solid fa-cloud-arrow-up text-2xl tex-gray-600 group-hover:text-amber-500 transition all duration-300"></i>
                            <span className='text-gray-600 group-hover:text-amber-500  transition all duration-300'>Choose Product Photos</span>
                            <InputText 
                            ref={ref}
                            type="file"      
                            onChange={(e)=>{
                                        const {files} = e.target;
                                        const selectedFiles = files as FileList
                                        const filesToPreview: FileWithPreview[] = [];
                                        for (let i = 0; i < selectedFiles.length; i++) {
                                            const file = selectedFiles[i];
                                            const fileWithPreview: FileWithPreview = {
                                            file,
                                            previewUrl: URL.createObjectURL(file),
                                            };
                                            filesToPreview.push(fileWithPreview);
                                        }
                                    
                                        setFilesWithPreview([...filesWithPreview,...filesToPreview]);
                                    
                                        setPhotos(selectedFiles)

                                    }} errormessages={errorMessages} name="images"
                                />
                        
                        </div>
                    </div>
                    
                  
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Price</label>
                        <InputText type="text" placeholder='Enter price' value={price} onChange={(e)=>setPrice(e.target.value)} errormessages={errorMessages} name= "price"/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Description</label>
                       <TextArea placeholder='Enter description' value={description}  onChange={(e)=>setDescription(e.target.value)} errormessages={errorMessages} name='description'/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Select Brand</label>
                        <SelectText options={brands} errormessages={errorMessages} onChange={(e)=>{
                            const existBrand:BrandType | undefined =  brands.find((b)=> b._id === e.target.value)
                            if(existBrand){
                                setBrand([existBrand])
                            }
                        }} name="brand" />
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Select Category</label>
                        <SelectText options={categories} errormessages={errorMessages} onChange={(e)=>{
                             const existCategory:CategoryType | undefined =  categories.find((b)=> b._id === e.target.value)
                             if(existCategory){
                                 setCategory([existCategory])
                             }
                        }} name="category" />
                       
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Stocks</label>
                        <InputText type="number" placeholder='Number of Stock' value={stock} onChange={(e)=>setStock(e.target.value)} errormessages={errorMessages} name= "stock" />

                    </div>
                    <div className='w-full my-6'>   
                        <label htmlFor="" className='block text-lg mb-4'>Color</label>   
                        <div className='flex gap-5'>
                            <div  className='w-[40px] h-[40px] bg-red-500 rounded flex justify-center items-center cursor-pointer' onClick={()=>chooseColor("bg-red-500")}>
                                {
                                    colors.find((c)=>c ==="bg-red-500") && (
                                        <i className="fa-solid fa-check text-white"></i>
                                    )
                                }
                            </div>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded flex justify-center items-center cursor-pointer' onClick={()=>chooseColor("bg-yellow-500")}>
                            {
                                    colors.find((c)=>c ==="bg-yellow-500") && (
                                        <i className="fa-solid fa-check text-white"></i>
                                    )
                                }
                            </div>
                        </div> 
                        {
                           errorMessages.find((e:any)=>e.path==="colors") && (
                                    <span className='text-red-500 '>Please select color less than one</span>
                            )
                        }
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-4'>Size</label>
                        <div className='flex gap-4'>
                            <div className='flex items-center gap-2'>
                                <input checked={sizes.find((s)=>s==="S")? true :false} value="S" type="checkbox" className='w-5 h-5' name='size' onChange={handleSelectSize} /> <label htmlFor="" className='text-lg'>S</label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input checked={sizes.find((s)=>s==="XS")? true :false} value="XS" type="checkbox" className='w-5 h-5' name='size' onChange={handleSelectSize} /> <label htmlFor="" className='text-lg'>XS</label>
                            </div>
                        </div>
                        {
                           errorMessages.find((e:any)=>e.path==="sizes") && (
                                    <span className='text-red-500 '>Please select size</span>
                            )
                        }
                        
                    </div>
                    <div className='w-[100%] mt-5'>
                        <button  disabled={loading?true:false} className='mt-3 bg-amber-500  px-5 rounded-md py-4 shadow-lg  text-white transition all duration-300 w-full'>
                           {
                            loading ?
                            <Loading bgColor='bg-amber-100' />
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

export default AddProduct