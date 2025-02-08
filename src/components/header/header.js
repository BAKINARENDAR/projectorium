import { FaSearch } from "react-icons/fa";
const header=()=>{

    return(
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

   </div>
  </header>
        </>
    )
}
export default header;