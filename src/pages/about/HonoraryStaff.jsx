import React, { useState } from 'react';
import { Award, Star, Trophy, Medal, Target, Zap, Heart, TrendingUp } from 'lucide-react';

export default function HonoraryEmployees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      id: 1,
      name: "Aziz Rahimov",
      position: "Founder & CEO",
      avatar: "👨‍💼",
      years: 10,
      achievements: [
        "Kompaniyani 0 dan bugungi holatga olib keldi",
        "500+ muvaffaqiyatli loyihalarni boshqardi",
        "Yirik xalqaro hamkorliklarni tuzdi",
        "Ishlab chiqarish hajmini 10 barobar oshirdi"
      ],
      awards: ["Yil innovatori 2024", "Eng yaxshi rahbar 2023", "Biznes yutuqlari 2022"],
      quote: "Muvaffaqiyat - bu jamoaviy ish va doimiy rivojlanish natijasidir.",
      stats: { projects: 500, years: 10, rating: 98 }
    },
    {
      id: 2,
      name: "Madina Karimova",
      position: "Creative Director",
      avatar: "👩‍🎨",
      years: 8,
      achievements: [
        "100+ brendlar uchun unikal identifikatsiya yaratdi",
        "Xalqaro dizayn tanlovlarida g'olib",
        "Kreativ bo'limni 0 dan qurdi",
        "O'nlab dizaynerlarni o'qitdi"
      ],
      awards: ["Best Designer 2024", "Creative Excellence 2023", "Design Innovator 2022"],
      quote: "Har bir dizayn - bu hikoya. Biz hikoyalar yaratamiz.",
      stats: { projects: 350, years: 8, rating: 99 }
    },
    {
      id: 3,
      name: "Sardor Tursunov",
      position: "Tech Lead",
      avatar: "👨‍💻",
      years: 7,
      achievements: [
        "Kompaniyaning texnik infratuzilmasini yaratdi",
        "50+ murakkab tizimlarni ishlab chiqdi",
        "Open-source loyihalarga hissa qo'shdi",
        "Texnologik innovatsiyalarni joriy etdi"
      ],
      awards: ["Tech Leader 2024", "Innovation Award 2023", "Best Developer 2021"],
      quote: "Texnologiya - kelajak. Biz kelajakni bugun yaratamiz.",
      stats: { projects: 280, years: 7, rating: 97 }
    },
    {
      id: 4,
      name: "Dilnoza Sharipova",
      position: "Project Manager",
      avatar: "👩‍💼",
      years: 6,
      achievements: [
        "300+ loyihani muvaffaqiyatli yakunladi",
        "Mijozlar mamnuniyati 98% ga yetkazdi",
        "Jamoani samarali boshqarish metodikasini joriy etdi",
        "Eng murakkab loyihalarni muddatida topshirdi"
      ],
      awards: ["PM of the Year 2024", "Excellence Award 2023", "Leadership Prize 2022"],
      quote: "Yaxshi rejalashtirish - muvaffaqiyatning yarmi.",
      stats: { projects: 320, years: 6, rating: 98 }
    },
    {
      id: 5,
      name: "Jasur Alimov",
      position: "Marketing Director",
      avatar: "👨‍💼",
      years: 6,
      achievements: [
        "Savdo hajmini 5 barobar oshirdi",
        "Yangi bozorlarni ochdi",
        "Muvaffaqiyatli marketing strategiyalarini ishlab chiqdi",
        "Brendni taniqli qildi"
      ],
      awards: ["Marketing Genius 2024", "Sales Champion 2023", "Growth Hacker 2022"],
      quote: "Marketing - bu san'at va fan uyg'unligi.",
      stats: { projects: 250, years: 6, rating: 96 }
    },
    {
      id: 6,
      name: "Nigora Abdullayeva",
      position: "Senior Developer",
      avatar: "👩‍💻",
      years: 5,
      achievements: [
        "Eng murakkab dasturlarni ishlab chiqdi",
        "Junior dasturchilarni o'qitdi",
        "Code quality ni yuqori darajaga olib chiqdi",
        "Performance optimizatsiya bo'yicha ekspert"
      ],
      awards: ["Code Master 2024", "Mentor Award 2023", "Tech Excellence 2022"],
      quote: "Yaxshi kod - bu o'qilishi oson kod.",
      stats: { projects: 200, years: 5, rating: 99 }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-20 h-20 mr-4 animate-bounce" />
          </div>
          <h1 className="text-6xl font-bold mb-4">Faxriy Xodimlar</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Kompaniyamizning g'ururi - o'z ishini sevgan va yutuqlarga erishgan xodimlarimiz
          </p>
        </div>
      </div>

      {/* Intro Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Award className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{employees.length}</div>
              <div className="text-gray-600">Faxriy Xodim</div>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-3 text-orange-500" />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {employees.reduce((sum, emp) => sum + emp.years, 0)}
              </div>
              <div className="text-gray-600">Yillik Tajriba</div>
            </div>
            <div>
              <Target className="w-12 h-12 mx-auto mb-3 text-red-500" />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {employees.reduce((sum, emp) => sum + emp.stats.projects, 0)}+
              </div>
              <div className="text-gray-600">Loyihalar</div>
            </div>
            <div>
              <Heart className="w-12 h-12 mx-auto mb-3 text-pink-500" />
              <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-gray-600">Mijozlar Mamnuniyati</div>
            </div>
          </div>
        </div>
      </div>

      {/* Employees Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="relative bg-info h-48 flex items-center justify-center">
                <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                  <Medal className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-8xl">{employee.avatar}</div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{employee.name}</h3>
                <p className="text-orange-400 font-semibold mb-4">{employee.position}</p>

                {/* Stats Mini */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center bg-yellow-50 rounded-lg py-2">
                    <div className="text-xl font-bold text-orange-400">{employee.stats.years}</div>
                    <div className="text-xs text-gray-600">Yil</div>
                  </div>
                  <div className="text-center bg-orange-50 rounded-lg py-2">
                    <div className="text-xl font-bold text-orange-400">{employee.stats.projects}+</div>
                    <div className="text-xs text-gray-600">Loyiha</div>
                  </div>
                  <div className="text-center bg-red-50 rounded-lg py-2">
                    <div className="text-xl font-bold text-info">{employee.stats.rating}%</div>
                    <div className="text-xs text-gray-600">Baho</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl mb-4 border-l-4 border-orange-500">
                  <p className="text-sm italic text-gray-700">"{employee.quote}"</p>
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedEmployee(employee.id === selectedEmployee ? null : employee.id)}
                  className="w-full bg-info text-white py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all"
                >
                  {selectedEmployee === employee.id ? 'Yopish' : "Batafsil Ko'rish"}
                </button>

                {/* Expanded Content */}
                {selectedEmployee === employee.id && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-orange-500" />
                      Yutuqlar:
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {employee.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <Star className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-orange-500" />
                      Mukofotlar:
                    </h4>
                    <div className="space-y-2">
                      {employee.awards.map((award, idx) => (
                        <div key={idx} className="bg-yellow-50 px-3 py-2 rounded-lg text-sm text-gray-700">
                          🏆 {award}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}