import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
import { Line,Pie } from "react-chartjs-2";
import { fetchLatestDashboardData } from '../../features/dashboard/dashboardSlice';
import useDashboard from '../../hook/useDashboard';
import { thousandSeparator } from '../../helper/format';
import Spinner from '../../components/Loading/Spinner';
import { getDayMonthAndYear } from '../../helper/dateFun';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Revenue & Order',
        font:{
            size:18,
            
        }
      },
    },
  };
  
  const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',"Aug","Sept","Oct","Nov","Dec"];
  
 

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
       
      },
      title: {
        padding:{
            top:10,
            bottom:10
        },
        display: true,
        text: 'Sales By Category',
        font:{
            size:18,
            
        }
      },
    },
  }

const Dashboard = () => {
  const dispatch:AppDispatch = useDispatch();
  const {dashboard,loading} = useDashboard();
  useEffect(()=>{
    dispatch(fetchLatestDashboardData());
  },[]);
console.log(dashboard)
// console.log("dddd"+dashboard?.orders?.reduce((a:any,c:any)=>{
//   return  parseFloat(c.totalAmount.replace(/,/g,''))
// },0))
 const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: labels.map((label) => {
            let price:number = 0;
            dashboard?.orders?.map((order:any)=>{
                  if(labels[new Date(order.createdAt).getUTCMonth()]=== label){
                     price  +=  parseFloat(order.totalAmount.replace(/,/g,''))
                  }
                 return 
            },0)
            return price;
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Order',
        data:  labels.map((label)=>{
          let orderCount= dashboard?.orders?.filter((o:any)=>{
            return labels[new Date(o.createdAt).getUTCMonth()] === label
           })
          return orderCount?.length || 0
        }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const pieData = {
    labels: dashboard?.product?.map((p:any)=>p.categoryName),
    datasets: [
      {
        label: '# of sales',
        data:dashboard?.product?.map((p:any)=>p.sallingTotalCategory),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log(dashboard)
  return (
   <div className='my-10'>
    {
       loading ? <div className='flex justify-center items-center w-full'>
        <Spinner />
     </div>:
      Object.keys(dashboard).length === 0 ? (
        <h3>Dashboard is empty</h3>
      ):
      (
        <>
            <div className='flex justify-between'>
          <div className='flex items-center bg-white p-4 rounded shadow-sm w-[30%] cursor-pointer  transition all duration-300'>
              <div className='bg-amber-100 w-[70px] h-[70px] rounded-full flex justify-center items-center mr-4'>
                  <div className='bg-amber-500 w-[50px] h-[50px] rounded-full text-white flex justify-center items-center'>
                      <i className="fa-solid fa-dollar-sign"></i>
                  </div>
              </div>
            
              <div>
                  <p className='text-gray-400 font-thin mb-2'>Total Sales</p>
                  <h3 className='font-bold '>KS  {dashboard.order.length > 0  ? thousandSeparator(dashboard.order[0].totalSales) : 0}</h3>
              </div>
          </div>
          <div className='flex items-center bg-white p-4 rounded shadow-sm w-[30%] cursor-pointer  transition all duration-500'>
              <div className='bg-green-100 w-[70px] h-[70px] rounded-full flex justify-center items-center mr-4'>
                <div className='bg-green-500 w-[50px] h-[50px] rounded-full text-white flex justify-center items-center'>
                     <i className="fa-solid fa-cart-shopping"></i>
                </div>
              
              </div>
              <div>
                  <p className='text-gray-400 font-thin mb-2 '>Total Orders</p>
                  <h3 className='font-bold '>{dashboard.order.length > 0 ?  dashboard.order[0].count : 0 }</h3>
              </div>
          </div>
          <div className='flex items-center bg-white p-4 rounded shadow-sm w-[30%] cursor-pointer transition all duration-500'>
              <div  className='bg-blue-100 w-[70px] h-[70px] rounded-full flex justify-center items-center mr-4'>
                  <div className='bg-blue-500 w-[50px] h-[50px] rounded-full text-white flex justify-center items-center'>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </div>
              </div>
             
              <div>
                  <p className='text-gray-400 font-thin mb-2'>Total Products</p>
                  <h3 className='font-bold '>{dashboard.product.reduce((a:any,c:any)=>{
                    return a+c.sallingTotalCategory
                  },0)}</h3>
              </div>
          </div>
            </div>
            <div className='flex mt-8'>
                  <div className='w-[68%] bg-white rounded p-3 mr-4 '>
                      <Line options={options} data={data} style={{width:"100%"}} />
                  </div>
                  <div className='w-[30%] bg-white p-3'>
                      <Pie data={pieData} options={pieOptions} style={{width:"100%"}}/>
                  </div>
            </div>
            <div className='bg-white mt-8 px-8 py-4'>
                  <h3 className=' text-lg font-bold'>Latest orders </h3>
                  <table className="table-auto w-full mt-3">
                    
                      <tbody className="text-base divide-y divide-gray-100">
                        {
                          dashboard?.orders.length > 0 && (
                            dashboard?.orders.slice(0,5).map((order:any)=>(
                              <tr >
                                  <td className="p-5 whitespace-nowrap">
                                    <span className='text-gray-500 font-normal'>
                                      {order._id}
                                    </span>
                                      
                                  </td>
                                  <td className="p-5 whitespace-nowrap">
                                      <span className=''>{order.name}</span>
                                  </td>
                                  <td className="p-5 whitespace-nowrap">
                                    <span className='text-gray-500 font-normal'>
                                      {order.email}
                                    </span>
                                  </td>
                                  <td className='p-5'>
                                      <span>KS {order.totalAmount}</span>
                                  </td>
                                  
                                  <td>
                                      <span className='text-gray-500'>
                                        {getDayMonthAndYear(order.createdAt)}
                                      </span>
                                  </td>
                          </tr>
                            ))
                          )
                        }
                          
                        
                      </tbody>
                  </table>
            </div>
        </>
      )
    }
      
   </div>
  )
}

export default Dashboard