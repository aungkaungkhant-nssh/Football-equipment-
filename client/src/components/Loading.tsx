import React from 'react'
 
interface PropType  {
  bgColor:string
}
const Loading = ({bgColor}:PropType) => {
  return (
    <div className="flex  justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-amber-100"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-amber-100"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-amber-100"></div>
    </div>
    
  )
}

export default Loading