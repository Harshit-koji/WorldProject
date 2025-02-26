import { useState } from "react"
import { GiHamburger } from "react-icons/gi"
import { NavLink } from "react-router-dom"





export const Header = ()=>{
const[show,setShow]= useState(false);
const handleToggleBtn= ()=>setShow(!show);
 const handleLinkClick = ()=>setShow(false);

    return <header className=" shadow-lg" >
{/* main container for children  */}
        <div className="container header-section d-flex flex-column  justify-content-center " >
          
            <div className="row align-items-center">
                <div className="col-lg-4 col-sm-4 col-4   ">
                    <NavLink className="text-decoration-none" to="/">

                    <h1 className="nav-brand  ">HarshitWorldAtlas</h1> 
                    </NavLink>
                </div>

                <div className="toggle col-lg-8 col-sm-8 col-8">
                    <button className="rounded-pill " onClick={handleToggleBtn}><GiHamburger className="text-info display-6"   /></button>

                </div>
                <nav  className={`col-lg-8 col-sm-8  d-flex justify-content-end 
                    ${show?"open":"close"} `}>
                    <ul className="d-flex  gap-5">
                        <li ><NavLink onClick={handleLinkClick} className="text-light text-decoration-none"  to="/">Home</NavLink></li>
                        <li><NavLink onClick={handleLinkClick} className="text-light text-decoration-none" to="/about">About</NavLink></li>
                        <li><NavLink onClick={handleLinkClick} className="text-light text-decoration-none" to="/country">Country</NavLink></li> 
                        <li><NavLink onClick={handleLinkClick} className="text-light text-decoration-none" to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
              
            
            </div>
        </div>
    </header>
 
}
