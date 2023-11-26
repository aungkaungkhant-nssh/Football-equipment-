import React from 'react'
interface PropType  {
    bgColor:string
  }
const AnimatePlus = ({bgColor}:PropType) => {
  return (
    <div className="flex  justify-center space-x-2 my-2">
        <div className={`w-3 h-3 rounded-full animate-pulse ${bgColor}`}></div>
        <div className={`w-3 h-3 rounded-full animate-pulse ${bgColor}`}></div>
        <div className={`w-3 h-3 rounded-full animate-pulse ${bgColor}`}></div>
    </div>
  )
}

export default AnimatePlus