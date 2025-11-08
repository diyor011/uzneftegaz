import React from 'react'
import { Calendar, Users, Award, Briefcase, GraduationCap, Globe } from 'lucide-react';
import logo from "../../assets/minLogo.png";

const Reports = () => {
      const plans = [
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
 
    return (
        <div className='max-w-[90%] mx-auto mt-14'>
              <div
                    className="flex items-center gap-2 mt-8
                                          mb-12    "
                  >
                    <img src={logo} alt="" />
                    <h2 className="text-4xl font-bold  text-info duration-300">
                      Hisobotlar <span className="text-[#EE7427]"></span>{" "}
                    </h2>
                  </div>


           <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => {
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
    )
}

export default Reports
