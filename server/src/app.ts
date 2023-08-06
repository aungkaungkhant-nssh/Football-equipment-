import express from 'express'
import bodyParser from 'body-parser'
import brandRoute from './routes/brand'
import categoryRoute from './routes/category'
import productRoute from './routes/product'
import customerRoute from './routes/customer'
import adminRoute from './routes/admin'
import orderRoute from './routes/order'
import cors from 'cors'
import "dotenv/config"
const app = express();

app.use(cors())

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/api/admin/brand",brandRoute)
app.use("/api/admin/category",categoryRoute)
app.use("/api/admin/product",productRoute)
app.use("/api/customer",customerRoute)
app.use("/api/admin/auth",adminRoute)
app.use("/api/order",orderRoute)
export default app