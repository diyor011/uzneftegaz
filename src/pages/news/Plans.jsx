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

export default function PlansReportsPage() {
  const lang = useSelector((state) => state.language.lang);
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Icon mapping object
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
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
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

  const [activeYear, setActiveYear] = useState("2025");

  return (
    <div className="min-h-screen py-12 max-w-[90%] mx-auto">
      <div className="flex items-center gap-2 mt-8 mb-12">
        <img src={logo} alt="Logo" />
        <h2 className="text-4xl font-bold text-info duration-300">
          {t("home.plansAndReports")}
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-info"></div>
        </div>
      ) : (
        /* Plans/Reports Grid */
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((plan) => {
            // Get icon component from iconMap, default to Calendar if not found
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
                    } rounded-xl flex items-center justify-center flex-shrink-0`}
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
                  <span>{plan.category?.[lang]}</span>
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
    </div>
  );
}
