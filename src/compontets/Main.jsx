import React, { createContext, useState } from "react";
import Navbar from './Navbar'
import Disply from './Disply'
import Footer from "./Footer";
import { AllDatas } from "./Datas";


export const imagesPass=createContext()
const Main = () => {
  const [data,SetData]=useState(AllDatas)
  return (
    <div>
      <imagesPass.Provider  value={{data,SetData}}>
        <Navbar/>
       <Disply/>
       <Footer/>
      </imagesPass.Provider>      
    </div>
  )
}

export default Main
