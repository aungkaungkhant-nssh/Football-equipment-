import mongoose,{Schema,InferSchemaType,model} from 'mongoose'


const orderSchema = new Schema({
   customerId:{
      type:Schema.Types.ObjectId,ref:"Customer",
      required:true
   },
   product:[
      {
         _id:{type:Schema.Types.ObjectId,ref:"Product"},
         size:{type:String},
         quantity:{type:Number}
      }
   ],
   name:{
    type:String
   },
   email:{
    type:String,
   },
   phone:{
      type:String
   },
   totalAmount:{
    type:String,
    required:true
   },
   city:{
    type:String,
    required:true
   },

   town:{
    type:String,
    required:true
   },
   postalCode:{
    type:String,
   }, 
  
},{
   timestamps:true,
   get: (time:any) => time.toDateString()
})

type Order =  InferSchemaType<typeof orderSchema>

export default model<Order>("Order",orderSchema)