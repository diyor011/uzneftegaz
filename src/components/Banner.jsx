import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Banner = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);
    const lang = useSelector((state) => state.language.lang) || localStorage.getItem("lang") || "uz";

    const getBanner = async () => {
        try {
            const response = await fetch("https://uzneftegaz-backend-production.up.railway.app/api/banner");
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

    useEffect(() => {
        getBanner();
    }, []);

    // 🔥 Dynamic interval based on media type
    useEffect(() => {
        if (data.length === 0) return;

        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % data.length);
        }, data[current]?.mediaType === "video" ? 15000 : 4000);

        return () => clearTimeout(timer);
    }, [current, data]);

    if (loading) {
        return (
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-200 rounded-lg mt-4">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
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
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "opacity-0"
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

                    <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {data.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${i === current
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
                        onClick={() => setCurrent((prev) => (prev - 1 + data.length) % data.length)}
                        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrent((prev) => (prev + 1) % data.length)}
                        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
};

export default Banner;
