import {InferSchemaType, Schema, model} from 'mongoose'

const productSchema = new Schema({
    name:{type:String,required:true},
    stock:{type:Number,default:1},
    images:[{type:String,required:true}],
    price:{type:String,required:true},
    description:{type:String,required:true},
    brand:{type:Schema.Types.ObjectId,ref:"Brand"},
    category:{
        type:Schema.Types.ObjectId,ref:"Category"
    },
    sizes:[{type:String,required:true}],
    colors:[{type:String,required:true}]
})

export type Product = InferSchemaType<typeof productSchema>
export default model<Product>("Product",productSchema)