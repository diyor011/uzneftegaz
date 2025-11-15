import React, { useEffect, useState } from "react";
import {
  Code,
  Palette,
  TrendingUp,
  Headphones,
  Shield,
  Briefcase,
  Users,
  ChevronDown,
} from "lucide-react";
import logo from "../../assets/minLogo.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Departments() {
  const [expandedDept, setExpandedDept] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const lang = useSelector((state) => state.language.lang);
  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://uzneftegaz-backend-production.up.railway.app/api/bolimlar`
      );
      const data = await response.json();
      setData(data.bolimlar);
      if (!response.ok) {
        throw new Error(response.status);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen max-w-[90%] mx-auto px-6">
      <div
        className="flex items-center gap-2 mt-8
            mb-12    "
      >
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold  text-info duration-300">
          Tarkibiy <span className="text-[#EE7427]">Bo'limlar</span>{" "}
        </h2>
      </div>

      {/* Stats Overview */}

      <div className="  pb-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-info"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {data.map((dept) => (
              <div
                key={dept._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Department Header */}
                <div className={`bg-info p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {dept.title?.[lang]}
                        </h3>
                        <div className="flex items-center text-sm opacity-90">
                          <Users className="w-4 h-4 mr-1" />
                          {dept.employees?.uz}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Department Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">
                      Bo'lim rahbari:
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {dept.leader?.[lang]}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {dept.description?.[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
