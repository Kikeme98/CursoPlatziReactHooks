import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
}


export default Layout;