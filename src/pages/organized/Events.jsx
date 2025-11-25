import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Clock, Users, Play } from "lucide-react";
import logo from "../../assets/minLogo.png";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EventsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const lang = useSelector((state) => state.language.lang || "uz");

  const getEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://uzneftegaz-backend-production.up.railway.app/api/tadbirlar/all"
      );
      const json = await res.json();

      const events = Array.isArray(json.tadbir)
        ? json.tadbir
        : json.tadbirlar || [];

      setData(events);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const [filter, setFilter] = useState("all");

  const uniqueCategories = Array.from(
    new Set(data.map((e) => e.category?.[lang]).filter(Boolean))
  );

  const filteredEvents =
    filter === "all"
      ? data
      : data.filter((e) => e.category?.[lang] === filter);

  return (
    <div className="min-h-screen max-w-[90%] mx-auto px-6">
      <div className="flex items-center gap-2 mt-8 mb-12">
        <img src={logo} alt="logo" />
        <h2 className="text-4xl font-bold text-info">Tadbirlar</h2>
      </div>

      {/* FILTERS */}
      <div className="bg-white sticky top-0 z-20 py-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-semibold ${filter === "all"
              ? "bg-info text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            Barchasi
          </button>

          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold ${filter === cat
                ? "bg-orange-400 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* EVENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-20 min-h-[300px]">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-info"></div>
          </div>
        ) : filteredEvents.length === 0 ? (
          <p className="text-gray-500 col-span-full">Tadbirlar topilmadi.</p>
        ) : (
          filteredEvents.map((event) => {
            const title = event.title?.[lang] || "";
            const description = event.description?.[lang] || "";
            const location = event.location?.[lang] || "";
            const category = event.category?.[lang] || "";

            return (
              <div
                key={event._id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-56">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="h-full"
                  >
                    {event.mediaType?.length ? (
                      event.mediaType.map((media, idx) => (
                        <SwiperSlide key={idx}>
                          {media.type === "video" ? (
                            <video
                              className="w-full h-full object-cover"
                              src={media.url}
                              controls
                            />
                          ) : (
                            <img
                              src={media.url}
                              className="w-full h-full object-cover"
                              alt={title}
                            />
                          )}
                        </SwiperSlide>
                      ))
                    ) : (
                      <SwiperSlide>
                        <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                          <span className="text-gray-400">Media yo'q</span>
                        </div>
                      </SwiperSlide>
                    )}
                  </Swiper>

                  <div className="absolute bottom-0 left-0 bg-black/60 px-4 py-1 text-white rounded-tr-2xl">
                    {category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{description}</p>

                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-orange-400" />
                      {event.date
                        ? new Date(event.date).toLocaleDateString("uz-UZ")
                        : "-"}
                    </div>

                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-orange-400" />
                      {event.time || "-"}
                    </div>

                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                      {location}
                    </div>

                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-orange-400" />
                      {event.users || 0} ishtirokchi
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
