import { RequestHandler } from "express";
import env from '../util/validateEnv';
const stripe = require("stripe")(env.STRIPE_SECRET_KEY);
export const createPayment:RequestHandler = async(req,res)=>{


   const {items,email} = req.body;
   const transformItems = items.map((item:any)=>(
    {
      price_data:{
        currency:'MMK',
        unit_amount:item.price *100,
        product_data:{
      
          name:item.name,
          description:item.description,
          images:[item.images[0].imageUrl]
        }
      },
      quantity:item.qty
  }
   ))


    const session = await stripe.checkout.sessions.create({
          shipping_address_collection: { allowed_countries: ["MM"] },
          phone_number_collection:{
            enabled:true
          },
         
          line_items: transformItems,
          mode: 'payment',
          success_url: 'http://localhost:5173/order_complete',
          cancel_url: 'http://localhost:5173/carts',
          metadata:{
            customerId:JSON.stringify(res.locals.customer._id),
            product:JSON.stringify(items.map((item:any)=> {
              return {_id:item._id,size:item.size,quantity:item.qty}
            }))
          }
    })
   res.status(200).json({id:session.id})
}