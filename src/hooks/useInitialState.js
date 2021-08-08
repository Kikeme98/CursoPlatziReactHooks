import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState(state => ({
      ...state,
      cart: [...state.cart, payload],
    }));
  };
  const removeFromCart = payload => {
    console.log(payload);
    setState(state => ({
      ...state,
      cart: state.cart.filter(item => item.cartId !== payload),
    }));
  };
  const clearCart = () => {
    setState(state => ({
      ...state,
      cart: [],
    }));
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }



  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    addToBuyer,
    addNewOrder
  };

}


export default useInitialState;