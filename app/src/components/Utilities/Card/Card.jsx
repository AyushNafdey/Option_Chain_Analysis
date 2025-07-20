import React from 'react'

// const Card = ({ title, para, img }) => {
//     return (
//         <>
//             <div className="max-w-xs group rounded-t border-solid border-2 border-gray-300 overflow-hidden shadow-lg" id='services-1'>
//                 <div className='overflow-hidden'>
//                     <img className='w-full h-auto max-h-[170.92px] object-contain mx-auto' src={img} />
//                 </div>
//                 <p className='text-[20px] leading-[32px] text-center pt-2'>{title}</p>
//                 <p className='text-[16px] leading-[29px] text-gray-700 px-5 text-center pt-2'>{para}</p>
//             </div>

//         </>
//     )
// }

const Card = ({ title, para, img }) => {
    return (
        <div className="max-w-xs w-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out group">
            <div className="w-full h-[180px] overflow-hidden rounded-t-2xl">
                <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={img}
                    alt={title}
                />
            </div>
            <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 pt-2">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{para}</p>
            </div>
        </div>
    );
};


export default Card