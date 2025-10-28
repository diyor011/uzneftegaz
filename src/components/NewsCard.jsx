import React from 'react'
import { Eye, Calendar, User, ChevronRight, Share2 } from 'lucide-react'

const NewsCard = () => {
  const pageTypes = {
    news: {
      title: "Yangiliklar sahifasi",
      items: [
        {
          id: 1,
          title: "Yoshlar siyosati bo'yicha yangi dastur qabul qilindi",
          content:
            "O'zbekiston Respublikasida yoshlar siyosatini yanada rivojlantirish maqsadida yangi davlat dasturi tasdiqlandi. Dastur doirasida yoshlarga keng imkoniyatlar yaratiladi.",
          date: "26 Oktabr 2025",
          author: "Admin",
          views: 1245,
          image: true,
          category: "Yoshlar siyosati",
        },
        {
          id: 2,
          title: "Sport musobaqalarida yuqori natijalar",
          content:
            "Respublika miqyosida o'tkazilgan sport musobaqalarida yoshlarimiz yuqori o'rinlarni egalladi. Musobaqa natijalariga ko'ra...",
          date: "25 Oktabr 2025",
          author: "Admin",
          views: 856,
          image: true,
          category: "Sport va madaniyat",
        },
        {
          id: 3,
          title: "Gender tengligi bo'yicha seminar",
          content:
            "Xotin-qizlar huquqlarini himoya qilish va gender tengligini ta'minlash maqsadida maxsus seminar tashkil etildi.",
          date: "24 Oktabr 2025",
          author: "Admin",
          views: 623,
          image: true,
          category: "Xotin-qizlar",
        },
      ],
    },
  }

  return (
    <div className="grid gap-8">
      {pageTypes.news.items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br from-orange-400 via-orange-500 to-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition"></div>
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="group:  text-sm font-bold text-orange-600  group-hover:text-info transition-all duration-300  ">
                  {item.category}
                </span>
              </div>

            </div>

            {/* Content Section */}
            <div className="lg:w-2/3 p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {item.author}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-6 line-clamp-3">{item.content}</p>

              <div className="flex items-center gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                  Batafsil <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsCard
