import React from 'react'
import { Link } from 'react-router-dom';
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
import { faker} from '@faker-js/faker'

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
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Order',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

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
  const pieData = {
    labels: ['Boot', 'Keeper', 'Shirt'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
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
const Dashboard = () => {
  return (
   <div className=''>
      <div className='flex justify-between'>
          <div className='flex items-center bg-white p-4 rounded shadow-sm w-[30%] cursor-pointer  transition all duration-300'>
              <div className='bg-amber-100 w-[70px] h-[70px] rounded-full flex justify-center items-center mr-4'>
                  <div className='bg-amber-500 w-[50px] h-[50px] rounded-full text-white flex justify-center items-center'>
                      <i className="fa-solid fa-dollar-sign"></i>
                  </div>
              </div>
            
              <div>
                  <p className='text-gray-400 font-thin mb-2'>Total Sales</p>
                  <h3 className='font-bold '>KS 1200120012012</h3>
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
                  <h3 className='font-bold '>1212</h3>
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
                  <h3 className='font-bold '>12</h3>
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
                    <tr >
                        <td className="p-5 whitespace-nowrap">
                          <span className='text-gray-500 font-normal'>121212</span>
                            
                        </td>
                        <td className="p-5 whitespace-nowrap">
                            <span className=''>Aung Kaung Khant</span>
                        </td>
                        <td className="p-5 whitespace-nowrap">
                           <span className='text-gray-500 font-normal'>akkgit0909@gmail.com</span>
                        </td>
                        <td className='p-5'>
                            <span>KS 12000</span>
                        </td>
                        <td>
                            <span className='bg-green-200 rounded-full px-3 py-2 text-green-500 font-normal'>Delivered</span>
                        </td>
                        <td>
                            <span className='text-gray-500'>20/2/2023</span>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
      </div>
   </div>
  )
}

export default Dashboard