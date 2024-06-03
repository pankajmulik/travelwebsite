import React from 'react'

const Cards = () => {
  return (
      <div className='m-4 h-8'>
          

          <div
              class="relative grid  w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div
                  class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSB7cZCpx3noEvrStUELq4OEb3M0ZqMBBp5dMNG68A5jA8YFVo6_Xt-UprMg-gCxkEb1I2d5N44D8wmoj2KbghMbv7Nxexaku5eJdihIg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div class="relative p-6 px-6 py-14 md:px-12">
                  <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                      Explore Beaches 
                  </h2>
                  <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                     explore joy of sea Beaches
                  </h5>
                  <img alt=""
                      src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSB7cZCpx3noEvrStUELq4OEb3M0ZqMBBp5dMNG68A5jA8YFVo6_Xt-UprMg-gCxkEb1I2d5N44D8wmoj2KbghMbv7Nxexaku5eJdihIg'
                      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
              </div>
          </div>  

    </div>
  )
}

export default Cards