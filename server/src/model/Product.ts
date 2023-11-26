import {InferSchemaType, Schema, model} from 'mongoose'
const reviewSchema = new Schema({
    name:{type:String},
    comment:{type:String},
    rating:{type:Number}
},{timestamps:true})


const productSchema = new Schema({
    name:{type:String,required:true},
    stock:{type:Number,default:1},
    discountPercent:{
        type:Number,
        
    },
    
    images:[
        {
            public_id:{type:String,required:true},
            imageUrl:{type:String,required:true}
        }
    ],
    price:{type:String,required:true},
    description:{type:String,required:true},
    brand:{type:Schema.Types.ObjectId,ref:"Brand"},
    category:{
        type:Schema.Types.ObjectId,ref:"Category"
    },
    sizes:[{type:String,required:true}],
    colors:[{type:String}],
    isNew:{type:Boolean},
    reviews:[reviewSchema],
    numReviews:Number,
    rating:Number,
    sold:{
        type:Number,
        default:0
    }
})

export type Product = InferSchemaType<typeof productSchema>
export default model<Product>("Product",productSchema)