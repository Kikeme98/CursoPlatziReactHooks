import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css'

const Checkout = () => {
  const { state, removeFromCart, clearCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = id => () => {
    console.log(id);
    removeFromCart(id);
  };
  const handleClear = () => {
    clearCart();
  };
  const handleSumTotal = () => {
    const total = cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
    return total;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {
          cart.length > 0 ?
            <h3>Lista de pedidos</h3>
            :
            <h3>Sin pedidos</h3>
        }
        {
          cart.map((item, index) => {
            return (
              <div className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>

                <button type="button"><i className="fas fa-trash-alt" aria-hidden="true" onClick={handleRemove(item.cartId)} /></button>
              </div>
            );
          })
        }
      </div>
      <div className="Checkout-sidebar">
        {
          cart.length > 0 ?
            <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
            :
            <h3>Venta vacía</h3>
        }

        <Link to="/checkout/information">
          <button type="button" className="Checkout-button">Finalizar pedido</button>
        </Link>
        {
          cart.length > 0 ?
            <button type="button" className="Checkout-redButton" onClick={handleClear}>Vacíar carrito</button>
            :
            null
        }


      </div>
    </div>
  );
}


export default Checkout;