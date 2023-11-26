export const productPipeLines = [
    {
        $lookup:{
            from:"products",
            localField:"product._id",
            foreignField:"_id",
            as:"orderData",
          
        }
    },
    
    {
        $lookup:{
            from:"customer",
            localField:"customerId",
            foreignField:"_id",
            as:"customers"
        }
    }
]

