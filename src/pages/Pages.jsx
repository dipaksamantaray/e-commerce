import React from "react"
import Home from "../Components/mainpage/Home";
import FlashDeal from "../Components/FlashDeal/FlashDeal";
import TopCate from "../Components/top/TopCate";
import NewArrivals from "../Components/newarrivals/NewArrivals";
import Discount from "../Components/Discount/Discount";
import Shop from "../Components/Shop/Shop";
import Annu from "../Components/annoucements/Annu";
import Wraper from "../Components/wrapper/Wraper";


const Pages = ({productItems,cartItem,addToCart,shopItems})=>{
    return(
        <>
     
     <Home cartItem={cartItem}/>
     <FlashDeal productItems={productItems} addToCart={addToCart}/>
     <TopCate/>
     <NewArrivals/>
     <Discount/>
     <Shop shopItems={shopItems} addToCart={addToCart}/>
     <Annu/>
     <Wraper/>
   
            </>
    );
};
export default Pages;