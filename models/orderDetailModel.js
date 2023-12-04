import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Order from "./orderModel.js";
import Product from "./productModel.js";

const {DataTypes} = Sequelize;

const OrderDetail = db.define('orderDetails', {
    orderId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    productId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    total_price:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

OrderDetail.belongsTo(Order, { foreignKey: 'orderId' });
OrderDetail.belongsTo(Product, { foreignKey: 'productId' });

export default OrderDetail;