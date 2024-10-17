import React from "react";

const Gallery = () => {
  const images = [
    "/gallery1.jpg",
    "/gallery8.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery9.jpg",
    "/gallery10.jpg",
    "/gallery11.jpg",
    "/gallery12.jpg",
    "/gallery13.jpg",
   
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
