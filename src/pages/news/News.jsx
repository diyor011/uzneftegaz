import React, { useState } from 'react';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

export default function NewsPage() {
  const [hoveredNews, setHoveredNews] = useState(null);

  const featuredNews = {
    id: 1,
    category: 'Asosiy yangilik',
    categoryColor: 'bg-orange-600',
    title: "Yoshlar siyosati bo'yicha yangi dastur qabul qilindi",
    description: "O'zbekiston Respublikasida yoshlar siyosatini yanada rivojlantirish maqsadida yangi davlat dasturi tasdiqalndi. Dastur doirasida yoshlarga keng imkoniyatlar yaratiladi. Ushbu dastur respublika bo'ylab amalga oshirilib, minglab yoshlar hayotiga ijobiy ta'sir ko'rsatadi.",
    date: "26 Oktabr 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
  };

  const smallNews = [
    {
      id: 2,
      category: 'Sport',
      categoryColor: 'bg-blue-700',
      title: "Sport musobaqalarida yuqori natijalar",
      description: "Respublika miqyosida o'tkazilgan sport musobaqalarida yoshlarimiz yuqori o'rinlarni egalladi.",
      date: "25 Oktabr 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
      size: "large"
    },
    {
      id: 3,
      category: 'Ta\'lim',
      categoryColor: 'bg-orange-600',
      title: "Yangi ta'lim dasturlari joriy etildi",
      description: "Oliy ta'lim muassasalarida zamonaviy ta'lim dasturlari joriy etilmoqda.",
      date: "24 Oktabr 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      size: "small"
    },
    {
      id: 4,
      category: 'Iqtisodiyot',
      categoryColor: 'bg-blue-800',
      title: "Yoshlar tadbirkorligi qo'llab-quvvatlanadi",
      description: "Yosh tadbirkorlar uchun maxsus grant dasturlari e'lon qilindi.",
      date: "23 Oktabr 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      size: "small"
    },
    {
      id: 5,
      category: 'Texnologiya',
      categoryColor: 'bg-orange-700',
      title: "Raqamli texnologiyalar sohasida yangiliklar",
      description: "IT sohasida ishlayotgan yoshlar uchun yangi loyihalar boshlandi. Zamonaviy texnologiyalar joriy etilmoqda.",
      date: "22 Oktabr 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      size: "large"
    },
    {
      id: 6,
      category: 'Madaniyat',
      categoryColor: 'bg-blue-600',
      title: "Madaniy tadbirlar kalendari e'lon qilindi",
      description: "Yilning qolgan qismida bo'lib o'tadigan madaniy tadbirlar ro'yxati taqdim etildi.",
      date: "21 Oktabr 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=600&h=400&fit=crop",
      size: "small"
    },
    {
      id: 7,
      category: 'Fan',
      categoryColor: 'bg-orange-600',
      title: "Yoshlar ilmiy tadqiqotlarda faol ishtirok etmoqda",
      description: "Ilmiy konferensiyalarda yoshlar o'z tadqiqotlarini taqdim etishmoqda.",
      date: "20 Oktabr 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
      size: "small"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
      
 
        {/* Other News - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallNews.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredNews(item.id)}
              onMouseLeave={() => setHoveredNews(null)}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full ${item.size === 'large' ? 'h-80' : 'h-64'} object-cover transition-transform duration-500 ${
                    hoveredNews === item.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span className={`${item.categoryColor} text-white px-3 py-1 rounded-lg text-xs font-bold`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-700 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                
                <button className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-2 group">
                  Batafsil
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-700 to-orange-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Yana ko'rsatish
          </button>
        </div>

      </div>
    </div>
  );
}