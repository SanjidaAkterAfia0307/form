import React, { useState } from 'react';


const OrderSummery = ({setActive,details,setDetails}) => {
    const bigDate= new Date();
    const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    console.log(month[bigDate.getMonth()])
    const date=bigDate.getDate()+"-"+month[bigDate.getMonth()]+"-"+bigDate.getFullYear()
    const floatId=Math.random()*100000000
    const id=Math.floor(floatId)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setDetails({...details,date,id})
        setActive("tab2")
    }
    return (

        <form onSubmit={handleSubmit} className='md:px-6 px-2 mt-8'>
            <div className=''>
                <label htmlFor="proName" className='block font-semibold'>Product Name</label>
                <input type="text" onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})} name="proName" id="" className='border border-gray-400 rounded-lg py-2 w-full my-2 focus:border-gray-900 placeholder:text-gray-500 px-2' placeholder='Type here' required />
            </div>
            <div className=''>
                <label htmlFor="price" className='block font-semibold'>Price</label>
                <input type="text" onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})} name="price" id="" className='border border-gray-400 rounded-lg py-2 w-full my-2 focus:border-gray-900 placeholder:text-gray-500 px-2' placeholder='Type here' required />
            </div>
            <div className=''>
                <label htmlFor="id" className='block font-semibold'>Order ID</label>
                <input type="text" defaultValue={id} disabled  name="id" id="" className='border border-gray-400 rounded-lg py-2 w-full my-2 focus:border-gray-900 placeholder:text-gray-500 px-2' placeholder='Type here' required />
            </div>
            <div className=''>
                <label htmlFor="date" className='block font-semibold'>Date</label>
                <input type="text" defaultValue={date} disabled  name="date" id="" className='border border-gray-400 rounded-lg py-2 w-full my-2 focus:border-gray-900 placeholder:text-gray-500 px-2' placeholder='Type here' required />
            </div>
            <div className='flex justify-end my-2' >
                <button  className='bg-sky-500 px-4 py-2 rounded-md  text-center text-white'>Next</button>
            </div>
        </form>

    );
};

export default OrderSummery;