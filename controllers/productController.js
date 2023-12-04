import Product from "../models/productModel.js";

export const getProducts = async(req, res) =>{
    try {
        const respons = await Product.findAll();
        res.status(200).json(respons);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getProductsById = async(req, res) =>{
    try {
        const respons = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(respons);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const createProducts = async(req, res) =>{
    const {name, price} = req.body;

    try {
        const product = await Product.create({
            name: name,
            price: price
        })
        res.status(201).json({msg: 'Product Created Successfully',  productId: product.id});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const updateProducts = async(req, res) =>{
    const {name, price} = req.body;

    try {
        await Product.update({
            name: name,
            price: price
        },{
            where: req.params.id
        })
        res.status(200).json({msg: 'Product Updated Successfully'});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const deleteProducts = async(req, res) =>{
    try {
        await Product.destroy({
            where: req.params.id
        })
        res.status(200).json({msg: 'Product Deleted Successfully'});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}