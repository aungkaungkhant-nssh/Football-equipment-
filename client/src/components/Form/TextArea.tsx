import React from 'react'

interface PropType{
    value?:string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    errormessages:[],
    name?:string,
    placeholder:string
}

const TextArea = ({value,onChange,errormessages,name,placeholder}:PropType) => {
    const hasError:any = errormessages.find((e:any)=>e.path === name)
 
  return (
    <>
          <textarea   value={value} onChange={onChange}   placeholder={placeholder} className={`mb-1   border border-gray-200 ${errormessages.length> 0 && errormessages.find((e:any)=>e.path===name) && 'border-red-500'}  px-3 py-4  w-full focus:outline-amber-200 text-gray-500 rounded`}/>
          {
                errormessages.find((e:any)=>e.path=== name) && (
                        <span className='text-red-500 '>{hasError && hasError?.msg}</span>
                )
          }
    </>
  )
}

export default TextArea