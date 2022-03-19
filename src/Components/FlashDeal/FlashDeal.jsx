import React from "react";
import FlashCard from "./FlashCard"

const FlashDeal=({productItems,addToCart})=>{
    return(
        <>
    <section className="flash background">
 <div className="container">
     <div className="heading f_flex">
     <i className="fa-solid fa-bolt"></i>
     <h1>Flash Deals</h1>
         </div>
         <FlashCard productItems={productItems} addToCart={addToCart}/>
     </div>
        </section>
            </>
    );
};
export default FlashDeal;