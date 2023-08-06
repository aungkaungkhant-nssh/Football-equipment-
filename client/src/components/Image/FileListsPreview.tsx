import React from 'react'

type FileWithPreviewType = {
    file:File,
    previewUrl:string
}
type PropType = {
    image:string,
    onClick:()=>void
    // setFilesWithPreview:(value:FileWithPreviewType[])=>void
}
const FileListsPreview = ({image,onClick}:PropType) => {
  return (
    <>
        {
          
            <div className='relative'>
                <div className='absolute top-1 right-1 cursor-pointer' 
                // onClick={()=>{
                //     // setFilesWithPreview(filesWithPreview.filter((f,index) => index!== i))
                    
                // }}
                onClick={onClick}
                >
                        <i className="fa-solid fa-circle-xmark text-amber-500 text-xl"></i>
                </div>
                <img  src={image} alt="" className='w-[130px] h-[100px]' />
            </div>
                    
                
        }
    </>
  )
}

export default FileListsPreview