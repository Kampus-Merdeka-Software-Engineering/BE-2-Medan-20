import express from 'express';
import { 
    addToOrder,
    viewOrder,
    placeOrder,
 } from '../controllers/orderController.js';

const router = express.Router();

router.post('/add-to-order', addToOrder);
router.get('/view-order', viewOrder);
router.post('/place-order', placeOrder);

export default  router;