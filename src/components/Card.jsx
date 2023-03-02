import React from 'react'
import { paypal } from '../assets'
import { news } from '../constants'

const Card = () => {
    return (
        <section className='flex flex-col bg-gray-200 pt-[150px] px-52 items-center'>
            <h2 className='lg:mr-auto text-[42px] font-poppins mb-5 '>Editorails</h2>
            <div className='lg:grid grid-cols-3 mr-5 sm:flex-1 flex flex-col justify-start items-center'>
                {news.map((data,index) => (
                    <div className="w-[350px] h-[95%] rounded-[10px] overflow-hidden shadow-lg ml-5 border-[1px] border-solid object-contain border-grey-900 only:">
                        <img className="w-full h-[200px] cursor-pointer" src={data.img} alt="" />
                        <div className="px-6 py-4 max-h-[50%]">
                            <div className="font-bold font-poppins text-xl mb-2 hover:text-blue-600"><a href="/">{data.title}</a></div>
                        </div>
                        <div className="flex px-6 pt-4 pb-5">
                            <span className="inline-block font-poppins px-2 py-1 text-[12px] font-semibold text-gray-500  mb-2">{data.date}</span>
                            <span className="inline-block font-poppins px-2 py-1 text-[12px] font-semibold text-gray-500  mb-2">{data.duration}</span>
                        </div>
                    </div>

                ))}
            </div>


        </section>
    )
}

export default Card
