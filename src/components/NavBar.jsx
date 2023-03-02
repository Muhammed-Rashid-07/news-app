import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { menu, close } from '../assets'
import { navLink } from '../constants'

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex h-[6.5rem] items-center bg-white text-dimwhite justify-evenly text-[20px] fixed'>
            <a href='/'>
                <img src="https://img.freepik.com/premium-vector/news-soon-logo_720688-25.jpg?w=2000" className='w-[150px] h-[104px]' alt="" />
            </a>

            <ul className='list-none sm:flex hidden px-10'>
                {navLink.map((data) => (
                    <li key={data.id} className='ml-10 font-poppins'>
                        <a href='/'>{data.title}</a></li>
                ))}

            </ul>
            <a href='#' className='font-bold sm:flex hidden'>Login</a>

            <div className='sm:hidden flex flex-1 justify-end items-center mr-[20px]'>
                <img src={toggle ? close : menu} alt="menu" className='w-[50px] h-[50px] object-contain' onClick={() => { setToggle(prev => !prev) }} />
                <div className={`${toggle ? 'flex' : 'hidden'} mt-[60px] bg-dimWhite p-6 absolute top-10 right-0  my-10 w-full rounded-xl sidebar z-[10px]`}>
                    <ul className='list-none flex flex-col justify-start items-start flex-1'>
                        {navLink.map((data, index) => (
                            <li className={`font-normal font-poppins
                            cursor-pointer mr-10 text-[20px] ${index === navLink.length ? 'mb-0' : 'mb-4  '}`} key={data.id}>
                                <a href={`${data.id}`} className='text-black'>{data.title}</a>
                            </li>
                        ))}
                        <li className='font-normal text-[20px] font-poppins mr-[35px] '>
                            <a href='/' className='font-bold'>Login</a></li>
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default NavBar
