import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import NewsCard from '../components/NewsCard'
import BooksBlock from '../components/BlockBook' // Yangi component
import logo from "../assets/minLogo.png"
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom' // Navigation uchun
import Footer from '../components/Footer'

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBookClick = (bookId) => {
        navigate(`/books/${bookId}`); // yoki qaysi route bo'lsa
    };

    return (
        <div>
            <div className='mx-auto max-w-[90%]'>
                <Banner />

                <div>
                    <div className='flex items-center gap-2 mt-16'>
                        <img src={logo} alt="" />
                        <h2 className='text-4xl font-bold text-info duration-300'>
                            {t("home.aboutUs")}
                        </h2>
                    </div>
                    <AboutUs />
                </div>

                {/* Kitoblar bo'limi */}
                <div className='flex items-center gap-2 mt-16 mb-8'>
                    <img src={logo} alt="" />
                    <h2 className='text-4xl font-bold text-info duration-300'>
                        Kitoblar
                    </h2>
                </div>
                <BooksBlock onBookClick={handleBookClick} />

                {/* Yangiliklar bo'limi */}
                <div className='flex items-center gap-2 mt-16 mb-16'>
                    <img src={logo} alt="" />
                    <h2 className='text-4xl font-bold text-info duration-300'>
                        {t("home.latestNews")}
                    </h2>
                </div>
                <NewsCard />
            </div>
            <Footer />
        </div>
    )
}

export default Home