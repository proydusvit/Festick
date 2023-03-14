import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Header } from '../Header/Header';
import FooterM from '../Footer/Footer';
export const SharedLayout = () => {

  return (
    <>
      
      <Header />
   
            <Suspense>
          <Outlet />
      </Suspense>
          <FooterM />
      </>
   
  );
};