import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-[#40DFEF]">
      
      {/* Founder Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-r from-[#000428] to-[#004e92] shadow-lg rounded-lg p-6 w-full md:w-2/3">
        <img
          src="../public/aditya.jpg" // Replace with the actual photo
          alt="Aditya Kumar Bilamb"
          className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-0"
        />
        <div className="md:ml-6 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Er.Aditya Kumar Bilamb</h2>
          <p className="text-white mt-2 font-semibold">Founder & Engineer</p>
          <p className="text-white mt-4 font-serif">
           Aditya Kumar Bilamb is an expert engineer with over 6 years of experience and Completed 250+ Projects in the field, specializing in
            home design, structural engineering, and interior solutions.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col bg-gradient-to-r from-[#000428] to-[#004e92] shadow-lg rounded-lg p-6 mt-8 w-full md:w-2/3">
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
        <div className="flex flex-col space-y-2">
          <p className="text-white">
            <strong>Email:</strong> eradityakrbilamb@gmail.com
          </p>
          <p className="text-white">
            <strong>Phone:</strong> +91 9576862270
          </p>
          <p className="text-white">
            <strong>Address:</strong> Creative Naksha Ghar, Ground Floor, Naya Tola Kumhrar, Main Road , Opp- HP Petrol Pump , Patna-800026
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
