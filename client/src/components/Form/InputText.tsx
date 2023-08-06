import React, { InputHTMLAttributes, Ref, RefObject, forwardRef } from 'react'

interface PropType{
    
    value?:any,
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    errormessages:[],
    name?:string,
    placeholder?:string,
    type:string,
    mutiple?:boolean,
    ref?:RefObject<HTMLInputElement>
}


const InputText = forwardRef((props: PropType, ref: Ref<HTMLInputElement>)=> {
    const hasError:any = props.errormessages.find((e:any)=>e.path === props.name)
  
  return (
    <>
          <input ref={ref} {...props}  multiple={props.type==="file" ? true :undefined}  className={`mb-1  ${props.type==="file" && 'hidden'}  border border-gray-200 ${props.errormessages.length> 0 && props.errormessages.find((e:any)=>e.path===props.name) && 'border-red-500'}  px-3 py-4  w-full focus:outline-amber-200 text-gray-500 rounded`}/>
          {
                props.errormessages.find((e:any)=>e.path=== props.name) && (
                        <span className='text-red-500 '>{hasError && hasError?.msg}</span>
                )
          }
    </>
  )
})
export default InputText