import React from "react";

import { GiUsaFlag } from "react-icons/gi";

const Head=()=>{
    return(
        <div>
            <section className="head">
                <div className="container d_flex">
                <div className="left row">

                <i className="fa-solid fa-phone"></i>
               <label>+88012 34577894</label>
               <i className="fa-solid fa-envelope"></i>
               <label>example@gmail.com</label>
               </div>
               <div className="right row RText">
                   <label>Theme FAQ's</label>  
                   <label>Need Helps</label> 
                   <span><GiUsaFlag/></span>
                   <label htmlFor="">EN</label> 
                   <span><GiUsaFlag/></span>
                   <label htmlFor = "">USSD</label>
                   </div>
               </div>
            </section>
            </div>
    );
};
export default Head;
