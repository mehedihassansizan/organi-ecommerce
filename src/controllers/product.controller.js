import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addProduct = asyncHandler(async(req, res) => {
    const {productTitle, price, category, description, image} = req.body;
    
    // const existedCategory = await Category.findOne({_id: category})
    // if(!existedCategory){
    //     throw new ApiError(401, "Category not found")
    // }

    const product = await Product.create({
        productTitle,
        price,
        category,
        description,
        image
    });
    
    if (!product) {
        throw new ApiError(404, "Product not created")
    }

    return res
    .status(200)
    .json(new ApiResponse("200", product, "successfully product created"))

});

const viewProduct = asyncHandler(async(req, res) => {
    const allProducts = await Product.find().populate('category')
    
    if(!allProducts){
        throw new ApiError(404, "Products not found")
    }

    return res
    .status(200)
    .json(new ApiResponse("200", allProducts, "Successfully fetched all products"))

});

export { addProduct, viewProduct };

