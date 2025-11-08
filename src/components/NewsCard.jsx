import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Calendar, User, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'
import { Autoplay } from "swiper/modules";
import { setLastItem } from "../redux/lastDataSlice";


const NewsCard = () => {

  const { mainNews, industryNews, youthNews } = useSelector((state) => state.lastData)
  const lang = useSelector((state) => state.language.lang)
  const news = [mainNews, industryNews, youthNews].filter(Boolean)
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  const dispatch = useDispatch();
  const getProduct1 = async () => {
    try {
      const response = await fetch(
        `https://uzbekneftegaz-backend.onrender.com/api/localNews`
      );
      const result = await response.json();

      if (!response.ok) throw new Error(response.status);
      setData1(result.news);


      if (result.news?.length > 0) {
        const last = result.news[result.news.length - 1];

        dispatch(setLastItem({
          pageName: "youthNews",
          item: {
            ...last,
            category: "Sanoat yangiliklari",
            path: "youth/news"
          }
        }));
      }

    } catch (err) {
      console.error(err);
    }
  };
  const getProduct2 = async () => {
    try {
      const response = await fetch(
        `https://uzbekneftegaz-backend.onrender.com/api/industryNews`
      );
      const result = await response.json();
      if (!response.ok) throw new Error(response.status);
      setData2(result.news);
      if (result.news?.length > 0) {
        const last = result.news[result.news.length - 1];

        dispatch(setLastItem({
          pageName: "industryNews",
          item: {
            ...last,
            category: "Хотин кизлар",
            path: "/women/news"
          }
        }));
      }

    } catch (err) {
      console.error(err);
    }
  };

  const getProduct3 = async () => {
    try {
      const response = await fetch(
        `https://uzbekneftegaz-backend.onrender.com/api/news`
      );
      const result = await response.json();
      if (!response.ok) throw new Error(response.status);
      setData3(result.news);

      if (result.news?.length > 0) {
        const last = result.news[result.news.length - 1];

        dispatch(setLastItem({
          pageName: "mainNews",
          item: {
            ...last,
            category: "асосий янгиликлар",
            path: "/news"
          }
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    getProduct3()
    getProduct2()
    getProduct1()
  }, [])



  if (news.length === 0) {
    return <p className="text-center text-gray-500 mt-10">Yangiliklar mavjud emas</p>
  }

  console.log(news);

  return (
    <div className="grid gap-8">
      {news.map((item) => (
        <Link
          to={item.path}
          key={item._id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
              >

                {item.images?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={`https://uzbekneftegaz-backend.onrender.com/uploads/news/${img}`}
                      alt={`news-${i}`}
                      className="max-w-full min-h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Категория */}
              <div className="absolute z-50 top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold text-orange-600 group-hover:text-info transition-all duration-300">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Контент блока */}
            <div className="lg:w-2/3 p-6 lg:p-8">

              {/* Автор и дата */}
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

              {/* Заголовок */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition">
                {item.title?.[lang]}
              </h3>

              {/* Описание */}
              <p className="text-gray-600 mb-6 line-clamp-3">
                {item.content?.[lang]}
              </p>

              {/* Кнопка */}
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                Batafsil <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NewsCard
