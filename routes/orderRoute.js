import express from 'express';
import { 
    addToOrder,
    viewOrder,
    placeOrder,
    viewOrderDetail
 } from '../controllers/orderController.js';

const router = express.Router();

router.post('/add-to-order', addToOrder);
router.get('/view-order/:orderId', viewOrder);
router.post('/place-order', placeOrder);
router.get('/view-order-detail/:orderId', viewOrderDetail);

export default  router;