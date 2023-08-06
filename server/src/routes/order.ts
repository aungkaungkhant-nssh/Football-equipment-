import express from 'express'
import {createOrder, deleteOrder, getOrders, selectedOrderDelete} from '../controllers/orderController'
import { protect } from '../middleware/authHandler';
const router = express.Router();

router.post("/",protect,createOrder);
router.get("/",getOrders)
router.delete("/:id",deleteOrder);
router.post("/deleteSelectedItems",selectedOrderDelete)
export default router