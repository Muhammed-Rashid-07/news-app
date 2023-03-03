import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { news } from '../constants';
import NavBar from './NavBar';

const NewsPage = () => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <section>
      <NavBar />
      <div className='lg:flex max-w-[100%] h-[400px] pt-[150px] justify-center mr-[50px]'>
        <div className='container'>
          <div className='row'>
            <div className='lg:flex flex-col lg:ml-72 sm:items-center'>
              <div className='row'>
                <h1 className='mb-10 text-[32px] font-black max-w-[500px]'>{news[from - 1].title}</h1>
                <img src={news[from - 1].img} className='w-[100%] m-auto mb-20' alt="" onClick={() => { console.log(news[from - 1].desc); }} />
                {news[from - 1].desc.map((data, index) => (
                  <div key={index}>
                    <p>{data.para1}</p> <br />
                    <p>{data.para2}</p>
                    <p>{data.para3}</p>
                    <p>{data.para4}</p>
                    <p>{data.para5}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
        <div className='mt-[15px] mr-[50px] lg:flex flex-col sm:items-center'>
          <h2 className='text-[32px]  mb-5'>Read This Next</h2>
          {news.map((data) => (
            <div key={data.id} className='max-w-[200px]  hover:animate-bounce px-5 py-6 rounded-md bg-dimBlue flex flex-col sm:items-center mb-5'>
              <Link to='/pages'  state={{from:`${data.id}`}} className='hover:text-blue-600'>
              <h1 >{data.id===from?'':data.title}</h1>
              </Link>
            </div>
          ))}


        </div>
      </div>


    </section>
  )
}

export default NewsPage
