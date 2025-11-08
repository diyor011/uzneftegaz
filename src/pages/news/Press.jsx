import React, { useState } from 'react';
import { Phone, Mail, Users, FileText, Camera, Video, MapPin, Clock, Send } from 'lucide-react';
import logo from "../../assets/minLogo.png";

export default function PressServicePage() {
  const [activeTab, setActiveTab] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = () => {
    alert('Xabaringiz yuborildi!');
  };

  const team = [
    {
      id: 1,
      name: "Ahmadov Javohir Karimovich",
      position: "Matbuot xizmati direktori",
      phone: "+998 71 111 22 33",
      email: "j.ahmadov@gov.uz",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Karimova Malika Shavkatovna",
      position: "Katta mutaxassis",
      phone: "+998 71 111 22 34",
      email: "m.karimova@gov.uz",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Tursunov Bobur Alievich",
      position: "Videokontent mutaxassisi",
      phone: "+998 71 111 22 35",
      email: "b.tursunov@gov.uz",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Yusupova Nodira Azimovna",
      position: "Fotomuxbir",
      phone: "+998 71 111 22 36",
      email: "n.yusupova@gov.uz",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  const services = [
    {
      icon: FileText,
      title: "Matbuot relizlari",
      description: "Rasmiy bayonotlar va yangiliklar matbuot uchun tayyorlanadi",
      color: "bg-blue-700"
    },
    {
      icon: Camera,
      title: "Foto materiallar",
      description: "Yuqori sifatli rasmiy tadbirlar fotosuratlari",
      color: "bg-orange-600"
    },
    {
      icon: Video,
      title: "Video kontentlar",
      description: "Professional video lavhalar va intervюlar",
      color: "bg-blue-800"
    },
    {
      icon: Users,
      title: "Intervyu tashkil etish",
      description: "Rahbarlar bilan intervyu olish imkoniyati",
      color: "bg-orange-700"
    }
  ];


  return (
    <div className="min-h-screen mt-20 mx-auto max-w-[90%]">
      
      <div
             className="flex items-center gap-2 mt-8
                                 mb-12    "
           >
             <img src={logo} alt="" />
             <h2 className="text-4xl font-bold  text-info duration-300">
               Matbuot<span className="text-[#EE7427]">Xizmati</span>{" "}
             </h2>
           </div>
   

      {/* Tabs */}
      <div className="max-w-7xl mx-auto  mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: 'about', label: 'Biz haqimizda' },
            { id: 'team', label: 'Jamoa' },
            { id: 'services', label: 'Xizmatlar' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-info text-orange-400 shadow-2xl scale-105'
                  : 'bg-orange-400 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto  pb-16">
        
        {/* About Section */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Biz haqimizda</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Matbuot xizmati O'zbekiston Respublikasi davlat organlari faoliyati haqida ommaviy axborot vositalari va jamoatchilikni xabardor qilish, ochiqlik va shaffoflikni ta'minlash maqsadida faoliyat yuritadi.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Bizning vazifamiz OAV vakillari bilan samarali hamkorlikni yo'lga qo'yish, rasmiy ma'lumotlarni o'z vaqtida yetkazish va davlat siyosatini to'g'ri yoritishdir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Biz professional jamoa sifatida foto, video materiallar, matbuot relizlari va boshqa zarur hujjatlarni tayyorlashda OAV vakillariga ko'maklashamiz.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                  alt="Press service"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-5xl font-bold text-info mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Matbuot relizlari</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-5xl font-bold text-orange-400 mb-2">200+</div>
                <div className="text-gray-600 font-semibold">Tadbirlar</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-5xl font-bold text-info mb-2">50+</div>
                <div className="text-gray-600 font-semibold">OAV hamkorlari</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Aloqada</div>
              </div>
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Bizning jamoa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map(member => (
                <div key={member.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-info font-semibold mb-4">{member.position}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{member.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Section */}
        {activeTab === 'services' && (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Xizmatlarimiz</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-blue-900/50 transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className={`w-20 h-20 transition-all duration-300  bg-info group-hover:bg-orange-400 rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Qanday qilib materiallar olish mumkin?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-info text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Ariza topshiring</h4>
                    <p className="text-gray-600">Email yoki telefon orqali o'z so'rovingizni yuboring</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Tasdiqlash</h4>
                    <p className="text-gray-600">Bizning xodimlarimiz sizning arizangizni ko'rib chiqadi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-info text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Materiallarni olish</h4>
                    <p className="text-gray-600">Tasdiqlanganidan keyin materiallar sizga yuboriladi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Biz bilan bog'laning</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="bg-white rounded-3xl shadow-2xl p-8 group">
                    <div className={`w-16 h-16  bg-info transition-all duration-300  group-hover:bg-orange-400 rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{contact.title}</h3>
                    <p className="text-xl text-gray-600">{contact.info}</p>
                  </div>
                );
              })}
            </div>

     
          </div>
        )}

      </div>
    </div>
  );
}