import React, { useState } from "react";
import logo from "../../assets/minLogo.png"
import {
  Award,
  TrendingUp,
  Heart,
  BookOpen,
  Users,
  Phone,
  Mail,
  MessageCircle,
  Gift,
  Star,
  Coffee,
  Briefcase,
} from "lucide-react";

export default function EmployeeSupportPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const supportPrograms = [
    {
      id: 1,
      title: "Professional Rivojlanish Dasturi",
      category: "training",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
      description:
        "Xodimlarning malakasini oshirish va kasbiy ko'nikmalarini rivojlantirish uchun maxsus treninglar",
      benefits: [
        "Bepul kurslar",
        "Sertifikatlar",
        "Online ta'lim",
        "Mentorlik",
      ],
      color: "bg-info",
    },
    {
      id: 2,
      title: "Salomatlik va Sport Dasturi",
      category: "health",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
      description:
        "Xodimlarning jismoniy va ruhiy salomatligini qo'llab-quvvatlash dasturlari",
      benefits: [
        "Fitnes markazi",
        "Tibbiy sug'urta",
        "Psixolog yordami",
        "Yoga darslari",
      ],
      color: "bg-orange-400",
    },
    {
      id: 3,
      title: "Rag'batlantirish va Mukofotlar",
      category: "rewards",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      description:
        "Yuqori natijalarga erishgan xodimlarni taqdirlash va rag'batlantirish tizimi",
      benefits: [
        "Oylik mukofotlar",
        "Yillik bonuslar",
        "Badavlat sovg'alar",
        "Sayohat",
      ],
      color: "bg-info",
    },
    {
      id: 4,
      title: "Ish-Hayot Balansi",
      category: "balance",
      icon: Coffee,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop",
      description: "Moslashuvchan ish grafigi va dam olish imkoniyatlari",
      benefits: [
        "Uzoqdan ishlash",
        "Moslashuvchan soatlar",
        "Dam olish kunlari",
        "Oilaviy tadbirlar",
      ],
      color: "bg-orange-400",
    },
    {
      id: 5,
      title: "Karyera O'sishi",
      category: "career",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      description:
        "Xodimlarning karyera yo'lini rejalashtirish va rivojlantirish",
      benefits: [
        "Lavozim ko'tarilishi",
        "Ichki vakansiyalar",
        "Mentorlik",
        "Loyiha rahbarlik",
      ],
      color: "bg-info",
    },
    {
      id: 6,
      title: "Ijtimoiy Imtiyozlar",
      category: "social",
      icon: Gift,
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=500&fit=crop",
      description: "Xodimlar va ularning oilalari uchun qo'shimcha imtiyozlar",
      benefits: [
        "Bolalar bog'chasi",
        "Ta'lim stipendiyalari",
        "Transport kompensatsiya",
        "Ovqat",
      ],
      color: "bg-orange-400",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dilnoza Karimova",
      position: "Loyiha menejeri",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
      text: "Bu dasturlar tufayli men professional jihatdan katta o'sishga erishdim. Kompaniyamiz bizni haqiqatan qo'llab-quvvatlaydi!",
    },
    {
      id: 2,
      name: "Javohir Rahmonov",
      position: "Dasturchi",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "Salomatlik dasturi va moslashuvchan ish grafigi hayot sifatimni sezilarli darajada yaxshiladi.",
    },
    {
      id: 3,
      name: "Madina Azimova",
      position: "Marketing mutaxassisi",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      text: "Karyera o'sishi dasturi menga yangi imkoniyatlar eshigini ochdi. Jamoamiz ajoyib!",
    },
  ];

  const filteredPrograms =
    selectedCategory === "all"
      ? supportPrograms
      : supportPrograms.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen max-w-[90%] mx-auto">
      <div
        className="flex items-center gap-2 mt-8
               mb-12    "
      >
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold  text-info duration-300">
          Xodimlarni qollap quvatlash
        </h2>
      </div>

      {/* Filter Section */}
      <div className="bg-white  sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-orange-400 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Barchasi
            </button>
            <button
              onClick={() => setSelectedCategory("training")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === "training"
                  ? "bg-orange-400 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Ta'lim
            </button>
            <button
              onClick={() => setSelectedCategory("health")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === "health"
                  ? "bg-orange-400 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Salomatlik
            </button>
            <button
              onClick={() => setSelectedCategory("career")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === "career"
                  ? "bg-orange-400 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Karyera
            </button>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Bizning Dasturlarimiz
          </h2>
          <p className="text-xl text-gray-600">
            Xodimlar uchun keng imkoniyatlar va qo'llab-quvvatlash
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden  shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-4 left-4 ${program.color} text-white p-4 rounded-full shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl max-w-[400px] font-bold text-gray-800 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 max-w-[200px] ">{program.description}</p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {program.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <Star className="w-5 h-5 mr-2 text-orange-400 fill-orange-400" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full ${program.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Batafsil ma'lumot
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>



    </div>
  );
}
