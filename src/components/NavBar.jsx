import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { menu, close } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex h-[6.5rem] items-center  text-dimwhite justify-evenly text-[20px]'>
            <a href="/">
                <img src="https://img.freepik.com/premium-vector/news-soon-logo_720688-25.jpg?w=2000" className='w-[200px]' alt="" />
            </a>

            <ul className='list-none sm:flex hidden px-10'>
                {navLinks.map((link) => (
                    <li key={link.id} className='ml-10 font-poppins'>
                        <a href="/">{link.title}</a></li>
                ))}

            </ul>
            <a href="#" className='font-bold sm:flex hidden'>Login</a>

            <div className='sm:hidden flex flex-1 justify-end items-center mr-[20px]'>
                <img src={toggle ? close : menu} alt="menu" className='w-[50px] h-[50px] object-contain' onClick={() => { setToggle(prev => !prev) }} />
                <div className={`${toggle ? 'flex' : 'hidden'} mt-[60px] bg-dimWhite p-6 absolute top-10 right-0  my-10 w-full rounded-xl sidebar z-[10px]`}>
                    <ul className='list-none flex flex-col justify-start items-start flex-1'>
                        {navLinks.map((links, index) => (
                            <li className={`font-normal font-poppins
                            cursor-pointer mr-10 text-[20px] ${index === navLinks.length ? 'mb-0' : 'mb-4  '}`} key={links.id}>
                                <a href={`#${links.id}`} className='text-black'>{links.title}</a>
                            </li>
                        ))}
                        <li className='font-normal text-[20px] font-poppins mr-[35px] '>
                            <a href="#" className='font-bold'>Login</a></li>
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default NavBar
