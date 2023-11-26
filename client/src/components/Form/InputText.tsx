import React, { CSSProperties, InputHTMLAttributes, Ref, RefObject, forwardRef, useState } from 'react'

interface PropType{
    
    value?:any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    errormessages:[],
    name?:string,
    placeholder?:string,
    type:string,
    mutiple?:boolean,
    ref?:RefObject<HTMLInputElement>,
    style?:CSSProperties,
    passwordIndicator?:boolean,
    disabled?:boolean
}


const InputText = forwardRef((props: PropType, ref: Ref<HTMLInputElement>)=> {
    const hasError:any = props.errormessages.find((e:any)=>e.path === props.name)

    const {type,disabled,...restProps} = props; // remove type form props;
   
    const [inputType,setInputType] = useState<string>(type);
    const [showPassword,setShowPassword] = useState<boolean>(false);
  return (
    <>  
      <div  className={`mb-1  ${props.type==="file" && 'hidden'}  border border-gray-200 ${props.errormessages.length> 0 && props.errormessages.find((e:any)=>e.path===props.name) && 'border-red-500'}  px-3 py-4  w-full focus:outline-amber-200 text-gray-500 rounded relative`}>
        
        <input   {...(inputType === 'number' ? { min: '1' } : {})} disabled={disabled ? true : false} type={inputType} {...restProps} ref={ref}   multiple={props.type==="file" ? true :undefined} className='w-full border-none outline-none border-none  bg-inherit'/>
          
          {
                props.passwordIndicator && (
                <span className='absolute right-10 cursor-pointer' onClick={()=>{
                  setShowPassword(!showPassword);
                  setInputType(inputType==="password" ? "text" : "password")
                }} >
                    <i className={`${!showPassword ? "fa-solid fa-eye" : "fa-regular fa-eye-slash" }  text-xl hover:text-amber-500 transition duration-300`}></i>
                </span>
              )
          }
              
        </div>
          {
                  props.errormessages.find((e:any)=>e.path=== props.name) && (
                          <span className='text-red-500 mt-5'>{hasError && hasError?.msg}</span>
                  )
          }
         
    </>
   
  )
})
export default InputText