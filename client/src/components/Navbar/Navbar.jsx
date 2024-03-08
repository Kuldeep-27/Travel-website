import "./Navbar.scss"
import logo from "../../assets/white-logo.png"
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
//<FiAlignJustify />
const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (
        <div className="nav-container">
         <div className="container">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="items">
                <div className="links">
                <p>Home</p>
                <p>Activities</p>
                <p>visa's</p>
                <p>About</p>
                <p>FAQ's</p>

                </div>
               <div className="button">
                   <p>Book Now</p>
               </div>

               <div className="phone">
               <FiAlignJustify onClick={()=>setOpen(!open)} />
               {
                open &&
                <div className="list" onClick={()=>setOpen(!open)}>
                    <p>Home</p>
                    <p>Activities</p>
                    <p>visa's</p>
                    <p>About</p>
                    <p>FAQ's</p>
                    <button>Book Now</button>
                </div>
                }
               </div>
                
            </div>
          
         </div>
        </div>
    )
}

export default Navbar;