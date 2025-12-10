import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import './i18n'
import 'flowbite';
import { useTranslation } from 'react-i18next';

const App = () => {
      const { t } = useTranslation();

  return (
    <div>
        <marquee behavior="alternate" direction="left">
                    <h2 class="text-lg sm:text-2xl md:text-3xl font-bold">
                        {t("about.testsite")}
                    </h2>
                </marquee>

      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
