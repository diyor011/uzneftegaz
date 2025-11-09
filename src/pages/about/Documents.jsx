import React, { useEffect, useState } from "react";
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
import logo from "../../assets/minLogo.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Documents = () => {
  const [data, Setdata] = useState([])
  const lang = useSelector((state) => state.language.lang);
  const getProduct = async () => {
    try {
      const response = await fetch(`https://uzbekneftegaz-backend-production.up.railway.app/api/normative/all`)
      const data = await response.json()
      Setdata(data.data)
      if (!response.ok) {
        throw new Error(response.status)
      }
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])



const handleDownload = async (file) => {
  try {
    const response = await fetch(`https://uzbekneftegaz-backend-production.up.railway.app/uploads/files/${file}`);
    if (!response.ok) throw new Error("Файл недоступен");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = file;
    a.click();

    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.log("Download failed:", err);
  }
};
  const { t } = useTranslation();


  return (
    <div className="max-w-[90%] mx-auto">
      <div
        className="flex items-center gap-2 mt-16
            mb-12    "
      >
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold  text-info duration-300">
            {t("about.documents")}
        </h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title?.[lang]}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.decree?.[lang]} {item.createdAt?.[lang]}
                  </p>
                </div>
              </div>
             
            </div>

            <p className="text-gray-600 mb-4">{item.description?.[lang]}</p>

            <div className="flex items-center justify-between pt-4 border-t">
              <button onClick={()=> handleDownload(item.file)} className="bg-info hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all">
                <Download className="w-4 h-4" />
              

                Yuklab olish
              
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
