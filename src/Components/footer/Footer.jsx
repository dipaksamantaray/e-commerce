import React from "react";
import "./Footer.css";


const Footer=()=>{
    return(
        <>
       <footer>
           <div className="container grid2">
               <div className="box">
              <h1>Crunchy</h1>
              <p></p>Crunchy Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              <div className="icon d_flex">
                  <div className="img d_flex">
                  <i class="fa-brands fa-google-play"></i>
                  <span>Google play</span>
                  </div>
                  
                      <div className="img d_flex">
                      <i class="fa-brands fa-app-store-ios"></i>
                  <span>App Store</span>
                  
                      </div>
                  </div>
                   </div>
                   
                   <div className="box">
                       <h2>About Us</h2>
                           <ul>
                           <li>Carrers</li>
                           <li>Our Stores</li>
                           <li>Our Cares</li>
                           <li>Term nd Conditions</li>
                           <li>Privacy Policy</li>
                           </ul>
                       </div>

                       <div className="box">
                           <h2>Customer Care</h2>
                           <ul>
                               <li>Help Center</li>
                               <li>How to Buy</li>
                               <li>Track your Order</li>
                               <li>Corporate and Bulk Purchasing</li>
                               <li>Return and Refunds</li>
                               </ul>
                           </div>
                           <div className="box">
                               <h2>Contact Us</h2>
                               <ul>
                                   <li>Palasuni,PrachiBihar,Bhubaneswar,75100</li>
                                   <li>example@gmail.com</li>
                                   <li>1349234927</li>
                                   </ul>
                               </div>
               </div>
           </footer>
        </>
    );
};
export default Footer;