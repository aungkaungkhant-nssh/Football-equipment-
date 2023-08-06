import { Schema ,model,InferSchemaType} from "mongoose";

const categorySchema = new Schema ({
    name:{type:String,required:true}
})
type Category  = InferSchemaType<typeof categorySchema>

export default model<Category>("Category",categorySchema)