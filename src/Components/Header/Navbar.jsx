import React,{useState}from "react";
import { BsBorderAll,BsChevronDown} from "react-icons/bs";
import {Link} from "react-router-dom";

const Navbar=()=>{
    const[MobileMenu,setMobileMenu]=useState(false);
    return(
        <div>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className="fa-solid fa-border-all"></span>
                        <h4>Categories<i className="fa-solid fa-chevron-down"></i></h4>
                        </div>
                        <div className="navlink">
                            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}onClick={()=>setMobileMenu(false)}>
                                
                                <li>
                                <Link to="/home">home</Link>

                                    </li>

                                <li>
                                    

                             <Link to="/pages">pages</Link>


                                </li>

                                <li>
                                    <Link to="./user">user account</Link>
                                </li>

                                <li>
                                    <Link to="./vendor account">vendor account</Link>
                                </li>

                                <li>
                                    <Link to="./track">Track my order account</Link>
                                </li>


                                <li>
                                    <Link to="./contact">contact</Link>
                                </li>
                                </ul>
                                
                               
                                <button className="toggle" onClick={()=>setMobileMenu(!MobileMenu)}>
                                   {
                                      MobileMenu?  <i className="fa-solid close fa-xmark "></i>  :
                                     
                                     
                                      <i className="fa-solid fa-bars open"></i>
                                   }
                                    </button>
                            </div>
                    </div>
                </header>
           
            </div>
    );
};
export default Navbar;
