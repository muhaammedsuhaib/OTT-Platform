import React, { createContext, useState } from "react";
import Navbar from './Navbar'
import Disply from './Disply'
import Footer from "./Footer";
import { AllDatas } from "./Datas";
import Showvideo from "./Showvideo";
import {BrowserRouter,Route,Routes} from 'react-router-dom'


export const imagesPass=createContext()
const Main = () => {
  const [data,SetData]=useState(AllDatas)
  return (
    <div>
      <imagesPass.Provider  value={{data,SetData}}>
         <Navbar/>
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Disply/>} />
         <Route path="/show/:id" element={<Showvideo/>} />
        </Routes>
        </BrowserRouter>
        <Footer/>

      {/* <Disply/>
       <Showvideo/> */}
      </imagesPass.Provider>      
    </div>
  )
}

export default Main
