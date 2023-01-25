import logo from './logo.svg';
import './App.css';
import { FaShoppingCart,FaUser } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import OrderSummery from './Components/OrderSummery';
import CustomerDetails from './Components/CustomerDetails';
import PaymentSection from './Components/PaymentSection';
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {
  const [active, setActive] = useState("tab1")
  const [details, setDetails] = useState({})
  // console.log(active)
  return (
    <div >
      <h2 className='text-3xl text-center my-12 font-semibold'>Checkout Form</h2>
      <div className=' flex justify-center'>
        <div className='shadow-lg px-3 py-6 rounded-md'>
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="mr-2" role="presentation">
                <button className={active === "tab1" ? "flex items-center  text-sky-500 p-4 text-xl rounded-t-lg underline underline-offset-8":"flex items-center p-4 text-xl rounded-t-lg"} id="order-summery-tab" data-tabs-target="#order-summery" type="button" role="tab" aria-controls="order-summery" aria-selected="false" ><FaShoppingCart className='mr-2'/> Order Summery</button>
              </li>
              <li className="mr-2" role="presentation">
                <button className={active === "tab2" ? "flex items-center text-sky-500 p-4 text-xl rounded-t-lg underline underline-offset-8":"flex items-center p-4 text-xl rounded-t-lg"}  id="customer-details-tab" data-tabs-target="#customer-details" type="button" role="tab" aria-controls="customer-details" aria-selected="false"><FaUser className='mr-2'/> Customer Details</button>
              </li>
              <li className="mr-2" role="presentation">
                <button className={active === "tab3" ? "flex items-center text-sky-500 p-4 text-xl rounded-t-lg underline underline-offset-8":"flex items-center p-4 text-xl rounded-t-lg"}  id="payment-tab" data-tabs-target="#payment" type="button" role="tab" aria-controls="payment" aria-selected="false" ><MdOutlinePayment className='mr-2'/> Payment</button>
              </li>

            </ul>
          <div className='h-[450px] px-6'>
            {active === "tab1" &&
              <OrderSummery setActive={setActive} details={details} setDetails={setDetails}></OrderSummery>
            }

            {active === "tab2" &&
              <CustomerDetails setActive={setActive} details={details} setDetails={setDetails}></CustomerDetails>
            }
            {active === "tab3" &&
              <PaymentSection setActive={setActive} details={details} setDetails={setDetails}> </PaymentSection>
            }

          </div>

        </div>
      </div>
            <Footer></Footer>
    </div>
  );
}

export default App;
