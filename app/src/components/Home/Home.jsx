import React from 'react'
import Card from '../Utilities/Card/Card'
import Navbar from '../Navbar/Navbar'
import home_image from '/images/home_image.png'
import real_time_oc from '/images/real_time_oc.png'
import smart_search from '/images/smart_search_new.png'
import smart_visual from '/images/smart_visual.png'
import strategy from '/images/strategy.png'
import Hero from '../Hero/Hero'

import { useNavigate } from 'react-router-dom'

const card_info = [
  {
    title: "Real-time option chain data",
    para: "Access live option chain updates with accurate pricing, strike levels, and volatility indicators for informed decision-making.",
    img: real_time_oc
  },
  {
    title: "Smart Filtering & Search",
    para: "Quickly filter contracts by expiry, strike price, option type (CE/PE), and open interest to focus on what matters most.",
    img: smart_search
  },
  {
    title: "Advanced Visualizations",
    para: "Get powerful, easy-to-understand charts and heatmaps to visualize market trends, OI buildups, and price action.",
    img: smart_visual
  },
  {
    title: "Strategy Assistance",
    para: "Integrated tools to assist with common strategies like Straddles, Strangles, Spreads, and more — tailored to market conditions.",
    img: strategy
  },

]

function Home() {

  const navigate = useNavigate()

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className='h-screen flex'>
        <div className='text-center m-auto'>
          <div className='flex flex-col gap-y-3'>
            <div className='justify-items-center'>
              <img className='w-[549px] h-[269.55px] ' loading='lazy' src={home_image} />
            </div>
            <h1 className='text-black text-[44px] leading-[55px]'>Option Chain Analysis</h1>
            <div className='flex flex-row gap-3'>
              <p className='text-[20px] leading-[27px] text-black font-semibold'>
                Smarter Option Trading Starts Here.
              </p>
              <p className='text-[20px] leading-[27px] text-black'>
                Unlock real-time insights with our advanced Option Chain Analysis platform.
              </p>
            </div>
          </div>
          <div className='pt-[30px]'>
            <button 
              className='bg-blue-600 hover:bg-blue-500 rounded-md p-4 text-[19px] leading-[23px] text-white font-semibold transition-all duration-100'
              onClick={() => navigate('/login')}>
                Sign Up for free
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <Hero/>

      { /* Features */}
      <div className="container mx-auto" id='services'>
        <div className="text-center">
          <h1 className='text-black text-[36px] leading-[48px]'>Features</h1>
        </div>
        {/* Cards */}
        <div className='flex w-full my-7 gap-x-6'>
          {
            card_info.map((item, index) => (
              <Card key={index} title={item.title} para={item.para} img={item.img} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home