
import React from "react";
import  Layout  from "./Layout";
 import About from "./About";
 import Contact from "./Contact";
 import Home from "./Home";
 import Menu from "./Menu";
 import {  Route, Routes } from "react-router-dom";
//  import Banner from './banner.jpeg'



   function App () {
   return(
      <>
     <Layout/>


    

       <div>
          
         

           <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes> 
       
       
       </div>
       
        </>
       
       

        
    );
}

export default App;



