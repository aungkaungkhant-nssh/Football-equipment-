import mongoose,{Schema,InferSchemaType,model} from 'mongoose'


const orderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    phoneNumber:{
        type:String,
        required:true
    },
    totalAmount:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:0
    }
})

type Order =  InferSchemaType<typeof orderSchema>

export default model<Order>("Order",orderSchema)