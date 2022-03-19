import React from "react";
import "./style.css";

const Wraper=()=>{
    const data = [
        {
          cover: <i class='fa-solid fa-truck-fast'></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-id-card'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-headset'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
    return(
        <>
       <section className="wrapper background">
           <div className="container grid2">
               {
                   data.map((val,index)=>{
                       return(
                           <>
                           <div classNaame="product" key={index}>
                               <div className="img icon-circle">
                                   <i>{val.cover}</i>
                                   </div>
                                   <h3>{val.title}</h3>
                                   <h3>{val.decs}</h3>
                               </div>
                           </>
                       )
                   })
               }
               </div>
           </section>
        </>
    );
};

export default Wraper;