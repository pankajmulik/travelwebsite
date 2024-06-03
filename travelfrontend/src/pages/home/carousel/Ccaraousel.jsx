import React from 'react'
import { Carousel } from "@material-tailwind/react";
const Ccaraousel = () => {
  
  return (
      <div id='Caraousel'>
         
          <Carousel
              loop={true}
              autoplay={true}
              className="rounded-xl "
              navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2  ">
                      {new Array(length).fill("").map((_, i) => (
                          <span
                              key={i}
                              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                  }`}
                              onClick={() => setActiveIndex(i)}
                           />
                      ))}
                  </div>
              )}
          style={{height:'420px'}}>
              <img
                  src="https://www.nirmalatravels.com/wp-content/uploads/2022/12/ftrd-rajasthan-7-days-1080x675.jpg"
                  alt="image 1"
                  className="h-full w-full object-cover"
              />
              <img
                  src='/images/carousel1.jpg'
                  alt="image 3"
                  className="h-full w-full object-cover"
              />
              <img
                  src='https://w0.peakpx.com/wallpaper/842/231/HD-wallpaper-taj-mahal-india-tajmahal-tourism-india-asia-landmarks-mist.jpg'
                  alt="image 2"
                  className="h-full w-full object-cover"
              />
              <img
                  src='https://www.waootrips.in/uploaded_files/eb625805fe28a0.jpg'
                  alt="image 3"
                  className="h-full w-full object-cover"
              />


                </Carousel>

      </div>
  )
}

export default Ccaraousel