
import express from 'express';
import { 
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts,
    getProductsById,
 } from '../controllers/productController.js';

const router = express.Router();

router.get('/product', getProducts);
router.get('/product/:id', getProductsById);
router.post('/product', createProducts);
router.put('/product/:id', updateProducts);
router.delete('/product/:id', deleteProducts);

export default router;
