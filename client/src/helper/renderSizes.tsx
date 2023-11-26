import React from 'react'
import { ProductType } from '../features/products/productSlice'



const renderSizes = (products:ProductType[],chooseCategoryId:string,flatData:string):any => {
  type ObjectKey = keyof ProductType
  const flatD = flatData as ObjectKey;

  return products.length > 0 ? [...new Set( products.filter((p)=> p.category[0]._id === chooseCategoryId).map((p)=> p[flatD]).flat() )]: []
}

export default renderSizes