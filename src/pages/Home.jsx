import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import NewsCard from '../components/NewsCard'
import logo from "../assets/minLogo.png"

const Home = () => {
    return (
        <div className='mx-auto max-w-[90%]'>
            <Banner />

            <div>
                <div className='flex items-center gap-2 mt-16
                '>
                    <img src={logo} alt="" />
                    <h2 className='text-4xl font-bold  text-info duration-300'>Biz <span className='text-[#EE7427]'>Xaqimizda</span> </h2>

                </div>


                <AboutUs />
            </div>


            <div className='flex items-center gap-2 mt-16 mb-16
                '>
                <img src={logo} alt="" />
                <h2 className='text-4xl font-bold  text-info duration-300'>Songi <span className='text-[#EE7427]'>Yangiliklar</span> </h2>

            </div>

            <NewsCard />


        </div>
    )
}

export default Home