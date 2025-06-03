import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
