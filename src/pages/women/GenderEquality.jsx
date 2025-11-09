import React from "react";
import { Users, Briefcase, BookOpen, Award } from "lucide-react";
import logo from "../../assets/minLogo.png";

export default function GenderEqualityPage() {
  const programs = [
    {
      icon: BookOpen,
      title: "Ta'lim dasturlari",
      description: "Ayollar uchun bepul treninglar va kurslar",
      color: "bg-info",
    },
    {
      icon: Briefcase,
      title: "Tadbirkorlikni qo'llab-quvvatlash",
      description: "Kichik biznes boshlash uchun grantlar",
      color: "bg-orange-400",
    },
    {
      icon: Users,
      title: "Maslahat xizmati",
      description: "Huquqiy va psixologik yordam",
      color: "bg-info",
    },
    {
      icon: Award,
      title: "Mukofotlash",
      description: "Faol ayollar mukofotlanadi",
      color: "bg-orange-400",
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 mx-auto max-w-[90%]">
      <div className="">
        <div
          className="flex items-center gap-2 mt-8
                                mb-12    "
        >
          <img src={logo} alt="" />
          <h2 className="text-4xl font-bold  text-info duration-300">
            Gender <span className="text-[#EE7427]">Tengligi</span>{" "}
          </h2>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div
                  className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
