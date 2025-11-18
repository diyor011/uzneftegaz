import React, { useState } from "react";
import { Calendar, MapPin, Clock, Users, Play } from "lucide-react";
import logo from "../../assets/minLogo.png"
export default function EventsPage() {
  const [filter, setFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Yosh tadbirkorlar forumi",
      date: "2025-12-05",
      time: "10:00",
      location: "Toshkent, Forum saroysi",
      type: "forum",
      participants: 500,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      description:
        "Yosh tadbirkorlar uchun davlat tomonidan qo'llab-quvvatlanadigan forum",
    },
    {
      id: 2,
      title: "Raqamli texnologiyalar ko'rgazmasi",
      date: "2025-11-25",
      time: "09:00",
      location: "Toshkent, Xalqaro savdo markazi",
      type: "exhibition",
      participants: 1200,
      video: true,
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop",
      description: "Zamonaviy raqamli yechimlar va innovatsiyalar namoyishi",
    },
    {
      id: 3,
      title: "Ta'lim sohasida islohotlar konferensiyasi",
      date: "2025-12-10",
      time: "14:00",
      location: "Samarqand, Universitet majmuasi",
      type: "conference",
      participants: 300,
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop",
      description: "Ta'lim tizimidagi zamonaviy yondashuvlar muhokamasi",
    },
    {
      id: 4,
      title: "Milliy sport o'yinlari",
      date: "2025-12-15",
      time: "11:00",
      location: "Andijon, Sport majmuasi",
      type: "sport",
      participants: 800,
      video: true,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop",
      description: "Viloyatlararo sport musobaqalari va tadbirlar",
    },
    {
      id: 5,
      title: "Madaniy meros festivali",
      date: "2025-11-30",
      time: "16:00",
      location: "Buxoro, Tarixiy markaz",
      type: "festival",
      participants: 2000,
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop",
      description: "O'zbek madaniyati va san'atini targ'ib qilish festivali",
    },
    {
      id: 6,
      title: "Ekologiya va atrof-muhit seminar",
      date: "2025-12-20",
      time: "10:30",
      location: "Namangan, Ekologiya markazi",
      type: "seminar",
      participants: 150,
      video: true,
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
      description: "Ekologik muammolar va yechimlar bo'yicha seminar",
    },
  ];

  const filteredEvents =
    filter === "all" ? events : events.filter((e) => e.type === filter);
  // <h1 className="text-5xl font-bold mb-4">Davlat Tadbirlari</h1>

  return (
    <div className="min-h-screen max-w-[90%] mx-auto">
      <div
        className="flex items-center gap-2 mt-8
             mb-12    "
      >
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold  text-info duration-300">
          Tadbirlar
        </h2>
      </div>

      {/* Filter Section */}
      <div className="bg-white sticky top-0 z-10">
        <div className=" mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "all"
                  ? "bg-orange-400 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Barchasi
            </button>
            <button
              onClick={() => setFilter("forum")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "forum"
                  ? "bg-orange-400 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Forumlar
            </button>
            <button
              onClick={() => setFilter("conference")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "conference"
                  ? "bg-orange-400 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Konferensiyalar
            </button>
            <button
              onClick={() => setFilter("exhibition")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "exhibition"
                  ? "bg-orange-400 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Ko'rgazmalar
            </button>
            <button
              onClick={() => setFilter("sport")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "sport"
                  ? "bg-orange-400 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Sport
            </button>
            <button
              onClick={() => setFilter("festival")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "festival"
                  ? "bg-orange-400 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Festivallar
            </button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image with Video Badge */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {event.video && (
                  <div className="absolute top-4 right-4 bg-orange-400 text-white p-3 rounded-full shadow-lg">
                    <Play size={24} />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="bg-info text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {event.type === "forum"
                      ? "Forum"
                      : event.type === "conference"
                      ? "Konferensiya"
                      : event.type === "exhibition"
                      ? "Ko'rgazma"
                      : event.type === "sport"
                      ? "Sport"
                      : "Festival"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-3 text-orange-400" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString("uz-UZ", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-3 text-orange-400" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-3 text-orange-400" />
                    <span className="text-sm">
                      {event.participants} ishtirokchi
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-info text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Batafsil ma'lumot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );
}
