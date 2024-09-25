import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        title:{
            type: String,
            required: true 
        },
        image:{
            type: String,
            required: true  
        }
    },
    {timestamps: true}
);

export const Category = mongoose.model('Category', categorySchema);