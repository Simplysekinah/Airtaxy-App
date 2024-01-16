import React,{useEffect,useState} from 'react'
import { receipts } from './Service/Receipts'
import { useDispatch,useSelector } from 'react-redux'
import {MdArrowBackIos} from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { PaystackButton } from 'react-paystack'
import { useFlutterwave } from 'flutterwave-react-v3';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useNavigate } from 'react-router-dom'
import qrcode from 'qrcode-generator'
// import Props4 from './Props4'


const Payment = () => {
  const navigate = useNavigate()
  const [qrCodeImage, setqrCodeImage] = useState('')
  const token = localStorage.token
    console.log(token);
  const { allBooked, isBooking, bookError } = useSelector((state) => state.book)
  console.log(allBooked);
  const{ Bookingflight, Booked, Bookingerror}= useSelector((state) => state.Check)
  console.log(Booked);
  const dispatch = useDispatch()
  useEffect(() => {
    receipts(dispatch)
  }, [])

  const publickey = "pk_test_354e8db9d3952738c8769fd04142445010d0e673"

    const amount = (Booked.price)
    console.log(amount);
    const email = (allBooked.email)
    console.log(email);


  const componentProps = {
    publickey,
    reference: (new Date()).getTime().toString(),
    email,
    amount,
    metadata: {
      email
    },
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }

  const generateQRCode =(data)=> {
    // Create a QRCode instance with type 0 (QR Code) and error correction level 'M' (medium)
    const qr = qrcode(0, 'M');
  
    // Add the data to the QRCode instance
    qr.addData(data);
  
    // Generate the QRCode
    qr.make();
  
    // Return the data URL of the generated QRCode
    return qr.createDataURL();
  }
  const config = {
    public_key: "FLWPUBK_TEST-99b6b1e93b7b2ba3a775dd0f110be160-X",
    tx_ref: Date.now(),
    amount,
    currency: 'NGN',
    payment_options: "card, banktransfer, ussd",
    redirect_url: navigate("/boardingpass"),
    customer: {
      email,
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

 useFlutterwave(config)

 const fwConfig = {
  ...config,
  text: 'Pay with Flutterwave!',
  callback: (response) => {
     console.log(response);
     if (response.status === 'completed') {
      // Payment was successful
      const transactionId = response.transaction_id;
    
      // to Generate QR Code
      const qrCodeData = `Transaction ID: ${transactionId}\nAmount: ${response.charged_amount} ${response.currency}`;
      const qrCodeImage = generateQRCode(qrCodeData);
    
      // to diplay the generated QR code 
      console.log(qrCodeImage);
      localStorage.setItem("scancode",JSON.stringify(qrCodeImage) )
      setqrCodeImage(qrCodeImage)
      
    } else {
      // Payment failed, handle accordingly
      console.error('Payment failed:', response.message);
    }
    closePaymentModal() // this will close the modal programmatically
  },
  onClose: () => {},
};

  return (
    <div>
       <div className='d-flex seat-up'>
          <div className='con-bck ms-5 mt-1'>
          <div className='con-bck1'>
            <div className='con-bck2'>
              <MdArrowBackIos/>
            </div>
          </div>
          </div>
          <div className='flight-d mx-auto d-flex align-items-center'>Payment</div>
       </div>
       <div>
          <div className='' >
              <div className='arrow'>
                <div className='from text-dark'>{allBooked.from}</div>
                <div className='d-flex align-items-center justify-content-center'>
                <div className='sm-circle'></div>
                <div className='sm-long'></div>
                  <div className='sm-circle'></div>
                </div>
                <div className='to text-dark'>{allBooked.to}</div>
              </div>
              <div className='clas1'>
                <div  className='d-flex justify-content-center align-items-center'>
                  <div className='clas text-center d-flex justify-content-center align-items-center'>{allBooked.classes}</div>
                </div>
              </div>
              <hr />
              <div className='d-flex align-items-center justify-content-evenly mt-5'>
                <div className='date'>
                  <div className='date1'>{allBooked.dates}</div>
                </div>
                <div className='time'>
                  <div className='time1'>{allBooked.passenger}</div>
                </div>
              </div>
              <hr />
              <div>
                <div>{Booked.price}</div>
              </div>
              <hr />
              {/* <div>
                <img className='w-50 h-50'  src="data:image/gif;base64,R0lGODdhSgBKAIAAAAAAAP///ywAAAAASgBKAAAC/4yPqcvtD6OctNqLs968+w+G4kiWZgKk6roaqcvCzHuwtkrdtxzYvEKD6VqT4IJG5BmJSIDDCIGinD1cjbq0Np9USZPZrQqtvyM2Ji6ewYgvOT1ba8NR+bYqdSvP47vXzodHl8ZGCFhW1xc4Fgc0p4j44OYn2Dh15wMXIdUWhuk5R+mYM9hpatippzmqNvSICvvpytkw+/q5t2dLolqWdbIpd+pb2qGayWpJ2RvMKEhLm6vJXJeZVRgnO0RqDYptpq3DDdhdmHQ5GF0buv0ceJ6aXpw4xUXsDH+lbjlsdl8J0NG+dfHEGUK2St8bC9faTXoDDc04DAbj9RMlaWEriewKLy7aWLBdJDDh5q1r6Kofvlsc/xjM9wvcO2EVUga8orJjLI1cXnr7KE2gSZc7pr06FXEgqUgeIdXbqQFjU3escNWcyfTgUYVS1UiL6DQPGqUgT5o0d8gYT53ZsFLNcK4cu7C2WgZDmZYku7pD4XJUB7MvCISANZLtOWtl4G4rGdZVbLjoMcFPlYHSlTanY3tGMTvVfJVuMpkhd3l9KxZx6cSnGXdmW9ldV8toPYLlupWe64d4LYOmzVJRb3+v/3Am5lPubILMkUt+/o2ozZi1jcYcN/0yQKvOsgL7Dj68+PHky5s/jz69evUFAAA7" alt="" />
                <img className='w-50 h-50 ' src={qrCodeImage && qrCodeImage} alt="qrcode" />
              </div> */}
              <ToastContainer/>
            </div>
          </div>
        <div className='border border-black p-4'>
          <div>what will you like to pay with?</div>
          <PaystackButton {...componentProps}  className='signup-clk'/>
          <FlutterWaveButton {...fwConfig} className='signup-clk' />
        </div>
        {/* <div className='mt-2'>
          <Props4 gradient='Confirm' gradient1='signup-clk mt-5' pass='Submit' onClick={confirm}/>
        </div> */}
    </div>
  )
}

export default Payment