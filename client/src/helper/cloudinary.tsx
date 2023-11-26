import axios from "axios";
import { ImageType } from "../features/products/productSlice";
import CryptoJS from 'crypto-js'
export const destroy = (image:ImageType)=>{
    const formData = new FormData();
    const timestamp = Math.floor(Date.now() / 1000);
    const cryptoData = `public_id=${image.public_id}&timestamp=${timestamp}GTc1rDOnTJNvuGhFOet8mQqyXR4`
    const signature = CryptoJS.SHA1(cryptoData).toString();
    
    formData.append('public_id', image.public_id)
    formData.append('signature', signature)
    formData.append('api_key', "155384521176819")
    formData.append('timestamp', timestamp.toString())
    
    axios.post(`https://api.cloudinary.com/v1_1/dqlplxvtx/image/destroy`,formData)
    .then((data:any)=> data)
    .catch((err:any)=>console.log(err))
}

const cloudinary = {
    destroy
}
export default cloudinary