import React, { useEffect, useState } from "react";
import {
  Calendar,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";
import logo from "../../assets/minLogo.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const CategoryEnum = {
  PLAN: "plan",
  REPORT: "report",
};

export default function PlansReportsPage() {
  const lang = useSelector((state) => state.language.lang);
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const iconMap = {
    Award,
    GraduationCap,
    Globe,
    Users,
    Briefcase,
    Calendar,
  };

  const GetPlans = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://uzneftegaz-backend-production.up.railway.app/api/plansReports"
      );
      const result = await response.json();
      setData(result.reports);
    } catch (error) {
      console.error("Error fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetPlans();
  }, []);

  // === ACTIVE CATEGORY ===
  const [activeCategory, setActiveCategory] = useState(CategoryEnum.PLAN);

  const filteredData = data.filter((item) => {
    const cat = item.category?.[lang]; // uz, ru, oz bo'yicha
    if (!cat) return false;

    if (activeCategory === CategoryEnum.PLAN) {
      return ["Reja", "Режа", "План"].includes(cat);
    }

    if (activeCategory === CategoryEnum.REPORT) {
      return ["Hisobot", "Отчет"].includes(cat);
    }

    return false;
  });

  return (
    <div className="min-h-screen py-12 max-w-[90%] mx-auto">
      <div className="flex items-center gap-2 mt-8 mb-12">
        <img src={logo} alt="Logo" />
        <h2 className="text-4xl font-bold text-info duration-300">
          {t("home.plansAndReports")}
        </h2>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setActiveCategory(CategoryEnum.PLAN)}
          className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
            activeCategory === CategoryEnum.PLAN
              ? "bg-info text-white shadow-xl scale-105"
              : "bg-white text-gray-700 shadow-md hover:shadow-lg"
          }`}
        >
          Reja
        </button>

        <button
          onClick={() => setActiveCategory(CategoryEnum.REPORT)}
          className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
            activeCategory === CategoryEnum.REPORT
              ? "bg-orange-400 text-white shadow-xl scale-105"
              : "bg-white text-gray-700 shadow-md hover:shadow-lg"
          }`}
        >
          Hisobot
        </button>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-info"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredData.map((plan) => {
            const IconComponent = iconMap[plan.icon] || Calendar;

            return (
              <div
                key={plan._id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-16 h-16 ${
                      plan.color || "bg-info"
                    } rounded-xl flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-gray-500">
                        {plan.startMonth?.[lang]} - {plan.endMonth?.[lang]}
                      </span>
                      {plan.status && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                          {plan.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800">
                      {plan.title?.[lang]}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {plan.description?.[lang]}
                </p>

                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <span>{plan.participantsCount}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && filteredData.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">
            Bu kategoriya uchun hozircha maʼlumot yo‘q
          </p>
        </div>
      )}
    </div>
  );
}
