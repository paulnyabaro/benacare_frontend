import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <header className='shop-slider'>
        <div className="container">
            <div className="flex align-items-center">
                <div className="w-full lg:w-1/2 gap-x-32">
                  <h3>High-Demand Medical Equipment</h3>
                  <h1>Get <span className="text-green">30%</span> OFF</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam officiis, facere, magni minus id sed voluptates illum praesentium laborum fugit quibusdam!</p>

                  <div className="flex gap-4 mt-6">
                    <a href="" className="btn btn-blue">Purchase</a>
                    <a href="" className="btn btn-outline-blue">View Details</a>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 ">
                  <div className="image-container">
                    <img src="/img/hospital-bed.png" alt="" />
                  </div>
                </div>
            </div>
        </div>
      </header>
      <Footer />
    </div>
  )
}

export default page
