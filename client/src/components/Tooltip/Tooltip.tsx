import React, { ReactNode } from 'react'

interface propType  {
    position:string,
    tooltipsText:string
    children:ReactNode
}

const Tooltip = ({position,tooltipsText,children}:propType) => {
  return (
    <div className=''>
    <div className=''>
      <div className='group relative inline-block'>
      
          {children}
     
        <div
          className={` ${
            (position === 'right' &&
              `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
            (position === 'top' &&
              `absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
            (position === 'left' &&
              `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
            (position === 'bottom' &&
              `absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`)
          }`}
        >
          <span
            className={` ${
              (position === 'right' &&
                `absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black`) ||
              (position === 'top' &&
                `absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black`) ||
              (position === 'left' &&
                `absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black`) ||
              (position === 'bottom' &&
                `absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black`)
            } `}
          ></span>
          {tooltipsText}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tooltip