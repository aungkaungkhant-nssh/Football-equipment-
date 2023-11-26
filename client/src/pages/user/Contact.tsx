import React, { useState } from 'react'
import InputText from '../../components/Form/InputText'

const Contact = () => {
  return (
   <section className='container mx-auto   m-8 px-3'>
    <div className='flex w-full justify-center gap-5 lg:flex-row flex-col'>
            <div className='lg:w-[40%] w-full'>
                <h3 className='text-4xl font-bold'>Contact</h3>
                <div className='mt-8'>
                    <div className='my-4'>
                          <label htmlFor="" className='block mb-2 font-bold'>Location</label>
                            <InputText
                            type='text'
                            errormessages={[]}
                            name=""
                            value={"Hpan An, Myaing Ka Lay"}
                            onChange={()=>{}}
                            disabled={true}
                            
                            />
                    </div>
                    
                    <div className='my-4'>
                          <label htmlFor="" className='block mb-2 font-bold'>Phone Number</label>
                            <InputText
                            type='text'
                            errormessages={[]}
                            name=""
                            value={"09261804445"}
                            onChange={()=>{}}
                            disabled={true}
                            
                            />
                    </div>

                    <div className='my-4'>
                          <label htmlFor="" className='block mb-2 font-bold'>Email</label>
                            <InputText
                            type='text'
                            errormessages={[]}
                            name=""
                            value={"akkgit0909@gmail.com"}
                            onChange={()=>{}}
                            disabled={true}
                            
                            />
                    </div>
                </div>
            </div>
            <div  className='lg:w-[60%] w-full'>
                <div className='flex justify-center'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10773.354013235063!2d97.57869757395754!3d16.88752374512653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c2c5c7919382dd%3A0xe2f829a4f08ebef0!2sMyaing%20Ka%20Lay%2C%20Myanmar%20(Burma)!5e1!3m2!1sen!2sus!4v1700731174578!5m2!1sen!2sus"  style={{border:0,width:"600px",height:"400px"}}  loading="lazy" ></iframe>
                </div>
                   
            </div>
    </div>
   </section>
  )
}

export default Contact