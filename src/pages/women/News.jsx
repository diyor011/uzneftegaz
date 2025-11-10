import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import logo from "../../assets/minLogo.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLastItem } from "../../redux/lastDataSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function IndustryNewsPage() {
  const [hoveredNews, setHoveredNews] = useState(null);
  const [data, setData] = useState([]);
  const lang = useSelector((state) => state.language.lang);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const response = await fetch(
        `https://uzbekneftegaz-backend-production.up.railway.app/api/localNews`
      );
      const result = await response.json();
      if (!response.ok) throw new Error(response.status);
      setData(result.news);
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

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12 lg:px-20">
      <div className="flex items-center gap-2 mt-8 mb-12">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <h2 className="text-4xl font-bold text-info">{t("about.news")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={item._id}
            onMouseEnter={() => setHoveredNews(item._id)}
            onMouseLeave={() => setHoveredNews(null)}
            className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${index === 0 ? "md:col-span-2" : ""
              }`}
          >
            <div className="relative overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="w-full"
              >
             {item.images?.length > 0 ? (
  item.images.map((img, i) => (
    <SwiperSlide key={i}>
      <img
        src={img.url}
        alt={item.title?.[lang]}
        className={`w-full object-cover transition-transform duration-500 ${
          index === 0 ? "h-80" : "h-60"
        } ${hoveredNews === item._id ? "scale-110" : "scale-100"}`}
      />
    </SwiperSlide>
  ))
) : (
  <SwiperSlide>
    <img
      src={item.images?.url}
      alt={item.title?.[lang]}
      className={`w-full object-cover ${index === 0 ? "h-80" : "h-60"}`}
    />
  </SwiperSlide>
)}

              </Swiper>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(item.createdAt).toLocaleDateString("uz-UZ", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-700 transition-colors cursor-pointer">
                {item.title?.[lang]}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.description?.[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
