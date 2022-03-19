import React from "react";


const Categories =()=>{
    const data = [

        {
            cateImg:"/images/cat1.png",
            cateName:"Fashion"
        },
        {
            cateImg:"/images/cat2.png",
            cateName:"Electronic"
        },
        {
            cateImg:"/images/cat3.png",
            cateName:"Cars"
        },
        {
            cateImg:"/images/cat4.png",
            cateName:"Home & Garden"
        },
        {
            cateImg:"/images/cat5.png",
            cateName:"Gifts"
        },
        {
            cateImg:"/images/cat6.png",
            cateName:"Music"
        },
        {
            cateImg:"/images/cat7.png",
            cateName:"Health & Beauty"
        },
        {
            cateImg:"/images/cat8.png",
            cateName:"Pets"
        },
        {
            cateImg:"/images/cat9.png",
            cateName:"Baby Toys"
        },
        {
            cateImg:"/images/cat10.png",
            cateName:"Groceries"
        },
        {
            cateImg:"/images/cat11.png",
            cateName:"Books"
        },  
    ]
    return(
       <>
       <div className="category">
           {
               data.map((value,index)=>{
                   return(
                       <div className="box f_flex" key={index}>
                           <img src={value.cateImg} alt="sdskd"/>
                           <span>{value.cateName}</span>

                           </div>
                   )
               })
           }
           </div>
       </>
    );
};
export default Categories;