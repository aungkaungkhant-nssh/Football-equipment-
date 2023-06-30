import React,{useState} from 'react'

type propsType = {
    isRefineOpen:boolean,
    setIsRefineOpen:(isSortOpen:boolean)=>void
}
const Refine = ({isRefineOpen,setIsRefineOpen}:propsType) => {
    const [showBrands,setShowBrands] = useState<boolean>(false)
  return (
    <div className='relative block lg:hidden  '>
        <div className={`drawer overflow-y-scroll   fixed top-0 right-0 w-screen  h-screen z-50 transform  ease-in-out transition-all duration-300 ${isRefineOpen ? 'translate-x-0' : 'translate-x-[1000px]'} bg-gray-100`}>
            <div className='sticky top-0 left-0 right-0 bg-white px-6 py-4 flex items-center justify-between'>
                <h3 className='text-2xl'>Refine</h3>
                <button onClick={()=>setIsRefineOpen(!isRefineOpen)}>
                    <i className="fa-solid fa-xmark text-3xl text-gray-500"></i>
                </button>
            </div>
            <div className='px-6 py-4'>
                <div className='mb-3 border border-transparent border-b-gray-300 py-4'>
                    <div className='flex items-center justify-between mb-4' onClick={()=>setShowBrands(!showBrands)}>
                        <p className='font-bolder'>Brand</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={showBrands ? 'block': 'hidden'} >
                            <ul className='bg-white px-4 py-3 rounded'>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                            </ul>
                         </div>
                </div>
            
                <div className='mb-3 border border-transparent border-b-gray-300 py-4'>
                    <div className='flex items-center justify-between mb-4' onClick={()=>setShowBrands(!showBrands)}>
                        <p className='font-bolder'>Brand</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={showBrands ? 'block': 'hidden'} >
                            <ul className='bg-white px-4 py-3 rounded'>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                            </ul>
                         </div>
                </div>
                <div className='mb-3'>
                    <div className='flex items-center justify-between mb-4' onClick={()=>setShowBrands(!showBrands)}>
                        <p className='font-bolder'>Brand</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={showBrands ? 'block': 'hidden'} >
                            <ul className='bg-white px-4 py-3 rounded'>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                                <li className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                      
                                    <span className='ml-2 text-sm text-neutral-500 font-thin'>adidas</span>
                                    <span className='text-xs text-neutral-500 font-thin'>(44)</span>
                                </li>
                            </ul>
                         </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Refine