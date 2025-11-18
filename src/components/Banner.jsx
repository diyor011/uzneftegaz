import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Banner = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const lang =
    useSelector((state) => state.language.lang) ||
    localStorage.getItem("lang") ||
    "uz";

  const getBanner = async () => {
    try {
      const response = await fetch(
        "https://uzneftegaz-backend-production.up.railway.app/api/banner"
      );
      if (!response.ok) throw new Error(response.status);
      const json = await response.json();
      setData(json.banners || []);
    } catch (err) {
      console.error("Banner fetch error:", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };
  const SwiperSkeleton = () => {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden mt-4 relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        {/* Banner content skeleton */}
        <div className="relative h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl w-full space-y-6">
            {/* Main title skeleton */}
            <div className="space-y-3">
              <div className="h-8 md:h-12 lg:h-16 bg-gray-300/70 rounded-lg w-3/4 mx-auto" />
              <div className="h-8 md:h-12 lg:h-16 bg-gray-300/70 rounded-lg w-2/3 mx-auto" />
            </div>

            {/* Subtitle skeleton */}
            <div className="space-y-2 pt-4">
              <div className="h-4 md:h-5 bg-gray-300/60 rounded w-5/6 mx-auto" />
              <div className="h-4 md:h-5 bg-gray-300/60 rounded w-4/6 mx-auto" />
            </div>

            {/* CTA buttons skeleton */}
            <div className="flex justify-center space-x-4 pt-6">
              <div className="h-12 md:h-14 bg-gray-300/70 rounded-lg w-32 md:w-40" />
              <div className="h-12 md:h-14 bg-gray-300/70 rounded-lg w-32 md:w-40" />
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300/30 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-300/30 rounded-full blur-2xl" />
      </div>
    );
  };

  useEffect(() => {
    getBanner();
  }, []);

  // 🔥 Dynamic interval based on media type
  useEffect(() => {
    if (data.length === 0) return;

    const timer = setTimeout(
      () => {
        setCurrent((prev) => (prev + 1) % data.length);
      },
      data[current]?.mediaType === "video" ? 15000 : 4000
    );

    return () => clearTimeout(timer);
  }, [current, data]);

  if (loading) {
    return (
      <div className="flex gap-4">
        <SwiperSkeleton />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-100 rounded-lg mt-4">
        <p className="text-gray-500 text-lg">Banner mavjud emas</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg mt-4 bg-gray-900">
      {data.map((item, i) => (
        <div
          key={item._id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            {item.mediaType === "image" ? (
              <img
                src={`${item.file}`}
                alt={item.title[lang] || item.title.uz}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={`${item.file}`}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="absolute  inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 max-w-4xl drop-shadow-lg">
              {item.title[lang] || item.title.uz}
            </h2>
            <p className="max-w-2xl mb-4 md:mb-6 text-base md:text-lg lg:text-xl drop-shadow-md">
              {item.description[lang] || item.description.uz}
            </p>
            {/* <Link to={'/news'}>
                            <button className="px-5 py-2.5 md:px-6 md:py-3 bg-[#EE7427] hover:bg-[#008ec2] rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                {lang === "ru"
                                    ? "Подробнее"
                                    : lang === "kr"
                                        ? "Батафсил"
                                        : "Batafsil"}
                            </button>
                        </Link> */}
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 ">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-8 md:w-10"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      {data.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + data.length) % data.length)
            }
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm "
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % data.length)}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm "
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default Banner;
