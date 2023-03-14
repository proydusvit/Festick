import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ColorRing } from 'react-loader-spinner'
import { Loader } from "../../GlobalStyle";
import { SharedLayout } from "../Layout/Layout";
import HomePages from "../../pages/HomePages/HomePages";

import { lazy } from "react";
const Rules = lazy(() => import('../../pages/Rules/Rules'))
const Room = lazy(() => import('../../pages/Room/Room'))
const RoomInfo = lazy(() => import('../../pages/Room/RoomDetalis'))


export default function RoutesMap() {
const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  },[])

  return (
    <div>
      {loading ? <Loader><ColorRing
        visible={true}
        
        height="200"
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{
        }}
        wrapperClass="blocks-wrapper"
        colors={['#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb']} /></Loader> :
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePages />} />
            <Route path="/service" element={<Room />} />
            <Route path="/service/:id" element={<RoomInfo />} />
            <Route path="/rules" element={<Rules />} />

     
          </Route>
          
        </Routes>
      }
    </div>
  );
}
