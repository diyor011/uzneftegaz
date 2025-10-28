import React, { useState } from 'react';
import { Code, Palette, TrendingUp, Headphones, Shield, Briefcase, Users, ChevronDown } from 'lucide-react';

export default function Departments() {
  const [expandedDept, setExpandedDept] = useState(null);

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
    <div className="min-h-screen bg-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">Tarkibiy Bo'limlar</h1>
          </div>
          <p className="text-center text-xl opacity-90 max-w-3xl mx-auto">
            Kompaniyamiz {departments.length} ta professional bo'limdan iborat.
            Har bir bo'lim o'z sohasida mutaxassis va samarali ishlaydi.
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">
              {departments.length}
            </div>
            <div className="text-gray-600 font-medium">Bo'limlar</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">
              {departments.reduce((sum, dept) => sum + dept.employees, 0)}
            </div>
            <div className="text-gray-600 font-medium">Xodimlar</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Professionallik</div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Department Header */}
              <div className={`bg-gradient-to-r ${dept.color} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                      {dept.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{dept.name}</h3>
                      <div className="flex items-center text-sm opacity-90">
                        <Users className="w-4 h-4 mr-1" />
                        {dept.employees} xodim
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">Bo'lim rahbari:</div>
                  <div className="text-lg font-semibold text-gray-900">{dept.head}</div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {dept.description}
                </p>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}