import React from 'react'

interface propType{
    rating:number,
    numReviews:number
}
function Rating({rating,numReviews}:propType) {
  return (
    <>
        <span className='text-warning mr-1 text-amber-400'>
            {
                rating >=1 
                ?<i className="fa-solid fa-star"></i>
                : rating >=1.5
                ?<i className="fa-solid fa-star-half"></i>
                :<i className="fa-regular fa-star"></i>
            }
        </span>
        <span className='text-warning mr-1 text-amber-400'>
            {
                rating >=2 
                ?<i className="fa-solid fa-star"></i>
                : rating >=2.5
                ?<i className="fa-solid fa-star-half"></i>
                :<i className="fa-regular fa-star"></i>
            }
        </span>
        <span className='text-warning mr-1 text-amber-400'>
            {
                rating >=3 
                ?<i className="fa-solid fa-star"></i>
                : rating >=3.5
                ?<i className="fa-solid fa-star-half"></i>
                :<i className="fa-regular fa-star"></i>
            }
        </span>
        <span className='text-warning mr-1 text-amber-400'>
            {
                rating >=4 
                ?<i className="fa-solid fa-star"></i>
                : rating >=4.5
                ?<i className="fa-solid fa-star-half"></i>
                :<i className="fa-regular fa-star"></i>
            }
        </span>
        <span className='text-warning mr-2 text-amber-400'>
            {
                rating >=5 
                ?<i className="fa-solid fa-star"></i>
                : rating >=5.5
                ?<i className="fa-solid fa-star-half"></i>
                :<i className="fa-regular fa-star"></i>
            }
        </span>
        <span className='text-gray-150'>

            {numReviews>0 &&  (`(${numReviews} reviews)`)}
        </span>
    </>
  )
}

export default Rating
