import {Schema,model,InferSchemaType} from 'mongoose'
import jwt from 'jsonwebtoken'
import env from '../util/validateEnv'

interface ICustomer{
    name:string,
    email:string,
    password:string
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
        required:true
    }
})

customerSchema.methods.generateToken =  async function(){
    return await jwt.sign({_id:this._id},env.JWT_KEY)
}


export default  model<CustomerDocument>("Customer",customerSchema)
