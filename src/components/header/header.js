import { FaSearch } from "react-icons/fa";
import { IoIosContact, IoMdArrowDropup } from "react-icons/io";
const header = () => {
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

            <IoIosContact  className="contact"/> 
            <p>Account</p>
            </button>
            <div className="nav-submenu">
              <IoMdArrowDropup className="nav-submenu-arrowup" />
              <label>
                <div className="submenu-signin">
                  <button>Sign in</button>
                  <p>New customer?Start here.</p>
                </div>
              </label>
            </div>
          </div>

          <div className="nav-about">
            <button className="about">
              About us
            </button>
          </div>

          <div className="nav-ccare">
            <button className="care">
            24x7 Customer Care
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default header;
