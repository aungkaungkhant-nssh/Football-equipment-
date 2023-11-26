import {Schema,model,InferSchemaType} from 'mongoose'
import jwt from 'jsonwebtoken'
import env from '../util/validateEnv'

export interface ICustomer{
    _id?:string,
    name:string,
    email:string,
    password:string,
    provider:boolean,
    oAuthProvider:{
        provider:string,
        providerId:string,
    }
    resetToken?:string,
    resetTokenExpiry?:Date
}
export interface CustomerDocument extends ICustomer{
    generateToken:()=>Promise<void>
}
const customerSchema = new Schema<ICustomer>({
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
    },
    provider:{
        type:Boolean,
        default:false,
    },
    oAuthProvider:{
        provider:String,
        providerId:String,
    },
    resetToken:{
        type:String
    },
    resetTokenExpiry:{
        type:Date
    }
})

customerSchema.methods.generateToken =  async function(){
    return await jwt.sign({_id:this._id},env.JWT_KEY)
}


export default  model<CustomerDocument>("Customer",customerSchema)
