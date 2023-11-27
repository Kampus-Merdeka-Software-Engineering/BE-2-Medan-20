import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Product = db.define('products', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: true,
    },
});

export default Product;