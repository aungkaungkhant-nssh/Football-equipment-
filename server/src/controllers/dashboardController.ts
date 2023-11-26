
import { RequestHandler } from "express";
import Order from "../model/Order";
import Product from "../model/Product";
//@desc get all admin dashboard
//GET api/admin/dashboard
export const getAllDashboardData:RequestHandler = async(req,res)=>{
    try{
        let order =  await Order.aggregate([
            {
                $addFields: {
                  totalAmountNumber: {
                    $convert: {
                      input: {
                        $replaceAll: {
                          input: '$totalAmount',
                          find: ',',
                          replacement: '',
                        }
                      },
                      to: 'double',
                    }
                  }
                }
              },
            {
                $group:{
                    _id:null,
                    totalSales:{$sum:'$totalAmountNumber'},
                    count:{$sum:1}
                },
                
            },
        
        ])
        let product = await Product.aggregate([
       
          {
            $lookup:{
              from:"categories",
              localField:"category",
              foreignField:"_id",
              as:"categories"
            }
          },
          {
            $unwind:"$categories"
          },
          {
            $group:{
              _id:"$categories._id",
              categoryName:{$first:"$categories.name"},
              sallingTotalCategory:{$sum:1}
            }
          },
          
        ]);

        const orders = await Order.find().sort({_id:-1}).exec();
        res.status(200).send({order,product,orders})
    }catch(err){
        res.status(500).send("Something went wrong");
    }
}