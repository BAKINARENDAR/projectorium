import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoIosContact, IoIosMenu, IoMdArrowDropup } from "react-icons/io";

import { RiCustomerService2Fill } from "react-icons/ri";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="navbar-logo">
            <div className="logo"></div>
          </div>

          <div className="nav-search">
            <input
              type="text"
              placeholder="Search Projectorium"
              className="search-input"
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>

          <div className="nav-login">
            <button className="login">
              <IoIosContact className="contact" />
              <p>Account</p>
            </button>
            <div className="nav-submenu">
              <IoMdArrowDropup className="nav-submenu-arrowup" />
              <label>
                <div className="submenu-signin">
                  <button>Sign in</button>
                  <p>New customer? Start here.</p>
                </div>
              </label>
            </div>
          </div>

          <div className="nav-about">
          

            <button className="about">
            <CiCircleInfo  className="ab-info" />
            <p>About us</p>
            </button>
          </div>

          <div className="nav-ccare">
            <button className="care">
            <RiCustomerService2Fill className="care-info" />

              <p>24x7 Customer Care</p></button>
          </div>

          {/* Right Side Sidebar (Drawer) */}
          <div className="sidemenu">
            <div className="sidemenu-content">
              <IconButton onClick={toggleDrawer(true)}>
              <IoIosMenu className="menu" />

              </IconButton>

              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} className="draw-sidebar" >
               <center><h2 style={{color:"#067062", marginTop:"10px",marginBottom:"30px"}}>CONTENTS</h2></center>
               <div className="top-button">
               <button className="homebutton" onClick={() => {}}>Home</button>
               <button className="categories" onClick={() => {}}>Categories</button>
               <button className="dashboard" onClick={() => {}}>Dashboard</button>
               <button className="uploadbutton" onClick={() => {}}>Upload project</button>
               <button className="aboutbutton" onClick={() => {}}>About us</button>
               <button className="contactus" onClick={() => {}}>Contact us</button>
               </div>
               <div className="bottom-button">
               <button className="logoutbutton" onClick={() => {}}>Logout</button>
               </div>
              </Drawer>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
