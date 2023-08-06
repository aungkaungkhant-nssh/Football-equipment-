import { InferSchemaType,model,Schema } from "mongoose";

const brandSchema = new Schema({
    name:{type:String,required:true},
    logo:{type:String,required:true}
})
type Brand = InferSchemaType<typeof brandSchema>;
export default model<Brand>("Brand",brandSchema)