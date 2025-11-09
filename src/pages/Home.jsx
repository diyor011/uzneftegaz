import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import NewsCard from '../components/NewsCard'
import logo from "../assets/minLogo.png"
import { useTranslation } from 'react-i18next'

const Home = () => {
        const { t } = useTranslation();
    return (
        <div className='mx-auto max-w-[90%]'>
            <Banner />

            <div>
                <div className='flex items-center gap-2 mt-16
                '>
                    <img src={logo} alt="" />
                    <h2 className='text-4xl font-bold  text-info duration-300'>    {t("home.aboutUs")} </h2>

                </div>


                <AboutUs />
            </div>


            <div className='flex items-center gap-2 mt-16 mb-16
                '>
                <img src={logo} alt="" />
                <h2 className='text-4xl font-bold  text-info duration-300'> {t("home.latestNews")}</h2>

            </div>

            <NewsCard />


        </div>
    )
}

export default Home