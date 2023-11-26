import { RequestHandler } from "express";
import env from '../util/validateEnv';
import Order from "../model/Order";
import mongoose from "mongoose";
import Product from "../model/Product";
const stripe = require("stripe")(env.STRIPE_SECRET_KEY);
const endpointSecret = env.STRIPE_SINGNING_SECRET;


const fullFail_Order = async(session:any)=>{
    
    const product = JSON.parse(session.metadata.product).map((item:any)=> {
        
        return {_id:new mongoose.Types.ObjectId(item._id),size:item.size,quantity:item.quantity}
      })
    const totalAmount = (session.amount_total / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    product.map(async(p:any)=>(
        await Product.findByIdAndUpdate(p._id,{
            $inc:{stock:-p.quantity,sold:p.quantity},
          
        })
    ))
    const order = new Order({
        customerId : JSON.parse(session.metadata.customerId),
        name:session.customer_details.name,
        email:session.customer_details.email,
        phone:session.customer_details.phone,
        totalAmount,
        city:session.customer_details.address.line1,
        town:session.customer_details.address.city,
        postalCode:session.customer_details.address.postal_code,
        product
    })
    await order.save();
}


export const web_hook:RequestHandler = async(req,res)=>{

        let event=req.body;
        try{
            if(endpointSecret){
                const payload = (req as any).rawBody || req.body;
                const sign=  req.headers["stripe-signature"];
                event =  stripe.webhooks.constructEvent(payload,sign,endpointSecret)
            }   
            if(event.type === "checkout.session.completed"){
                const session = event.data.object;
                 fullFail_Order(session)
                 res.status(200).end()
            }
        }catch(err){
            res.status(500).end()
        }
}