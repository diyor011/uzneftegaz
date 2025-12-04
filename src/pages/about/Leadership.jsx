import React, { useState } from "react";
import {
  Calendar,
  Phone,
  Mail,
  ChevronLeft
} from "lucide-react";
import logo from "../../assets/minLogo.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Leadership = () => {
  const [data, Setdata] = useState([]);
  const [loading, Setloading] = useState(false);
  const lang = useSelector((state) => state.language.lang);
  const getProduct = async () => {
    Setloading(true);
    try {
      const response = await fetch(
        `https://uzneftegaz-backend-production.up.railway.app/api/leader`
      );
      const data = await response.json();
      Setdata(data.leaders.reverse());
      console.log(data.leaders);
      if (!response.ok) {
        throw new Error(response.status);
      }
      Setloading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const { t } = useTranslation();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-[90%] mx-auto  flex flex-col gap-8 px-6 mb-12">
      <div
        className="flex justify-center gap-2 mt-8 flex-col
                "
      >
        <div className="flex items-center">
          <img src={logo} alt="" />
          <h2 className="text-4xl font-bold  text-info duration-300">
            {t("about.leadership")}
          </h2>
        </div>
        <Link to={'/'} className="flex items-center px-2 ">
          <ChevronLeft className="text-info text-4xl" />
           <p className="text-info font-bold"> {t("home.back")}</p>
          
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-info"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white min-h-[400px] lg:max-h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-blue-500 to-blue-600 relative">
                  <img
                    src={`${item.avatar}`}
                    alt={item.fullName?.uz}
                    className="  object-cover shadow w-full h-full"
                  />
                </div>

                {/* Info */}
                <div className="md:w-2/3 p-6 lg:p-8">
                  <h3 className="text-lg mb-2  lg:text-4xl font-bold text-info lg:mb-4">
                    {item.fullName?.[lang]}
                  </h3>
                  <p className="text-orange-600 text-md font-semibold lg:mb-4 lg:text-lg">
                    {item.grade?.[lang]}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>{item.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>{item.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <span>{item.workDays?.[lang]}</span>
                        <span>{item.workHours?.[lang]}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 bg-blue-50 p-2 rounded-lg border-l-4 border-blue-500">
                    {item.description?.[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leadership;
