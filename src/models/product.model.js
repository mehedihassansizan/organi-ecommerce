import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        productTitle: {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        category:{
            type: Schema.Types.ObjectId,
            ref: "Category"
        },
        description:{
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

export const product = mongoose.model('Product', productSchema);