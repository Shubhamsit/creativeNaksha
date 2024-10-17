import React from 'react';

const OurWork = () => {
  const projects = [
    { imgSrc: '/our1.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our2.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our3.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our4.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our5.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our6.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our7.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our8.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our9.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our10.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our11.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our12.jpg' }, // Replace with actual image URLs
    { imgSrc: '/our13.jpg' }, // Replace with actual image URLs
    { imgSrc: '/gallery9.jpg' }, // Replace with actual image URLs
    { imgSrc: '/gallery10.jpg' }, // Replace with actual image URLs
    { imgSrc: '/gallery11.jpg' }, // Replace with actual image URLs
 
 
  ];

  return (
    <div className="px-4 py-12 bg-gradient-to-r from-[#2b32b2] to-[#182848]">
      <h2 className="text-4xl font-bold text-center mb-8 text-white hover:text-[#10375C]">
        Our Work
      </h2>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 border-2 border-[#021526]"
          >
            <img
              src={project.imgSrc}
              alt={`Project ${index + 1}`}
              className="w-full h-64 object-cover transition-all duration-500 ease-in-out group-hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
