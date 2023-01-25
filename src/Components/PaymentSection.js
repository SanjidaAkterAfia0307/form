import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe("pk_test_51M6aT0DWAlcxXc9OI4oHcursFocXEzhertCrifHdRIywLGJJCw1n2SbHWU5BNLuYTjaOEbMrLeSY4VOHqAvJyGL900yduci1tv");
const PaymentSection = ({details,setDetails,setActive }) => {
    return (
        <div className='px-6 mt-8'>
            <h3 className="text-2xl">Pay For Your Goods </h3>
            <div className=' my-12 '>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                       details={details}
                       setActive={setActive}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default PaymentSection;