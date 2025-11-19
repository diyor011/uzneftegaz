import React, { useEffect, useState } from "react";
import { Trophy, Music, Users } from "lucide-react";
import logo from "../../assets/minLogo.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function SportCulturePage() {
  const [activeTab, setActiveTab] = useState("sport"); // toggle UI
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const lang = useSelector((state) => state.language.lang);
  const { t } = useTranslation();
  const GetPlans = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://uzneftegaz-backend-production.up.railway.app/api/sport/all"
      );
      const result = await response.json();
      setData(result.sports);
    } catch (error) {
      console.error("Error fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetPlans();
  }, []);

  // category bo'yicha filter
  const filteredData = data.filter((item) => {
    if (activeTab === "sport") {
      return item.category?.uz === "Спорт";
    } else if (activeTab === "culture") {
      return item.category?.uz === "Маданият";
    }
    return true;
  });

  return (
    <div className="min-h-screen mx-auto max-w-[90%] px-6">
      <div className="flex items-center gap-2 mt-8 mb-12">
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold text-info duration-300">
          {t("home.sport")}
          <span className="text-[#EE7427]">
            {" "}
            {t("home.va")} {t("home.culture")}
          </span>
        </h2>
      </div>

      {/* Toggle */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <button
          onClick={() => setActiveTab("sport")}
          className={`flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all ${
            activeTab === "sport"
              ? "bg-info text-white shadow-xl"
              : "bg-white text-gray-700 shadow-md"
          }`}
        >
          <Trophy className="w-6 h-6" />
          {t("home.sport")}
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
          {t("home.culture")}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-info"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredData.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {event.title?.[lang]}
                  </h3>
                  <p className="text-lg font-semibold text-gray-400 mb-4">
                    {event.description?.[lang]}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span>{event.place?.[lang]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Trophy className="w-5 h-5" />
                      <span>{event.athlete?.[lang]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
