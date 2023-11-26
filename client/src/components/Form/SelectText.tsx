import React, { ChangeEvent } from 'react'
import { CategoryType } from '../../features/categories/categorySlice'

interface PropsType{
    options:any
    onChange:(e:ChangeEvent<HTMLSelectElement>)=>void,
    errormessages:[],
    name:string
}

const SelectText = ({options,onChange,errormessages,name}:PropsType) => {

  return (
    <>
        <select  onChange={onChange} className={`mb-1   border border-gray-200 ${errormessages.find((e:any)=>e.path===name) && 'border-red-500'}  px-3 py-4  w-full focus:outline-amber-200 text-gray-500 rounded`}>
                {
                    options.length > 0 && (
                        options.map((c:any)=>(
                            <option value={c._id} key={c._id}>{c.name}</option>
                        ))
                    )
                }
        </select>
        {
            errormessages.find((e:any)=>e.path===name) && (
                    <span className='text-red-500 '>Category field is required</span>
            )
        }
    </>
  )
}

export default SelectText