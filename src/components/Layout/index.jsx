import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "../NavbarHome";
import Footer from "../FooterHome";

// import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='overflow-hidden'>
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
