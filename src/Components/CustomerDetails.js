import React, { useState } from 'react';

const CustomerDetails = ({ setActive, details, setDetails }) => {
    const [disable, setDisable] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        setActive("tab3")
    }
    return (
        <form onSubmit={handleSubmit} className='px-6 mt-8'>
            <div className=''>
                <label htmlFor="name" className='block font-semibold'>Name</label>
                <input type="text" onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} name="name" id="" className='border border-gray-400 rounded-lg py-2 w-full my-2 focus:border-gray-900 placeholder:text-gray-500 px-2' placeholder='Type here' required />
            </div>
            <div className=''>
                <label htmlFor="address" className='block font-semibold'>Address</label>
                <textarea type="text" onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} name="address" id="" className='border border-gray-400 rounded-lg py-2 w-full my-2 focus:border-gray-900 placeholder:text-gray-500 px-2' placeholder='Type here' required />
            </div>
            <div className=''>
                <label htmlFor="number" className='block font-semibold'>Number</label>
                <input type="text" onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} name="number" id="" className='border border-gray-400 rounded-lg py-2 w-full my-2 focus:border-gray-900 placeholder:text-gray-500 px-2' placeholder='Type here' required />
            </div>
            <div className=''>
                <label htmlFor="email" className='block font-semibold'>E-mail</label>
                <input type="text" onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} name="email" id="" className='border border-gray-400 rounded-lg py-2 w-full my-2 focus:border-gray-900 placeholder:text-gray-500 px-2' placeholder='Type here' required />
            </div>
            <div className='flex gap-3 my-5' onClick={() => setDisable(false)}>
                <input type="radio" name="radio-1" className="radio" />
                <p>Accept terms and conditions.</p>
            </div>
            <div className='flex justify-end my-2 ' >
                <button type='submit' onClick={()=>setActive("tab1")} className='bg-sky-500 mr-2 disabled:bg-sky-300 px-4 py-2 rounded-md w-1/5 text-center text-white'>Previous</button>
                <button type='submit' disabled={disable} className='bg-sky-500 mr-2 disabled:bg-sky-300 px-4 py-2 rounded-md w-1/5 text-center text-white'>Next</button>
            </div>
        </form>
    );
};

export default CustomerDetails;