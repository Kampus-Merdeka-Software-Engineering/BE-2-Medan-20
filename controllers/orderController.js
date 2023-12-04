import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";
import OrderDetail from "../models/orderDetailModel.js";

export const addToOrder = async(req, res) =>{
    const { productId, quantity, name = null, phone = null, address = null } = req.body;

  try {
    const order = await Order.create({ name, phone, address });
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const orderItem = await OrderDetail.create({
      orderId: order.id,
      productId,
      quantity,
      total_price: product.price * quantity,
    });

    res.status(201).json({ message: 'Product added to order successfully', orderItemId: orderItem.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const viewOrder = async(req, res) =>{
    try {
    const orderId = req.params.orderId;

    const orderItems = await OrderDetail.findOne({
      where: { orderId },
      include: [{ model: Product, attributes: ['name', 'price'] }],
      attributes: ['quantity', 'total_price'],
    });

    res.json({ orderItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const placeOrder = async(req, res) =>{
    const { orderId, name, phone, address } = req.body;

  try {
    const orderItems = await OrderDetail.findOne({ where: { orderId } });
    if (orderItems.length === 0) {
      return res.status(400).json({ message: 'Order is empty' });
    }

    await Order.update({ name, phone, address, isCompleted: true }, { where: { id: orderId } });

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const viewOrderDetail = async(req, res) => {
    try {
        const orderId = req.params.orderId;
    
        const orderDetails = await OrderDetail.findOne({
          where: { orderId },
          attributes:['total_price'],
          include: [
            {
              model: Order,
              attributes: ['name', 'phone', 'address'],
            },
            {
              model: Product,
              attributes: ['name', 'price'],
            },
          ],
        });
    
        if (orderDetails.length === 0) {
          return res.status(404).json({ message: 'Order details not found' });
        }
    
        res.json(orderDetails);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}