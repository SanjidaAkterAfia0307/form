import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import '../App.css';

const CheckOutForm = ({ details, setActive }) => {
  const stripe = useStripe();
  const elements = useElements();
  const price = details.price


  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState(false);
  const [trans, setTrans] = useState("");
  
  useEffect(() => {
   
    fetch("https://form-server-sanjidaakterafia0307.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setClientSecret(data.clientSecret)
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: details.name,
            email: details.email
          },
        },
      },
    );


    if (confirmError) {
      toast.error("Please check your information!")
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setSuccess(true)
      setTrans(paymentIntent.id)
      toast.success('Payment Successfull!')
      console.log('card info', card);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <div className='flex justify-end my-2' >
        <button onClick={() => setActive("tab2")} className='bg-sky-400 rounded-md px-2 py-1 my-5 mr-2 text-white font-semibold'>Previous</button>
        <button type="submit" className='bg-sky-400 rounded-md px-2 py-1 my-5 text-white font-semibold' disabled={!stripe}>
          Pay
        </button>
      </div>

      {
        success &&
        <div className='text-center mt-12 text-xl'>
          <p><span className='text-green-500'>Your Transaction ID : </span>{trans}</p>
        </div>
      }
    </form>
  );
};

export default CheckOutForm;