import mongoose,{Document,Schema} from 'mongoose'
import jwt from 'jsonwebtoken'
import env from '../util/validateEnv'
export interface IAdmin{
    name:string,
    email:string,
    password:string
}
export interface AdminDocument extends IAdmin,Document{
    generateToken:()=>Promise<void>
}
const adminShema = new Schema<AdminDocument>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
adminShema.methods.generateToken =async function(){
    return await jwt.sign({_id:this._id},env.JWT_KEY)
}
export default mongoose.model<AdminDocument>("Admin",adminShema)
