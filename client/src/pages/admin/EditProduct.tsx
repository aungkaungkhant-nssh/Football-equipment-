import React, { useState,useRef, FormEvent, ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageType, ProductType, addProduct, fetchProduct, resetProduct, setLoading, updateProduct } from '../../features/products/productSlice';
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
import { toast } from 'react-hot-toast'
import { useNavigate,useParams } from 'react-router-dom';
import FileListsPreview from '../../components/Image/FileListsPreview';
import cloudinary from '../../helper/cloudinary';
import Tooltip from '../../components/Tooltip/Tooltip';
import AnimatePlus from '../../components/Loading/AnimatePlus';
type FileWithPreview = {
    file:File,
    previewUrl:string
}
const EditProduct = () => {
    const {id} = useParams();
    const [name,setName] = useState<string>("");
    const [price,setPrice] = useState<string>("")
    const [description,setDescription] = useState<string>("")
    const [brand,setBrand] = useState<BrandType []>([]);
    const [category,setCategory] = useState<CategoryType []>([]);
    const [sizes,setSizes] = useState<string []>([]);
    const [colors,setColors] = useState<string []>([]);
    const [stock,setStock] = useState<string>("")
    const [chooseColor,setChooseColor] = useState<string>("");
    const [chooseSize,setChooseSize] = useState<string>("");
    const [discountPercent,setDiscountPercent] = useState<string>("");
    const [isNew,setIsNew] = useState<boolean>(false);
    const {brands} = useBrand();
    const {categories} = useCategory();
    const {errorMessages,success,products,loading} = useProduct();
    const [optionsBrands,setOptionsBrands] = useState<BrandType []>([])
    const [optionsCategories,setOptionsCategories] = useState<CategoryType []>([])
    const [filesWithPreview, setFilesWithPreview] = useState<FileWithPreview[]>([]);
    const [images,setImages] = useState<ImageType []>([])
    const dispatch:AppDispatch= useDispatch();
    const navigate =  useNavigate();
    const ref = useRef<HTMLInputElement>(null)


  
    useEffect(()=>{
      if(id){
          dispatch(fetchProduct(id))
          const product = products.find((p:ProductType)=>p._id==id)
          if(product){
            setName(product.name)
            setPrice(product.price)
            setDescription(product.description)
            setBrand(product.brand)
            setCategory(product.category)
            // setColors(product.colors)
            setSizes(product.sizes)
            setImages(product.images)
            setStock(product.stock.toString())
            product.discountPercent && setDiscountPercent(product.discountPercent.toString())
            product.isNew ? setIsNew(product.isNew) :setIsNew(false)
          }
       }
       dispatch(fetchLatestBrands())
       dispatch(fetchLatestCategories())
    },[id,navigate,products])

    useEffect(()=>{
        if(brands.length>0 && categories.length>0 && brand.length>0){
            setOptionsBrands([brand[0],...brands.filter((b)=>b._id!==brand[0]._id)])
            setOptionsCategories([category[0],...categories.filter((b)=>b._id!==category[0]._id)])
        }
    },[brands,categories])
    
    const handleUpdateProduct = async(e:FormEvent<EventTarget>)=>{
        e.preventDefault()
        dispatch(setLoading(true))
        const data:FormData = new FormData();
        data.append("upload_preset","footballeqp");
        data.append("cloud_name","dqlplxvtx");
        let imgs:Array<ImageType>=[];
        if(filesWithPreview){
            for (const f of filesWithPreview!) {
                data.append("file", f.file);
                let result = await axios.post("https://api.cloudinary.com/v1_1/dqlplxvtx/image/upload",data);
                imgs.push({public_id:result.data.public_id,imageUrl:result.data.url})
            
            }
        }
        const databaseImages = products.find((p:ProductType)=>p._id==id)?.images;
        
        if(databaseImages){
               const deleteForCloud =  databaseImages.filter((di)=>{
                    return !images.some((i)=> i.public_id === di.public_id)
                })
                if(deleteForCloud.length>0){
                    cloudinary.destroy(deleteForCloud[0])
                }
        } 
  

        dispatch(updateProduct({_id:id,name,price,description,brand,category,sizes,images:[...images,...imgs],isNew,stock:+stock,discountPercent:Number(discountPercent)}))
    }
    useEffect(()=>{
        if(success){
            toast.success('Update Product Success');
            dispatch(resetProduct(""))
            navigate("/admin/products")
        }
    },[brands,success]);
    
  return (
    <div className='my-10'>
        <div className='bg-white p-5 rounded shadow dark:bg-gray-900'>
             <div className='flex justify-between items-center  px-4 mb-5'>
                <h3 className='text-xl font-bold dark:text-gray-100'>Edit Product</h3>
                
                <Tooltip  tooltipsText='Product Lists' position='top'> 
                    <button onClick={()=>navigate("/admin/products")} className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                        <i className="fa-solid fa-list-ul text-xl"></i>
                    </button>
                </Tooltip>
            </div>
            <hr />
            <div className='px-4 w-[90%] mx-auto mt-5'>
                <form onSubmit={handleUpdateProduct}>
                    <div className='w-full my-6'>
                        <label htmlFor="brandName"  className='block mb-3 dark:text-gray-100'>Name </label>
                        <InputText type="text" placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)} errormessages={errorMessages} name= "name"/>
                    </div>
                   
                    <div className='flex gap-3'>
                        {/* preview image lists */}
                        <div className='flex gap-3'>
                            {
                                filesWithPreview.map((fileWithPreview,i)=>(
                                    fileWithPreview.file.type.startsWith('image')&&(
                                        <FileListsPreview
                                            key={i}
                                            image={fileWithPreview.previewUrl}
                                            onClick = {()=>setFilesWithPreview(filesWithPreview.filter((f,index) => index!== i))}
                                        />
                                    )
                                ))
                            }
                             {
                                images.map((image,i)=>(
                                    <FileListsPreview 
                                        key={i}
                                        image={image.imageUrl}
                                        onClick={()=>setImages(images.filter((f,index)=> index !== i))}
                                    />
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
                                    
                                     

                                    }} errormessages={errorMessages} name="images"
                                />
                        
                        </div>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor=""  className='block mb-3 dark:text-gray-100'>Price</label>
                        <InputText type="text" placeholder='Enter price' value={price} onChange={(e)=>setPrice(e.target.value)} errormessages={errorMessages} name= "price"/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor=""  className='block mb-3 dark:text-gray-100'>Discount Percent (%)</label>
                        <InputText type='number' placeholder='Discount Percent(%)' value={discountPercent} onChange={(e)=>setDiscountPercent(e.target.value)} errormessages={errorMessages}/>
                    </div>

                    <div className='w-full my-6'>
                        <label htmlFor=""  className='block mb-3 dark:text-gray-100'>Description</label>
                       <TextArea placeholder='Enter description' value={description}  onChange={(e)=>setDescription(e.target.value)} errormessages={errorMessages} name='description'/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor=""  className='block mb-3 dark:text-gray-100'>Select Brand</label>
                        {
                            brands.length>0 && brand.length>0 && (
                                <SelectText options={optionsBrands} errormessages={errorMessages} onChange={(e)=>{
                                    const existBrand:BrandType | undefined =  brands.find((b)=> b._id === e.target.value)
                                    if(existBrand){
                                        setBrand([existBrand])
                                    }
                                }} name="brand" />
                            )
                        }
                        
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor=""  className='block mb-3 dark:text-gray-100'>Select Category</label>
                        {
                            categories.length>0 && category.length>0 && (
                                <SelectText options={optionsCategories} errormessages={errorMessages} onChange={(e)=>{
                                    const existCategory:CategoryType | undefined =  categories.find((b)=> b._id === e.target.value)
                                    if(existCategory){
                                        setCategory([existCategory])
                                    }
                                }} name="brand" />
                            )
                        }
                       
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor=""  className='block mb-3 dark:text-gray-100'>Stocks</label>
                        <InputText type="number" placeholder='Number of Stock' value={stock} onChange={(e)=>setStock(e.target.value)} errormessages={errorMessages} name= "stock" />

                    </div>

                    <div className='w-full my-6'>
                        <label htmlFor=""  className='block mb-3 dark:text-gray-100'> Size</label>
                        <div className='flex items-center'>
                            <div className='w-[25%]'>
                                <InputText type='text' placeholder='Add Size' value={chooseSize} onChange={(e)=>setChooseSize(e.target.value)}  errormessages={errorMessages} name="sizes"/>
                            </div>
                            <Tooltip tooltipsText='Add size' position='top'>
                                <div onClick={()=>{
                                    setChooseSize("")
                                    setSizes([...sizes,chooseSize])
                                }} className='mx-3 cursor-pointer bg-amber-500 shadow-lg rounded-full px-3 py-2 text-amber-500  transition duration-300'>
                                    <i className="fa-solid fa-circle-plus text-2xl text-white"></i>
                                </div>
                            </Tooltip>
                            {
                                sizes.length > 0 && sizes.map((size,i)=>(
                                    <div className='relative inline bg-gray-300 p-2 mx-2  rounded  text-gray-600' key={i}>
                                        {size}
                                        <div className='absolute -top-3 -right-2 cursor-pointer' 
                                            onClick={()=>setSizes(sizes.filter((s)=>s!==size))}
                                         >
                                                <i className="fa-solid fa-circle-xmark text-gray-400 text-xl"></i>
                                         </div>
                                    </div>
                                ))
                            }
                    </div>
                    </div>

                    {/* <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-4'>Color</label>
                        <div className='flex items-center'>
                            <div className='w-[25%]'>
                                <InputText type='text' placeholder='Add Color' value={chooseColor} onChange={(e)=>setChooseColor(e.target.value)}  errormessages={errorMessages} name="colors"/>
                            </div>
                            <Tooltip tooltipsText='Add Color' position='top'>
                                <div onClick={()=>{
                                    setChooseColor("")
                                    setColors([...colors,chooseColor])
                                }} className='mx-3 cursor-pointer bg-amber-500 shadow-lg rounded-full px-3 py-2 text-amber-500  transition duration-300'>
                                    <i className="fa-solid fa-circle-plus text-2xl text-white"></i>
                                </div>
                            </Tooltip>
                            {
                                colors.length > 0 && colors.map((color,i)=>(
                                    <div className='relative inline p-2 mx-1  rounded  text-gray-600' key={i}>
                                        <div className={`w-[30px] h-[30px] rounded`} style={{backgroundColor:`${color}`}}></div>
                                        <div className='absolute -top-2 -right-1 cursor-pointer' 
                                            onClick={()=>setColors(colors.filter((c)=>c!==color))}
                                         >
                                                <i className="fa-solid fa-circle-xmark text-gray-400 text-xl"></i>
                                         </div>
                                    </div>
                                ))
                            }
                    </div>
                    </div> */}
                    
                    <div className='w-full'>
                         <input checked={isNew} onChange={()=>setIsNew(!isNew)} type="checkbox" className='mr-2'/><label htmlFor="" className='text-lg dark:text-gray-100'>Is new?</label>
                    </div>
                    <div className='w-[100%] mt-5'>
                        <button  className='mt-3 bg-amber-500  px-5 rounded-md py-4 shadow-lg  text-dark transition all duration-300 w-full hover:text-white'>
                        {
                            loading ?
                            <AnimatePlus bgColor='bg-amber-100' />
                            :(
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

export default EditProduct