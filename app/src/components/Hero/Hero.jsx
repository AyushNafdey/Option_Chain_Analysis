import React from 'react'
import smart_trade from '/images/trade_smart.png'
import smart_trade_2 from '/images/trade_smart_2.png'

function Hero() {
    return (
        <>
            <div className="py-16 bg-white">
                <div className="max-w-screen-lg  mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                    {/* Left Side - Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                            Track. Analyze. Act.
                        </h1>
                        <p className="text-lg text-gray-500">
                            Empowering option traders with intelligent, data-driven decisions.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative w-full h-[280px] flex justify-center md:justify-end">
                        <img src={smart_trade} width={300} height={100} alt="Smart Trading" className="max-w-md object-contain rounded-xl absolute top-0 left-0 z-10" loading='lazy' />
                        <img src={smart_trade_2} width={300} height={100} alt="Smart Trading" className="max-w-md object-contain rounded-xl absolute top-20 left-20 opacity-40 z-0" loading='lazy' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero