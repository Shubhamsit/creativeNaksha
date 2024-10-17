import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: "Rahul Sharma",
    testimonial: "Creative Naksha Ghar transformed my home into a dream space! Their attention to detail is remarkable."
  },
  {
    name: "Sita Verma",
    testimonial: "I was impressed with their professionalism and creativity. My office design exceeded all my expectations."
  },
  {
    name: "Anil Kumar",
    testimonial: "They listened to my ideas and made them a reality. I couldn't be happier with my new living room!"
  },
  {
    name: "Priya Gupta",
    testimonial: "The team was very approachable and knowledgeable. They guided me through every step of the renovation."
  },
  {
    name: "Vikram Patel",
    testimonial: "Thanks to Creative Naksha Ghar, my workspace is both functional and beautiful. Highly recommend their services!"
  },
  {
    name: "Aditi Singh",
    testimonial: "Their designs are unique and stylish. My friends can't stop complimenting my new interior!"
  },
  {
    name: "Ravi Mehta",
    testimonial: "Creative Naksha Ghar provided exceptional service from start to finish. My house looks amazing!"
  },
  {
    name: "Neha Joshi",
    testimonial: "I love how they turned my small apartment into a cozy and stylish home. Truly a talented team!"
  }
];


const TestimonialSection = () => {
  const autoplay = Autoplay({ delay: 3000 }); // Set autoplay delay to 3 seconds
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="w-full mx-auto p-8 bg-gradient-to-r from-[#000428] to-[#004e92]">
    
      <div className="relative max-w-4xl mx-auto overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-6 py-4"
              style={{ minWidth: '100%' }}
            >
              <div className="p-6 bg-[#FFE5CF] shadow-lg rounded-lg">
                <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
       
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
