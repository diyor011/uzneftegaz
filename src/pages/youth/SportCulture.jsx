import React, { useState } from "react";
import { Trophy, Music, Calendar, Users } from "lucide-react";
import logo from "../../assets/minLogo.png";

export default function SportCulturePage() {
  const [activeTab, setActiveTab] = useState("sport");

  const sportEvents = [
    {
      title: "Respublika futbol chempionati",
      date: "15-20 May 2025",
      location: "Toshkent",
      participants: "500 sportchi",
    },
    {
      title: "Yengil atletika musobaqalari",
      date: "10-15 Iyun 2025",
      location: "Samarqand",
      participants: "300 sportchi",
    },
    {
      title: "Yoshlar olimpiadasi",
      date: "5-10 Sentabr 2025",
      location: "Buxoro",
      participants: "1000+ sportchi",
    },
    {
      title: "Basketbol turniri",
      date: "1-5 Oktabr 2025",
      location: "Farg'ona",
      participants: "200 sportchi",
    },
  ];

  const cultureEvents = [
    {
      title: "Milliy musiqa festivali",
      date: "20-25 Aprel 2025",
      location: "Toshkent",
      participants: "50 ijrochi",
    },
    {
      title: "Zamonaviy san'at ko'rgazmasi",
      date: "1-7 Iyul 2025",
      location: "Farg'ona",
      participants: "30 rassom",
    },
    {
      title: "Xalq san'ati festivali",
      date: "15-20 Avgust 2025",
      location: "Xiva",
      participants: "100+ ishtirokchi",
    },
    {
      title: "Yosh talantlar tanlovi",
      date: "10-15 Noyabr 2025",
      location: "Namangan",
      participants: "150 ishtirokchi",
    },
  ];

  const currentEvents = activeTab === "sport" ? sportEvents : cultureEvents;

  return (
    <div className="min-h-screen mx-auto max-w-[90%]  px-6">
      <div className="">
        <div
          className="flex items-center gap-2 mt-8
                                         mb-12    "
        >
          <img src={logo} alt="" />
          <h2 className="text-4xl font-bold  text-info duration-300">
            Sport<span className="text-[#EE7427]"> va Madaniyat</span>{" "}
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("sport")}
            className={`flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all ${
              activeTab === "sport"
                ? "bg-info text-white shadow-xl"
                : "bg-white text-gray-700 shadow-md"
            }`}
          >
            <Trophy className="w-6 h-6" />
            Sport
          </button>
          <button
            onClick={() => setActiveTab("culture")}
            className={`flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all ${
              activeTab === "culture"
                ? "bg-orange-400 text-white shadow-xl"
                : "bg-white text-gray-700 shadow-md"
            }`}
          >
            <Music className="w-6 h-6" />
            Madaniyat
          </button>
        </div>

        {/* Events List */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          2025-yil tadbirlari
        </h2>

        <div className="space-y-6">
          {currentEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {event.title}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Trophy className="w-5 h-5" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </div>
                <button
                  className={`px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 ${
                    activeTab === "sport"
                      ? "bg-info hover:bg-orange-400"
                      : "bg-orange-400 hover:bg-info"
                  }`}
                >
                  Batafsil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
