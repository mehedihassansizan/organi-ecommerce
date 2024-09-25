import { Router } from "express";
import { addProduct, viewProduct } from "../controllers/product.controller.js";

const router = Router();

router.route("/add-product").post(addProduct);
router.route("/view-product").get(viewProduct);

export default router;