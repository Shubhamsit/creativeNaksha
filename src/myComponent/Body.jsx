import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import TestimonialSection from './Testinomials';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Correctly importing the WhatsApp icon



function Body() {

  const imageUrls = [
    "/architectwork.jpg",
    "/design3d.jpg",
    "/interior.jpg",
    "/vastu.jpg",
    "/structural.jpg",
    "/plumbing.jpg"
  ];

  const imageName = [
    "Architectural Work",
    "3D Design",
    "Interior Design",
    "Vastu Conultant",
    "Structural Design",
    "Plumbing Work"
  ];

  const videos = [
    // YouTube Shorts link
    { link: 'https://www.youtube.com/watch?v=uFx1mrKwj2E' } ,
    { link: 'https://www.youtube.com/shorts/fRCAl8XJynU' },
    { link: 'https://www.youtube.com/shorts/tvNdcMqNQFI' },
    { link: 'https://www.youtube.com/shorts/pUGxsN2_KPI' },
    // Regular YouTube link
  ];

  // Function to extract video ID from the URL
  const getVideoId = (url) => {
    const urlParts = url.split('/');
    let videoId = urlParts[urlParts.length - 1]; // Last part is the ID
    // Check if it's a regular YouTube link
    if (url.includes('watch?v=')) {
      videoId = url.split('v=')[1]; // Extract from 'watch?v=' format
      const ampersandPosition = videoId.indexOf('&'); // Handle any additional parameters
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    }
    return videoId;
  };


  return (
    <div className="overflow-x-hidden"> 
      <div className='sm:flex sm:flex-row flex-col justify-start  sm:h-[800px] h-[500px]'>
        
        {/* Image Section */}
        <div className='sm:w-[50%] w-full bg-[#40DFEF]'>
          <img src="/architect.png" alt="Architect Design" className='w-full max-w-full object-cover  relative sm:top-28' />
        </div>

        {/* Text Section */}
        <div className='sm:w-[50%] bg-[#40DFEF] sm:h-[800px] h-[50%]'>
          <p className='text-left top-9 sm:top-[150px] left-20 relative text-[30px] sm:text-[50px] font-serif text-[#FEF9F2]'>
            Get Customised
            <br /> Home Plans With<br />
          </p>
          
          <p className='text-left top-9 sm:top-[150px] left-20 relative text-[30px] sm:text-[50px] font-serif text-[#0B192C]'>Creative Naksha <br /> Ghar</p> 

          <p className='text-left  text-[#0B192C] top-9 sm:top-[150px] left-16 relative text-[30px] sm:text-[20px] font-thin p-5 mt-5 hidden sm:block' >

          Welcome to Creative Naksha Ghar, where we provide 
          <br />ready-made architectural designs for homes and buildings. <br /> Our maps are creative, practical, and made to fit your needs. <br />Explore our designs and find the perfect plan <br /> for your dream space today!
          </p>
        </div>

        

      </div>


      <div className="overflow-hidden whitespace-nowrap">

        <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
      <p
        className="inline-block   sm:top-[150px] text-[20px] sm:text-[20px] font-bold font-mono text-[#021526]   sm:block"
        style={{
          animation: 'marquee 20s linear infinite',
          whiteSpace: 'nowrap',
          display: 'inline-block',
          paddingLeft: '30%', // Start the text off-screen
          position: 'relative',
        }}
      >
Welcome to Creative Naksha Ghar, where we provide
ready-made architectural designs for homes and buildings.
Our maps are creative, practical, and made to fit your needs.
Explore our designs and find the perfect plan
for your dream space today!
      </p>
    </div>

     
    


      <div className="bg-gradient-to-r from-[#000428] to-[#004e92] flex  sm:flex-row flex-col sm:justify-evenly  overflow-hidden ">


<div>

  <h2 className='font-sans text-left ml-16 sm:mt-8 mt-5 text-white font-bold text-3xl'>About Us</h2>

<p className='text-wrap ml-16 sm:mt-20  mt-5 mr-5 text-xl text-white font-sans'>


At Creative Naksha Ghar,
  <br /> we help you design the perfect home. <br />From home and structural design to interiors and 3D visuals,<br /> we make sure your space looks great and feels right. <br /> We also offer vastu consulting, plumbing, and other services to complete your project smoothly. <br />Our goal is to turn your ideas into reality, making sure your home is just the way you want it.

</p>



</div>



<div className='rounded'>

<img src="/cng1.jpg" alt=""  className=' w-[80%] h-[70%] mb-20 top-10 left-10  sm:w-[65%] sm:h-[60%]  overflow-hidden sm:top-20 relative sm:left-40 rounded-xl'/>


</div>


      </div>

      <h2 className='mt-14 relative left-[30%] sm:left-[40%] mb-5 font-bold text-3xl text-[#021526] '>
 Our Services

  </h2>


<div className='relative left- sm:hidden bg-gradient-to-r from-[#000428] to-[#004e92] h-[450px] '>



<Carousel className="w-[70%] max-w-xs ml-14 relative top-12">
  <CarouselContent>
    {imageUrls.map((imageUrl, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex-row aspect-square items-center justify-center p-6">
              <img src={imageUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
         <h2 className='text-center mt-5 font-bold font-mono text-xl'>{imageName[index]}</h2>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

</div>



<div  className='hidden sm:block bg-gradient-to-r from-[#000428] to-[#004e92] w-[100%] h-[380px] '>



<Carousel className="w-[70%]  relative left-[15%]  top-[17px]">
      <CarouselContent className="-ml-1 w-[100%]">
        {imageUrls.map((imageUrls,index)=> (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 w-60">
            <div className="p-1">
              <Card>
                <CardContent className="flex-row aspect-square items-center justify-center p-6">
                <img src={imageUrls} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                <h2 className='text-center mt-5 font-bold font-mono text-xl'>{imageName[index]}</h2>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>


<div className='relative top-20'>

<h2 className="text-3xl font-bold text-center mb-10 text-[#021526]">What Our Clients Say</h2>
<TestimonialSection/>

</div>


<div className="px-4 py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 ">
        
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          >
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${getVideoId(video.link)}`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 object-cover"
            ></iframe>
          </div>
        ))}
      </div>
    </div>


    </div>
  )
}

export default Body
