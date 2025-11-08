import React from "react";
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

const Documents = () => {
  const arr = [
    {
      id: 1,
      title: "O'zbekiston Respublikasi Prezidentining Farmoni",
      number: "PF-123",
      date: "15.10.2025",
      description:
        "Yoshlar siyosatini yanada rivojlantirish chora-tadbirlari to'g'risida",
      fileSize: "2.5 MB",
      format: "PDF",
    },
    {
      id: 2,
      title: "Vazirlar Mahkamasining Qarori",
      number: "QM-456",
      date: "10.10.2025",
      description:
        "Sport-sog'lomlashtirish tadbirlarini tashkil etish tartib-qoidalari",
      fileSize: "1.8 MB",
      format: "PDF",
    },
    {
      id: 3,
      title: "Ichki yo'riqnoma",
      number: "IY-789",
      date: "05.10.2025",
      description: "Xodimlar mehnat tartib-intizomini ta'minlash bo'yicha",
      fileSize: "856 KB",
      format: "DOCX",
    },
    {
      id: 3,
      title: "Ichki yo'riqnoma",
      number: "IY-789",
      date: "05.10.2025",
      description: "Xodimlar mehnat tartib-intizomini ta'minlash bo'yicha",
      fileSize: "856 KB",
      format: "DOCX",
    },
  ];
  return (
    <div className="max-w-[90%] mx-auto">
      <div
        className="flex items-center gap-2 mt-16
            mb-12    "
      >
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold  text-info duration-300">
          Me'yoriy <span className="text-[#EE7427]">Xujatlar</span>{" "}
        </h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        {arr.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    № {item.number} • {item.date}
                  </p>
                </div>
              </div>
              <div className="bg-blue-100 text-info px-3 py-1 rounded-full text-sm font-semibold">
                {item.format}
              </div>
            </div>

            <p className="text-gray-600 mb-4">{item.description}</p>

            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-sm text-gray-500">{item.fileSize}</span>
              <button className="bg-info hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all">
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
