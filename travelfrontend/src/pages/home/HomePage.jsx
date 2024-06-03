import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Lottie from 'lottie-react'
import carstravel from '../../lotte/assests/carstravel.json'
import Ccarousel from './carousel/Ccaraousel'
import { Carousel } from "@material-tailwind/react";
import Cards from './cards/Cards'
const HomePage = () => {
  return (
    <div className=' w-full h-auto'>
      <div className='w-full h-10 mb-4 grid grid-cols-1 '>
        <Navbar />
      </div>

      <div className='h-screen' style={{ backgroundImage: 'url("")' }}>
        <div className="homepage-content  text-center py-2 " >

          <div className="homepage-input-div w-full m-auto w-30   ">

            <div className=' '>

              <div  >
                <input type="text" name="search-input" id="search-input" className='m-2 border-1 ' placeholder='Enter destination' />

              
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Serch</button>

              </div>
            </div>
            

           
          </div>


          <div className='mt-5 '>
            <Lottie animationData={carstravel} className=' h-10' />
          </div>



        </div>
        <div style={{ height: '500px', objectFit: 'fill', margin: '0px 6px' }}>
          <Ccarousel />
        </div>
        <div className='text-center text-gray-200 w-full overflow-hidden'>
          <h2 className='text-3xl text-deep-purple-900'>
            Book your holidays with us..
          </h2>

          <Carousel className='h-16 text-gray-900' style={{ padding: '2px', fontSize: '14px' }} >

            <div>
              <h2>
                Attractive Locations
              </h2>
            </div>
            <div>
              <h2>
                24x7 support
              </h2>
            </div>

            <div>

              <h2>
                Cheap prices
              </h2>

            </div>

          </Carousel>

        </div>
      </div>


      <div>
        <Cards/>
      </div>
      


    </div>
  )
}

export default HomePage