import mongoose, { Schema, model, models } from "mongoose";
import { ICategory } from "../schemas/category.schema";


const CategorySchema = new Schema<ICategory>({
   name:{type:String,required:true,unique:true}
});


const Category = models.Category || model("Category",CategorySchema);

export default Category;