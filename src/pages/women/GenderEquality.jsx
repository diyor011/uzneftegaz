import React, { useEffect, useState } from "react";
import { BookOpen, Award } from "lucide-react";
import logo from "../../assets/minLogo.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function GenderEqualityPage() {
  const [genderData, setGenderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Mock language state - replace with your Redux selector
  const lang = useSelector((state) => state.language.lang);
  const { t } = useTranslation();

  const GetGenderEquality = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://uzneftegaz-backend-production.up.railway.app/api/gender/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setGenderData(data.gender);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetGenderEquality();
  }, []);

  // Mock logo - replace with your actual logo import

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-cyan-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-[90%] mx-auto">
        {/* Header Section */}
        <div
          className="flex items-center gap-2 mt-8
                                mb-12    "
        >
          <img src={logo} alt="" />
          <h2 className="text-4xl font-bold  text-info duration-300">
            {t("about.genderEquality")}
          </h2>
        </div>
        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {genderData.map((program, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  index % 2 === 0
                    ? "from-cyan-500 to-blue-500"
                    : "from-orange-500 to-red-500"
                }`}
              ></div>

              {/* Card content */}
              <div className="relative p-8">
                {/* Image container */}
                <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-inner">
                  <div className="aspect-video w-full  overflow-hidden">
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      src={
                        program.file ||
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                      }
                      alt={program.title?.[lang]}
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop";
                      }}
                    />
                  </div>

                  {/* Decorative corner badge */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      index % 2 === 0 ? "bg-cyan-500" : "bg-orange-500"
                    }`}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Text content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-orange-600 transition-all duration-300">
                    {program.title?.[lang] || "Dastur nomi"}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {program.description?.[lang] || "Dastur tavsifi"}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${
                  index % 2 === 0
                    ? "from-cyan-500 via-cyan-400 to-blue-500"
                    : "from-orange-500 via-orange-400 to-red-500"
                } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {genderData.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Ma'lumotlar topilmadi
            </h3>
            <p className="text-gray-600">Hozircha dasturlar mavjud emas</p>
          </div>
        )}
      </div>
    </div>
  );
}
