import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Clock, MessageSquare, Send, Facebook, Youtube, Instagram, FileText, Users, Headphones } from 'lucide-react';

export default function ContactChannels() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const channels = [
    {
      id: 1,
      icon: Phone,
      title: "Ishonch telefoni",
      info: "+998 71 123 45 67",
      info2: "+998 71 987 65 43",
      description: "Dushanba-Juma: 9:00 - 18:00",
      category: "phone",
      color: "from-blue-600 to-blue-800",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      id: 2,
      icon: Mail,
      title: "Elektron pochta",
      info: "info@gov.uz",
      info2: "support@gov.uz",
      description: "24 soat ichida javob beramiz",
      category: "online",
      color: "from-orange-500 to-orange-700",
      gradient: "bg-gradient-to-br from-orange-500 to-orange-700"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Qabulxona manzili",
      info: "Toshkent shahar, Amir Temur ko'chasi, 1-uy",
      info2: "100000, O'zbekiston",
      description: "Ish vaqti: Dush-Juma, 9:00-18:00, Tushlik: 13:00-14:00",
      category: "office",
      color: "from-blue-700 to-blue-900",
      gradient: "bg-gradient-to-br from-blue-700 to-blue-900"
    },
    {
      id: 4,
      icon: MessageSquare,
      title: "Onlayn chat xizmati",
      info: "Jonli muloqot",
      info2: "24/7 faol",
      description: "Tezkor javob olish uchun eng qulay usul",
      category: "online",
      color: "from-orange-600 to-orange-800",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800"
    },
    {
      id: 5,
      icon: Globe,
      title: "Rasmiy veb-portal",
      info: "www.gov.uz",
      info2: "portal.gov.uz",
      description: "Barcha xizmatlar va ma'lumotlar online",
      category: "online",
      color: "from-blue-800 to-blue-950",
      gradient: "bg-gradient-to-br from-blue-800 to-blue-950"
    },
    {
      id: 6,
      icon: Send,
      title: "Telegram rasmiy bot",
      info: "@govuz_bot",
      info2: "t.me/govuz_bot",
      description: "Telegramda tezkor xizmat va maslahat",
      category: "online",
      color: "from-orange-500 to-orange-700",
      gradient: "bg-gradient-to-br from-orange-500 to-orange-700"
    },
    {
      id: 7,
      icon: FileText,
      title: "Ariza-shikoyatlar",
      info: "Elektron ariza topshirish",
      info2: "appeal@gov.uz",
      description: "Arizalaringiz 15 kun ichida ko'rib chiqiladi",
      category: "service",
      color: "from-blue-600 to-blue-800",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      id: 8,
      icon: Users,
      title: "Matbuot xizmati",
      info: "press@gov.uz",
      info2: "+998 71 111 22 33",
      description: "OAV vakillari uchun maxsus aloqa kanali",
      category: "service",
      color: "from-orange-600 to-orange-800",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800"
    },
    {
      id: 9,
      icon: Headphones,
      title: "Qo'llab-quvvatlash markazi",
      info: "1155 (qisqa raqam)",
      info2: "Bepul aloqa",
      description: "Texnik yordam va maslahatlar",
      category: "phone",
      color: "from-blue-700 to-blue-900",
      gradient: "bg-gradient-to-br from-blue-700 to-blue-900"
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", link: "facebook.com/govuz", color: "hover:from-blue-800 hover:to-blue-900" },
    { icon: Youtube, name: "YouTube", link: "youtube.com/govuz", color: "hover:from-orange-700 hover:to-orange-800" },
    { icon: Instagram, name: "Instagram", link: "instagram.com/govuz", color: "hover:from-blue-900 hover:to-blue-950" }
  ];

  const tabs = [
    { id: 'all', label: 'Barcha kanallar' },
    { id: 'phone', label: 'Telefon' },
    { id: 'online', label: 'Online' },
    { id: 'office', label: 'Ofis' },
    { id: 'service', label: 'Xizmatlar' }
  ];

  const filteredChannels = activeTab === 'all' 
    ? channels 
    : channels.filter(ch => ch.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-orange-500 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-4">
            <p className="text-blue-100 text-sm font-semibold">Biz bilan bog'lanish</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Aloqa Kanallari
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Savollaringiz va takliflaringiz uchun quyidagi aloqa kanallaridan foydalaning. Biz har doim sizning xizmatingizdamiz!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-white text-info shadow-xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                onMouseEnter={() => setHoveredCard(channel.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white rounded-3xl p-8 shadow-2xl transition-all duration-500 transform ${
                  hoveredCard === channel.id ? 'scale-105 -translate-y-3 shadow-blue-900/50' : ''
                }`}
              >
                <div className={`w-20 h-20 bg-info group-hover:bg-orange-400 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${
                  hoveredCard === channel.id ? 'rotate-12 scale-110' : ''
                }`}>
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {channel.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-lg font-semibold text-info">
                    {channel.info}
                  </p>
                  <p className="text-md font-medium text-orange-400">
                    {channel.info2}
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {channel.description}
                </p>

                <button className={`mt-6 w-full py-3 bg-orange-400 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  Bog'lanish
                </button>
              </div>
            );
          })}
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Ijtimoiy tarmoqlarda kuzatib boring
            </h2>
            <p className="text-xl text-gray-600">
              Eng so'nggi yangiliklar, e'lonlar va tadbirlardan xabardor bo'ling
            </p>
          </div>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {socialMedia.map((social) => {
              const Icon = social.icon;
              return (
                <button
                  key={social.name}
                  className={`flex items-center gap-4 px-10 py-5 bg-info text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-110 shadow-xl ${social.color}`}
                >
                  <Icon className="w-7 h-7" strokeWidth={2.5} />
                  <div className="text-left">
                    <div className="text-lg">{social.name}</div>
                    <div className="text-sm opacity-90">{social.link}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

 

        {/* Emergency Contact */}
  
      </div>
    </div>
  );
}