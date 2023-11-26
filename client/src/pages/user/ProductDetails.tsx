import React,{useRef,useEffect, useState} from 'react'
import Add from '../../assets/images/add.jpg'
import Add2 from '../../assets/images/add2.jpg'
import ReactImgZoom from 'react-image-zoom'
import BreadCrumb from './BreadCrumb'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch } from '../../app/store'
import { useDispatch } from 'react-redux'
import { ProductType, createReview, fetchProduct, resetProduct } from '../../features/products/productSlice'
import useProduct from '../../hook/useProduct'
import Spinner from '../../components/Loading/Spinner'
import { addToCart } from '../../features/products/cartSlice'
import { addToWishList } from '../../features/products/wishListSlice'
import SelectText from '../../components/Form/SelectText'
import TextArea from '../../components/Form/TextArea'
import useAuth from '../../hook/useAuth'
import { formatDistance } from 'date-fns'
import Rating from '../../components/Rating'
import { thousandSeparator } from '../../helper/format'
import discountPrice from '../../helper/discountPrice'
const ProductDetails = () => {

  const {id} = useParams();
  const dispach:AppDispatch = useDispatch();
  const [product,setProudct] = useState<ProductType>();
  const {products,loading,success,errorMessages} = useProduct();
  const {user} = useAuth();
  const navigate = useNavigate();
  const [coverImage,setCoverImage] = useState("");
  const [chooseSize,setChooseSize] =  useState<string>("");
  const [rating,setRating] = useState<string>("1");
  const [comment,setComment] = useState<string>("");


  useEffect(()=>{
    if(id){
        dispach(fetchProduct(id))
        setProudct(products.find((product)=>product._id ===id))
    }
   
  },[id,navigate,products])
  useEffect(()=>{
    if(product && !coverImage){
        setCoverImage(product?.images[0].imageUrl)
    }
  },[product])

  useEffect(()=>{
    if(success) dispach(resetProduct(""))
  },[success])

  return (
    <section className='px-4 ' >
       
         <BreadCrumb items={[
                {name:"Home",path:"/"},
                {name:"Products",path:"/products"},
                {name:"Details",path:`/product_details/${id}`}
         ]} />
         
         <div className='mx-4'>
            {
                loading ? (
                    <div className='flex justify-center items-center w-full my-10'>
                        <Spinner />
                    </div>
                ):product && (
                    <>
                        <div className='flex flex-wrap mb-8 mt-8'>
                            <div className='basis-full md:basis-2/4'>
                                <div className='flex '>
                                    {/* all products images container */}
                                    <div className='max-h-[340px] overflow-y-scroll  cursor-pointer  basis-2/12 '>
                                            {
                                                product.images.map((image,index)=>(
                                                    <div className='border-2 border-gray-200 w-[90%]' key={index} onClick={()=>setCoverImage(image.imageUrl)}>
                                                        <img src={image.imageUrl} alt=""  />
                                                     </div>
                                                ))
                                            }
                                    </div>
                                    
                                    {/* single product image container */}
                                    <div className='mx-5  md:mx-10 basis-9/12'>
                                        <div className="hidden lg:block">
                                            <ReactImgZoom 
                                                    img={coverImage}
                                                    zoomScale={1.8}
                                                    width={350}
                                                    height={350}
                                                  />
                                   
                                        </div>
                                        <div className='block lg:hidden'>
                                            <img src={coverImage} alt="" style={{width:"300px",height:"250px"}} />
                                        </div>
                                    
                                    </div>
                                 
                                </div>
                            </div>
                         
                            <div className='basis-full md:basis-2/4 mt-8 md:mt-0'>
                                    <div>
                                        <h3 className='uppercase  text-amber-500 mb-4'>{product.brand[0].name}</h3>
                                        <h4 className='font-extrabold tracking-wider mb-3'>
                                            {product.name}
                                        </h4>
                                        <hr />
                                        <div className='my-4'>
                                            <div className='flex  '>
                                                {
                                                    product.discountPercent ? (
                                                        <div className='mr-4 flex'>
                                                            <p className='text-slate-700'>{thousandSeparator(discountPrice(+product.price,product.discountPercent))} ks</p>
                                                            <p className='ml-7 text-neutral-400 line-through '>{product.price} Ks</p>
                                                        </div>
                                                        
                                                    ):(
                                                        <p className='text-slate-700 mr-4'>{thousandSeparator(+product.price)} Ks</p>
                                                    )
                                                }
                                                <div className='flex items-center'>
                                                    {
                                                        product.stock>0 ?(
                                                            <>
                                                                <div className='bg-green-600 w-2 h-2 rounded-full'></div>
                                                                 <p className='mx-2 text-neutral-500 font-thin text-sm'>Available</p>
                                                            </>
                                                        ):(
                                                            <>
                                                                <div className='bg-red-600 w-2 h-2 rounded-full'></div>
                                                             <p className='mx-2 text-neutral-500 font-thin text-sm'>Unavailable</p>
                                                             </>
                                                        )
                                                    }
                                                    
                                                </div>
                                            </div>
                                        
                                            <div>
                                                <div className='flex items-center'>
                                                    <div className='my-4 text-amber-400'>
                                                           <Rating 
                                                           rating={product.rating || 0}
                                                            numReviews={0}
                                                           />
                                                    </div>
                                                    <p className='mx-2 text-neutral-500 font-thin'>
                                                        {
                                                            product.numReviews ? product.numReviews>0 ? (
                                                                `(${product.numReviews} reviews)`
                                                            ):(
                                                                `No reviews`
                                                            ):(`No reviews`)
                                                        }
                                                       
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className='cursor-pointer text-neutral-500'>
                                                        <p>Write Review</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='my-3'>
                                            <h3 className='mb-3'>Size <span className='text-amber-500'>(Please choose size)</span></h3>
                                            <div>
                                                <div className='flex items-center flex-wrap'>
                                                    {
                                                        product.sizes.map((size,index)=>(
                                                            <div onClick={()=>setChooseSize(size)} key={index} className={` ${chooseSize===size ? "bg-gray-300" : ""} border border-gray-300  w-[70px]  py-3 mx-1 cursor-pointer group hover:bg-gray-50 text-center`}>
                                                                <span className='text-gray-600 group-hover:text-amber-950'>{size}</span>
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                         
                                        </div>
                                        <hr />
                                        <div className='mt-3 flex items-center'>
                                            {
                                                product.stock > 0 && (
                                                <button  className={`bg-amber-500 text-white  py-3  rounded mr-3 w-[180px] ${!chooseSize ? "cursor-not-allowed" : "cursor-pointer"} `} onClick={()=>{
                                                    if(chooseSize)dispach(addToCart({...product,size:chooseSize}))
                                                }} >
                                                        <span className='ml-2'>Add To Cart</span>
                                                </button>       
                                                )
                                            }
                                         
                                            <button onClick={()=>dispach(addToWishList(product))} className='border-gray-400 border py-2 px-3 rounded hover:border-amber-500  transition duration-300 group'>
                                                <i className="fa-regular fa-heart text-xl text-gray-700 group-hover:text-amber-500 transition duration-300" ></i>
                                            </button>

                                        </div>
                                    </div>
                            </div>

                         </div>
                        <hr />
                        <div className='my-8'>
                            <h3 className='text-xl mb-3 font-bold tracking-wider'>Description</h3>
                            <div className='bg-gray-150 px-4'>
                                <p className='tracking-wide text-neutral-500 leading-6 font-thin text-sm'>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className='my-8'>
                            <h3 className='text-xl mb-8 font-bold tracking-wider'>Reviews</h3>
                            <div className='px-4'>
                                <div className='bg-gray-150  mb-4'>
                                    <ul className='list-none'>
                                            {
                                            product.reviews && product.reviews.length>0 && product.reviews.map((review)=>(
                                                <React.Fragment key={review?._id}>
                                                    <li  className='my-4'>
                                                        <div className='flex items-start'>
                                                            <div className='mr-5'>
                                                                <div className='flex justify-center items-center'>
                                                                    <div>
                                                                        <p className='mb-1 font-weight-bolder'>{review.name}</p>
                                                                        
                                                                        <Rating rating={review.rating} numReviews={0}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                            <div>
                                                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                            {review.createdAt && formatDistance(new Date(review.createdAt),new Date())}
                                                            </span>
                                                             
                                                            </div>
                                                        </div>
                                                        <p className='mt-3 text-gray-150'>
                                                            <span className='text-gray-150 font-bolder'>Comment - </span>
                                                            {review.comment}
                                                        </p>
                                                    </li>
                                                    <hr />
                                                </React.Fragment>
                                            ))
                                        }
                                    </ul>

                                
                                </div>
                                {
                                 user && product.reviews && product?.reviews.findIndex((r)=>r.name === user?.name) < 0  && (
                                    <div className='my-4'>
                                            <h3 className='text-lg font-medium mb-3'>Write a  Review</h3>  
                                            <div className='w-full'>
                                            
                                                    <div>
                                                        <TextArea 
                                                            value={comment}
                                                            onChange={(e)=>setComment(e.target.value)}
                                                            placeholder='Your Reviews'
                                                            errormessages={errorMessages}
                                                            name='comment'

                                                        /> 
                                                        
                                                    </div>  
                                                    <div className='mt-5'>
                                                        <SelectText 
                                                            options={[
                                                                {_id:"1",name:"1- Poor"},
                                                                {_id:"2",name:"2- Fair"},
                                                                {_id:"3",name:"3- Good"},
                                                                {_id:"4",name:"4- Very good"},
                                                                {_id:"5",name:"5- Excelent"},
                                                            ]} 
                                                            errormessages={[]} 
                                                            name="" 
                                                            onChange={(e)=>setRating(e.target.value)} 

                                                        />
                                                    
                                                    </div>
                                                    <div className='flex justify-end my-5'>
                                                        <button   className='bg-amber-500 px-4 py-2 rounded-full text-gray-100 hover:bg-slate-700 transition duration-300'
                                                        onClick={()=> dispach(createReview({id,comment,rating:+rating}))}
                                                        >Submit Reviews</button>
                                                    </div>  
        
                                            </div>  
                                     </div>
                                    )
                                }
                              
                            </div>
                        
                        </div>
                    
                    </>
                )
            }
          
         </div>
      
    </section>
  )
}

export default ProductDetails