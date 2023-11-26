import express from 'express'
import {deleteOrder, getOrders, getOrdersByCustomerId, selectedOrderDelete} from '../controllers/orderController'
import { adminOnly, protect } from '../middleware/authHandler';
const router = express.Router();

router.get("/",adminOnly,getOrders)
router.get("/customerId",protect,getOrdersByCustomerId)
router.delete("/:id",adminOnly,deleteOrder);
router.post("/deleteSelectedItems",adminOnly,selectedOrderDelete)
export default router