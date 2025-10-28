import React, { useState } from 'react';
import { Calendar, Users, Award, Briefcase, GraduationCap, Globe } from 'lucide-react';

export default function PlansReportsPage() {
  const [activeYear, setActiveYear] = useState('2025');

  const plans2025 = [
    {
      id: 1,
      month: "Yanvar - Mart",
      title: "Yoshlar startaplari tanlovi",
      description: "Innovatsion g'oyalar bilan yoshlar uchun respublika miqyosida tanlov o'tkaziladi",
      participants: "500+ ishtirokchi",
      icon: Award,
      color: "bg-info"
    },
    {
      id: 2,
      month: "Aprel - Iyun",
      title: "Kadrlar malakasini oshirish",
      description: "Davlat xizmatchilari uchun treninglar va seminarlar",
      participants: "200 xodim",
      icon: GraduationCap,
      color: "bg-orange-400"
    },
    {
      id: 3,
      month: "Iyul - Sentabr",
      title: "Xalqaro konferensiya",
      description: "Raqamli transformatsiya mavzusida xalqaro konferensiya",
      participants: "30+ davlat",
      icon: Globe,
      color: "bg-info"
    },
    {
      id: 4,
      month: "Oktabr - Dekabr",
      title: "Yillik forum",
      description: "Yil yakunlari bo'yicha katta forum va tanishuv tadbirlari",
      participants: "1000+ ishtirokchi",
      icon: Users,
      color: "bg-orange-500"
    }
  ];

  const plans2024 = [
    {
      id: 1,
      month: "Yanvar - Mart",
      title: "IT park ochilishi",
      description: "Yangi IT park ochildi va 50 ta startup joylashtirildi",
      participants: "50 startup",
      icon: Briefcase,
      color: "bg-info",
      status: "Bajarildi"
    },
    {
      id: 2,
      month: "Aprel - Iyun",
      title: "Yoshlar forumi",
      description: "Respublika yoshlar forumi o'tkazildi",
      participants: "800 ishtirokchi",
      icon: Users,
      color: "bg-orange-400",
      status: "Bajarildi"
    },
    {
      id: 3,
      month: "Iyul - Sentabr",
      title: "Sport musobaqalari",
      description: "Viloyatlar o'rtasida sport musobaqalari",
      participants: "2000 sportchi",
      icon: Award,
      color: "bg-info",
      status: "Bajarildi"
    },
    {
      id: 4,
      month: "Oktabr - Dekabr",
      title: "Yangi dasturlar joriy etildi",
      description: "Elektron xizmatlar platformasi ishga tushirildi",
      participants: "Barcha fuqarolar",
      icon: Globe,
      color: "bg-orange-500",
      status: "Bajarildi"
    }
  ];

  const currentPlans = activeYear === '2025' ? plans2025 : plans2024;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Rejalar va Hisobotlar
          </h1>
          <p className="text-xl text-gray-600">
            Yillik tadbirlar va faoliyat rejalari
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveYear('2025')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeYear === '2025'
                ? 'bg-info text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
            }`}
          >
            2025-yil rejalari
          </button>
          <button
            onClick={() => setActiveYear('2024')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeYear === '2024'
                ? 'bg-orange-400 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
            }`}
          >
            2024-yil hisoboti
          </button>
        </div>

        {/* Plans/Reports Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 ${plan.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-gray-500">{plan.month}</span>
                      {plan.status && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                          {plan.status}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {plan.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {plan.description}
                </p>

                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <span>{plan.participants}</span>
                </div>
              </div>
            );
          })}
        </div>

    
      </div>
    </div>
  );
}