import React, { useState } from "react";
import {
  Calendar,
  User,
  Download,
  Share2,
  Eye,
  ChevronRight,
  FileText,
  Image,
  Video,
  Users,
  Award,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import logo from "../../assets/minLogo.png"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";



const Leadership = () => {
  const [data, Setdata] = useState([])
  const lang = useSelector((state) => state.language.lang);
  const getProduct = async () => {
    try {
      const response = await fetch(`https://uzbekneftegaz-backend-production.up.railway.app/api/leader`)
      const data = await response.json()
      Setdata(data.leaders)
      console.log(data.leaders)
      if (!response.ok) {
        throw new Error(response.status)
      }
    }
    catch (err) {
      console.error(err)
    }
  }
  const { t } = useTranslation();



  useEffect(() => {
    getProduct()

  }, [])




  return (
    <div className="max-w-[90%] mx-auto my-16 flex flex-col gap-8">
      <div
        className="flex items-center gap-2 mt-16
                "
      >
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold  text-info duration-300">
          {t("about.leadership")}
        </h2>
      </div>
      {data.map((item) => (
        <div
          key={item._id}
          className="bg-white max-h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
              <h3 className="text-4xl font-bold text-info mb-4">
                {item.fullName?.[lang]}
              </h3>
              <p className="text-orange-600 font-semibold mb-4 text-lg">
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
  );
};

export default Leadership;
