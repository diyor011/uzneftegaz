import React, { useEffect, useState } from 'react';
import { Code, Palette, TrendingUp, Headphones, Shield, Briefcase, Users, ChevronDown } from 'lucide-react';
import logo from "../../assets/minLogo.png"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Departments() {
  const [expandedDept, setExpandedDept] = useState(null);
  const [data, setData] = useState([])
  const lang = useSelector((state) => state.language.lang);
  const getProduct = async () => {
    try {
      const response = await fetch(`https://uzbekneftegaz-backend-production.up.railway.app/api/bolimlar`)
      const data = await response.json()
      setData(data.bolimlar)
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
  const { t } = useTranslation();



  const departments = [
    {
      id: 1,
      name: "IT va Dasturlash Bo'limi",
      icon: <Code className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      head: "Sardor Tursunov",
      employees: 12,
      description: "Web va mobil ilovalar ishlab chiqish, texnik qo'llab-quvvatlash va innovatsion yechimlar yaratish.",
      responsibilities: [
        "Web saytlar va mobil ilovalar yaratish",
        "Texnik infratuzilmani boshqarish",
        "Xavfsizlik tizimlarini ta'minlash",
        "Yangi texnologiyalarni joriy qilish"
      ]
    },
    {
      id: 2,
      name: "Dizayn va Kreativ Bo'lim",
      icon: <Palette className="w-8 h-8" />,
      color: "from-orange-400 to-orange-500",
      head: "Madina Karimova",
      employees: 8,
      description: "Brending, grafik dizayn, UI/UX dizayn va vizual identifikatsiya yaratish.",
      responsibilities: [
        "Brend identifikatsiyasini yaratish",
        "UI/UX dizayn ishlari",
        "Marketing materiallari tayyorlash",
        "Ijodiy konsepsiyalarni ishlab chiqish"
      ]
    },
    {
      id: 3,
      name: "Marketing va SMM Bo'limi",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-cyan-400 to-cyan-600",
      head: "Jasur Alimov",
      employees: 10,
      description: "Raqamli marketing, ijtimoiy tarmoqlar va brendni rivojlantirish strategiyalari.",
      responsibilities: [
        "Marketing strategiyalarini ishlab chiqish",
        "Ijtimoiy tarmoqlarni boshqarish",
        "Reklama kampaniyalarini yuritish",
        "Kontent yaratish va tarqatish"
      ]
    },
    {
      id: 4,
      name: "Mijozlar Xizmati Bo'limi",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-orange-300 to-orange-500",
      head: "Dilnoza Sharipova",
      employees: 15,
      description: "24/7 mijozlar bilan ishlash, muammolarni hal qilish va qo'llab-quvvatlash.",
      responsibilities: [
        "Mijozlar bilan muloqot qilish",
        "Muammolarni tezkor hal qilish",
        "Feedback to'plash va tahlil qilish",
        "Mijozlar mamnuniyatini oshirish"
      ]
    },
    {
      id: 5,
      name: "Xavfsizlik va Nazorat Bo'limi",
      icon: <Shield className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      head: "Rustam Karimov",
      employees: 6,
      description: "Ma'lumotlar xavfsizligi, tizim monitoringi va risklar boshqaruvi.",
      responsibilities: [
        "Kiberxavfsizlikni ta'minlash",
        "Ma'lumotlarni himoya qilish",
        "Tizimlarni monitoring qilish",
        "Xavfsizlik auditini o'tkazish"
      ]
    },
    {
      id: 6,
      name: "Biznes Rivojlantirish Bo'limi",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
      head: "Aziz Rahimov",
      employees: 7,
      description: "Yangi loyihalar, hamkorliklar va biznes strategiyasini rivojlantirish.",
      responsibilities: [
        "Yangi biznes imkoniyatlarini izlash",
        "Hamkorliklar o'rnatish",
        "Strategik rejalashtirish",
        "Bozor tahlili va prognozlash"
      ]
    }
  ];

  return (
    <div className="min-h-screen max-w-[90%] mx-auto">


      <div className='flex items-center gap-2 mt-16
            mb-12    '>
        <img src={logo} alt="" />
        <h2 className='text-4xl font-bold  text-info duration-300'>Tarkibiy <span className='text-[#EE7427]'>Bo'limlar</span> </h2>

      </div>



      {/* Stats Overview */}



      <div className="  pb-20">
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
                      <h3 className="text-2xl font-bold mb-1">{dept.title?.[lang]}</h3>
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
                  <div className="text-sm text-gray-500 mb-1">Bo'lim rahbari:</div>
                  <div className="text-lg font-semibold text-gray-900">{dept.leader?.[lang]}</div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {dept.description?.[lang]}
                </p>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}