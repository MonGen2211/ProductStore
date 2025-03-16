import Product from "../model/product.model.js";
import mongoose from "mongoose";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, products: products });
  } catch (error) {
    res.status(403).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    res.status(404).json({ success: false, message: "Please fill full data" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(200).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    res.status(403).json({ success: false, message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)
      .json({ success: false, message: "Database not have this id" });
  }

  try {
    const data = req.body;
    const updatePrdouct = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatePrdouct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)
      .json({ success: false, message: "Database not have this id" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product is deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
