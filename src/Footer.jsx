import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons"; // Correctly importing the WhatsApp icon
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; 

function Footer() {

    
        const handleRedirect = () => {
          window.open('https://www.google.com/maps/dir//Ground+Floor,+Naya+Tola,+Kankarbagh+Main+Rd,+opp.+Hp+Petrol+Pump,+Kumhrar,+Patna,+Bihar+800026/@25.6010355,85.0990643,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x39ed59a2692abc2d:0x75719924d22daf43!2m2!1d85.1814658!2d25.6010586?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D', '_blank');
        };
    
  return (
    <footer className="bg-[#021526] text-white py-6 sm:h-[300px] h-auto sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row  items-center sm:justify-between mt-10">
        
        {/* Brand Info */}
        <div className="mb-6 sm:mb-0">
          <h4 className="text-lg font-semibold ml-20 sm:ml-0">Creative Naksha Ghar</h4>
          <p className="text-sm mt-1 ml-5 sm:ml-0">
            Your trusted partner in home design and architecture.
          </p>
          <div className="mt-4 ml-28 mb-[-5px] sm:mb-0 sm:ml-0">
            <p className="text-sm font-semibold ">Call Us</p>
            <a href="tel:+919576862270" className="text-sm">
              +91 9576862270
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mb-6 sm:mb-0">
          <h5 className="font-semibold">Operating Hours:</h5>
          <p className="text-sm">Sunday Closed</p>
          <p className="text-sm">Monday - Saturday</p>
          <p className="text-sm">11:00 AM - 7:00 PM</p>
        </div>

        {/* Address */}
        <div className="mb-6 sm:mb-0">
          <h5 className="font-semibold ml-20 mb-2">Address:</h5>
          <p className="text-sm relative left-6">
            Ground Floor, Naya Tola, Kumhrar, <br />
            Kankarbagh Main Road, Patna-800026
          </p>
          <p className="text-sm relative left-6">Opp-Hp Petrol Pump</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/9576862270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>

        <div
      className="cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#000428] to-[#004e92] text-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-5"
      onClick={handleRedirect}
    >
      <h3 className="text-lg font-bold">Google Map</h3>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" style={{color:'red',paddingLeft:'15px'}} />

    </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Creative Naksha Ghar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


export default Footer;
