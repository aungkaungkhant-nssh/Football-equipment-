import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
type itemType = {
    path:string,
    name:string
}
type propType={
    items:itemType[]
}
const BreadCrumb = ({items}:propType) => {
  const loacation = useLocation();
  return (
    <div className='w-full my-3'>
        <div className='bg-gray-100 p-3 rounded shadow'>
            <div className='flex'>
                {
                    items.map((item,i)=>(
                        <Link key={i} to={item.path} className={`${item.path===location.pathname ? "text-gray-900" : "text-gray-400" }  font-thin`}><span className='px-1'>{item.name} </span> <span className={`${i === items.length-1 ? "hidden" : "inline"}`}>/</span></Link>
                    ))
                }
             
                
            
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb