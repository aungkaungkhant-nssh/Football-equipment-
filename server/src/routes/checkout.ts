import express from 'express'
import bodyParser from 'body-parser';
import { createPayment } from '../controllers/PaymentController';
import { web_hook } from '../controllers/webHookController';
import { protect } from '../middleware/authHandler';
const router= express.Router();

router.post("/create-checkout-session",protect,createPayment)
router.post("/webhook",express.raw({type: 'application/json'}),web_hook)
export default router;