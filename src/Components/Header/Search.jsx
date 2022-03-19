import React from "react";
import logo from "./logo.jpeg"
import {Link} from "react-router-dom"
const Search=({cartItem})=>{
    window.addEventListener("scroll",function(){
        const search = document.querySelector(".search")
        search.classList.toggle("active",window.scrolly > 100)
    })
    return(
        <div>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                    <img src={logo}/>
                        </div>
                        <div className="search-box f_flex">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search and hit enter..."/>
                        <span>All Categories</span>
                            </div>
                            <div className="icon f_flex width">
                            <i className="fa-solid fa-user icon-circle"></i>
                            <div className="cart">
                                <Link to="/cart">
                                <i className="fa-solid fa-bag-shopping icon-circle"></i>
                                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                                    </Link>
                                </div>
                                </div>

                    </div>
                </section>
         
            </div>
    );
};
export default Search;
 