import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Order = db.define('orders', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    address:{
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default Order;