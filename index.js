import express from 'express';
import cors from 'cors';
import productRoute from './routes/productRoute.js';
import orderRoute from './routes/orderRoute.js';
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

// route
app.use(productRoute)
app.use(orderRoute)

app.get("/", (req,res) =>{
    res.send("Hello everyone we are group 20 team J section medan")
});

//database
import db from './config/database.js';
db.sync({ force: false }).then(() => {
    console.log('Database synchronized.');
  });

// port
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`server up and running on port ${port}.`)
});