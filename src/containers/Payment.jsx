import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css'

const Payment = ({history}) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const paypalOptions = {
    clientId: 'ASdHMDUs0ydGtfuSpAjipg-mNtciTgNrUtTNbAdH88jXtVjlFo-zQQ_K_j1BjksVevsJHwCEej3j_j8V',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout : 'vertical',
    style : 'custom',
    color : 'blue',
    size : 'medium',
    shape : 'pill',
    theme : 'dark',
    locale : 'en',
    type : 'button',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      console.log(newOrder);
      addNewOrder(newOrder);
      history.push('/checkout/success')
    }
  }
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-summary">
          {
            cart.map(item => {
              return (
                <div className="Payment-item" key={item.cartId}>
                  <h4 className="Payment-item-name">{item.title}</h4>
                  <span className="Payment-item-price">${item.price}</span>
                </div>
              );
            })
          }
          <div className="Payment-button">
            <PayPalButton 
              paypalOptions ={paypalOptions}
              buttonStyles ={buttonStyles}
              amount ={cart.reduce((a, b) => a + b.price, 0)}
              onStart={() => console.log('Payment started')}
              onSuccess={data => handlePaymentSuccess(data)}
              onError={(error) => console.log('Payment error', error)}
              onCancel={() => console.log('Payment cancelled')}
            />

            
          </div>
        </div>
      </div>
    </div>
  );
}


export default Payment;