import React from "react";

const Gallery = () => {
  const images = [
    "../src/assets/gallery1.jpg",
    "../src/assets/gallery8.jpg",
    "../src/assets/gallery2.jpg",
    "../src/assets/gallery3.jpg",
    "../src/assets/gallery4.jpg",
    "../src/assets/gallery5.jpg",
    "../src/assets/gallery6.jpg",
    "../src/assets/gallery7.jpg",
    "../src/assets/gallery9.jpg",
    "../src/assets/gallery10.jpg",
    "../src/assets/gallery11.jpg",
    "../src/assets/gallery12.jpg",
    "../src/assets/gallery13.jpg",
   
  ];

  return (
    <div className="p-4 bg-gradient-to-r from-[#2b32b2] to-[#182848]">
      <h2 className="text-3xl font-bold text-center mb-5 mt-5 text-white">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg border-2 border-[#021526]">
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
