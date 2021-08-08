import React, { Component } from 'react';
import initialState from '../initialState';
import Products from '../components/Products.jsx';

const Home = () => {
  return (
    <div>
      <Products products = {initialState.products}/>
    </div>
  );
}


export default Home;