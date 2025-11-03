import React from 'react';
import { Outlet } from 'react-router';
import NavigationBar from '../Components/NavigationBar';
import SiteFooter from '../Components/SiteFooter';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <NavigationBar />
      <main className="grow">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default RootLayout;