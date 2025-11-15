import React, { use, useEffect, useState } from "react";
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
  const [data, setData] = useState([]);
  const [hoveredNews  , setHoveredNews] = useState(null);
  const lang = useSelector((state) => state.language.lang);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://uzneftegaz-backend-production.up.railway.app/api/localNews`
      );
      const result = await response.json();
      if (!response.ok) throw new Error(response.status);
      setData(result.news);
      console.log(result.news);
      if (result.news?.length > 0) {
        const last = result.news[result.news.length - 1];

        dispatch(
          setLastItem({
            pageName: "industryNews",
            item: {
              ...last,
              category: "Хотин кизлар",
              path: "/women/news",
            },
          })
        );
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="min-h-screen mx-auto max-w-[90%] px-6 ">
      <div className="flex items-center gap-2 mt-8 mb-12">
        <img src={logo} alt="logo" />
        <h2 className="text-4xl font-bold text-info">{t("about.news")}</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-info"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={item._id}
              onMouseEnter={() => setHoveredNews(item._id)}
              onMouseLeave={() => setHoveredNews(null)}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  className="w-full"
                >
                  {item.mediaType?.length > 0 ? (
                    item.mediaType.map((media, i) => (
                      <SwiperSlide key={i}>
                        {media.type === "image" ? (
                          <img
                            src={media.url}
                            alt={item.title?.[lang]}
                            className={`w-full object-cover transition-transform duration-500 ${
                              index === 0 ? "h-80" : "h-60"
                            } ${
                              hoveredNews === item._id
                                ? "scale-110"
                                : "scale-100"
                            }`}
                          />
                        ) : (
                          <video
                            src={media.url}
                            controls
                            className={`w-full object-cover ${
                              index === 0 ? "h-80" : "h-60"
                            }`}
                            preload="metadata"
                          />
                        )}
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <img
                        src={logo} // fallback rasm
                        alt={item.title?.[lang]}
                        className={`w-full object-cover ${
                          index === 0 ? "h-80" : "h-60"
                        }`}
                      />
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {item.createdAt && (
                      <span>
                        {new Date(item.createdAt).toLocaleDateString("uz-UZ", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          timeZone: "Asia/Tashkent",
                        })}
                      </span>
                    )}
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
      )}
    </div>
  );
}
