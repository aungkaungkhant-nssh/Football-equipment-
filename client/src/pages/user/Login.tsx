import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import InputText from '../../components/Form/InputText';
import useAuth from '../../hook/useAuth';
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import { resetUserAuth, setUser, userLogin } from '../../features/Auth/authSlice';
import AnimatePlus from '../../components/Loading/AnimatePlus';
import { loadStripe } from '@stripe/stripe-js';
const stripeProimse= loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
import Axios from '../../Axios';
import useCart from '../../hook/useCart';


const Login = () => {
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const {errormessages,user,success,loading} = useAuth();
  const {carts} =useCart();
  const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect")? "/"+searchParams.get("redirect") :"/";
  const [checkoutLoading,setCheckOutLoading] = useState(false);


  useEffect(()=>{
    if(!success && user){
    return  navigate("/")
    }
    (
      async()=>{
        if(success){
          // when user clicked checkout button,but not login
          if(redirect !=="/"){
            try{
              setCheckOutLoading(true);
              const stripe =await stripeProimse
              //call the backend to create checkout session...
              const checkOutSession =  await Axios.post(`/api/checkout/create-checkout-session`,{items:carts,email:user?.email},{
                headers:{
                  Authorization:`Bearer ${user && user.token}`
                }
              })
              
              const result = await stripe?.redirectToCheckout({
                sessionId:checkOutSession.data.id
              })
            
              if(result?.error)alert(result.error.message)
         
            }catch(err){
              console.log(err);
            }finally{
              setCheckOutLoading(false);
              dispatch(resetUserAuth(''));
            }
            return;
          }
          navigate(redirect)
          dispatch(resetUserAuth(''));
        }
      }
    )()
   
    return ()=>{
      dispatch(resetUserAuth(""));
    }
  },[success,navigate]);

  useEffect(()=>{
    let name=searchParams.get("name")
    let email=searchParams.get("email")
    let token = searchParams.get("token");
  
    if(name && email && token){
        localStorage.setItem("token",token);
        const data = {name,email,token}
        localStorage.setItem("userInfo",JSON.stringify(data));
        dispatch(setUser(data))
        navigate("/")
    }
  },[])

 
  return (
    <section  className='my-10 px-4 max-w-screen-md mx-auto' style={{marginTop:"100px",marginBottom:"100px"}}>
      <div className='bg-white shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] px-8 py-8 rounded'>
        <div className='text-center  border border-white border-b-gray-200 pb-5'>
          <h3 className='uppercase text-3xl font-thin'>Account Login</h3>
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(userLogin({email,password}))
        }}>
            <div className='flex justify-between mt-8 md:items-center flex-col md:flex-row '>
            
            <div className='basis-full md:basis-1/2 mb-4 md:mb-0 mr-0 md:mr-5'>
                <label htmlFor="" className='block mb-2 font-thin'>Email *</label>
                <InputText type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'   errormessages={errormessages} name="email"/>
            </div>
            <div className='basis-full md:basis-1/2'>
                <label htmlFor="" className='block mb-2 font-thin'>Password *</label>
              
                <InputText passwordIndicator={true} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'   errormessages={errormessages} name="password"/>
            </div>
            </div>
            <div className='my-4'>
                <Link to="/forgotpassword" className='text-lg text-neutral-400 hover:text-amber-500 font-thin transition all  duration-300'>Forgot Password ?</Link>
            </div>
            <div className='flex flex-col justify-between md:items-center'>
              <button disabled={checkoutLoading || loading ? true:false} className='bg-amber-500 text-lg text-gray-100 rounded w-[100%] md:w-[60%] rounded-full py-3 hover:bg-amber-600 transition all duration-300'>
                {
                  checkoutLoading  || loading ? (
                    <AnimatePlus bgColor='bg-gray-200' />
                  ):(
                    "Sign In"
                  )
                }
              
              </button>
              <h6 className='my-2 text-center'>or</h6>
             <form action="http://localhost:8000/google" className='text-md border-gray-500 border rounded-ful  text-gray-900 rounded w-[100%] md:w-[60%]  rounded-full py-3 hover:bg-gray-200 transition all duration-300 uppercase text-center cursor-pointer'>
              <button className='w-full'>
                  <i className="fa-brands fa-google mr-3 text-lg"></i>
                  <span className=''>Login With Google</span>
                </button>
             </form>
             
              <h4 className='font-bold my-5 text-center'>Do you want new account?</h4>
                <Link to ="/register"  className='text-md border-gray-500 border rounded-ful  text-gray-900 rounded w-[100%] md:w-[60%]  rounded-full py-3 hover:bg-gray-200 transition all duration-300 uppercase text-center'>Create a new account</Link>
              </div>
        </form>
        
      </div>
    
    </section>
  )
}

export default Login