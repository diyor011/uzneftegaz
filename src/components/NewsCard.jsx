import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Calendar, User, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'
import { Autoplay } from "swiper/modules";
import { setLastItem } from "../redux/lastDataSlice";
import { useTranslation } from "react-i18next";
  import 'aos/dist/aos.css';
  import AOS from 'aos';

const NewsCard = () => {
  const dispatch = useDispatch();
  const { mainNews, industryNews, youthNews } = useSelector((state) => state.lastData)
  const lang = useSelector((state) => state.language.lang)
  const { t } = useTranslation()

  const news = [mainNews, industryNews, youthNews].filter(Boolean)

  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);




  const getProduct = async (url, setData, pageName, categoryKey, path) => {
    try {
      const response = await fetch(url)
      const result = await response.json()
      if (!response.ok) throw new Error(response.status)
      setData(result.news)

      if (result.news?.length > 0) {
        const last = result.news[0]
        dispatch(setLastItem({
          pageName,
          item: {
            ...last,
            category: t(categoryKey),
            path
          }
        }))
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getProduct(
      "https://uzneftegaz-backend-production.up.railway.app/api/news",
      setData3,
      "mainNews",
      "home.homeCategoryCard1",
      "/news"
    )
    getProduct(
      "https://uzneftegaz-backend-production.up.railway.app/api/industryNews",
      setData2,
      "industryNews",
      "home.homeCategoryCard3",
      "/youth/news"

    )
    getProduct(
      "https://uzneftegaz-backend-production.up.railway.app/api/localNews",
      setData1,
      "youthNews",
      "home.homeCategoryCard2",
      "/women/news"
    )
  }, [t])

  if (news.length === 0) {
    return <p className="text-center text-gray-500 mt-10">{t("noNews", "Yangiliklar mavjud emas")}</p>
  }

  return (
    <div  className="grid gap-8">
      {news.map((item) => (
        <Link
          to={item.path}
          key={item._id}
          data-aos="fade-up"
          className=" bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="flex flex-col lg:flex-row">

            {/* 🖼️ Rasm qismi — universal va chiroyli */}
            <div className="lg:w-1/3  max-h-[250px]  relative overflow-hidden aspect-[16/9] lg:aspect-auto">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="h-full"
              >
                {item.images?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-full">
                      <img
                        src={img.url}
                        alt={`news-${i}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute z-50 top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md">
                <span className="text-sm font-semibold text-orange-600 group-hover:text-info transition-all duration-300">
                  {item.category}
                </span>
              </div>
            </div>

            {/* 📰 Matn qismi */}
            <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {item.author || "Admin"}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title?.[lang]}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.content?.[lang]}
                </p>
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all self-start">
                {t("readMore", "Batafsil")} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NewsCard
