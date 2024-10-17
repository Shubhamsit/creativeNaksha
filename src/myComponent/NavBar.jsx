

// import React, { useState,useEffect} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faUser, faCog, faBars } from "@fortawesome/free-solid-svg-icons";
// import {Link, NavLink} from 'react-router-dom'
// import About from "./About";

// function NavBar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);


//   const [isSticky, setIsSticky] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 0) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
    
//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);



//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <>
//       <div  className={`bg-[#021526] h-24 sm:h-20 flex justify-around items-center w-full ${isSticky ? "sticky top-0 left-0 z-50" : ""}`}>
//         <div className="flex items-center">
//           <img src="./src/assets/logo.png" alt="" className="w-20" />
//           <h2 className="ml-8 font-mono font-bold text-[#E2E2B6]">
//             CREATIVE NAKSHA GHAR
//           </h2>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="sm:hidden px-4">
//           <FontAwesomeIcon
//             icon={faBars}
//             style={{ color: "#E2E2B6", fontSize: 25 }}
//             onClick={toggleSidebar} 
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className=" hidden sm:flex-1 sm:block">
//         <ul className="justify-around items-center h-full sm:flex ">
//            <li className="hover:bg-[#E2E2B6]  hover:text-[#021526]  p-4 rounded text-[#F4F6FF] font-bold size-lg">
//            <Link to="/Home">Home</Link>
//              </li >
//              <li className="hover:bg-[#E2E2B6] hover:text-[#021526]  p-4  rounded text-[#F4F6FF] font-semibold">
//            <Link to="/About">About</Link>
//            </li>
//             <li className="hover:bg-[#E2E2B6]  hover:text-[#021526] p-4  rounded text-[#F4F6FF] font-semibold">
//             <Link to="/OurWork">Our Work</Link>
//              </li>
//              <li className="hover:bg-[#E2E2B6]  hover:text-[#021526]  p-4  rounded text-[#F4F6FF] font-semibold">
//              <Link to="/Gallery">Gallery</Link>
//              </li>
//              <li className="hover:bg-[#E2E2B6]  hover:text-[#021526] p-4   rounded text-[#F4F6FF] font-semibold">
//              <Link to="/ContactUs">Contact Us</Link>
//              </li>
//            </ul>
//          </div>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-24 left-0 h-full w-64 bg-[#021526] text-white z-50 transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <ul className="flex flex-col p-6 space-y-4">
//           <li className="hover:bg-[#E2E2B6] hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold">
//           <Link to="/Home">Home</Link>
//           </li>
//           <li className="hover:bg-[#E2E2B6] hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-semibold">
//           <Link to="/About">About</Link>
//           </li>
//           <li className="hover:bg-[#E2E2B6] hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-semibold">
//           <Link to="/OurWork">Our Work</Link>
//           </li>
//           <li className="hover:bg-[#E2E2B6] hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-semibold">
//           <Link to="/Gallery">Gallery</Link>
//           </li>
//           <li className="hover:bg-[#E2E2B6] hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-semibold">
//           <Link to="/ContactUs">Contact Us</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default NavBar;





import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    // If the click is outside the sidebar and the sidebar is open, close it
    if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      // Add event listener to detect clicks outside the sidebar when it's open
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when sidebar is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <div className={`bg-[#021526] h-24 sm:h-20 flex justify-around items-center w-full ${isSticky ? "sticky top-0 left-0 z-50" : ""}`}>
       <Link to="/Home">
       <div className="flex items-center">
          <img src="./src/assets/creativelogo.png" alt="" className="w-16" />
          <h2 className="ml-8 font-sans font-bold text-xl text-[#FF6600]">
            CREATIVE NAKSHA GHAR
          </h2>
        </div>
       </Link>

        {/* Hamburger Icon */}
        <div className="sm:hidden px-4">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", fontSize: 25 }}
            onClick={toggleSidebar}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex-1 sm:block">
          <ul className="justify-around items-center h-full sm:flex ">
           

            <Link to="/Home"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> Home
              
              </li></Link>


              <Link to="/About"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> About
              
              </li></Link>
              <Link to="/OurWork"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> Our Work
              
              </li></Link>
              <Link to="/Gallery"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> Gallery
              
              </li></Link>
              <Link to="/ContactUs"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> Contact Us
              
              </li></Link>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef} // Reference to the sidebar
        className={`fixed top-24 left-0 h-full w-64 bg-[#021526] text-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col p-6 space-y-4">
        <Link to="/Home"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> Home
              
              </li></Link>


              <Link to="/About"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> About
              
              </li></Link>
              <Link to="/OurWork"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> Our Work
              
              </li></Link>
              <Link to="/Gallery"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> Gallery
              
              </li></Link>
              <Link to="/ContactUs"> <li className="hover:bg-white hover:text-[#021526] p-4 rounded text-[#F4F6FF] font-bold size-lg"> Contact Us
              
              </li></Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;





