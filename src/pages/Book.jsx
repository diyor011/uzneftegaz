import React, { useEffect, useState } from 'react';
import { Download, BookOpen } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BookPage() {

  const [book, setBook] = useState([])
  const lang = useSelector((state) => state.language.lang);

  const Getbook = async () => {
    try {
      const response = await fetch('https://uzneftegaz-backend-production.up.railway.app/api/books')
      const data = await response.json()
      setBook(data.book)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    Getbook()
  }, [])

  const handleDownload = () => {
    alert("PDF yuklab olinmoqda...");
  };

  return (
    <div className="min-h-screen mx-auto max-w-[90%] py-12 px-4">
      <div className="flex flex-col gap-8">
        {book.map(item => (
          <div key={item._id} className="grid md:grid-cols-2 gap-0 rounded-3xl shadow-2xl overflow-hidden bg-white h-full">
          
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full ">
                {item.mediaType?.length > 0 ? (
                  item.mediaType.length === 1 ? (
                    // Bitta media
                    item.mediaType[0].type === "video" ? (
                      <video
                        src={item.mediaType[0].url}
                        className="w-full  object-cover rounded-2xl shadow-xl"
                        controls
                      />
                    ) : (
                      <img
                        src={item.mediaType[0].url}
                        alt="media"
                        className="w-full  object-cover rounded-2xl shadow-xl"
                      />
                    )
                  ) : (
                    // Ko'p media - Swiper
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      pagination={{ clickable: true }}
                      loop={true}
                      className="w-full  rounded-2xl shadow-xl"
                    >
                      {item.mediaType
                        .filter(m => m.type === "image" || m.type === "video")
                        .map((m, index) => (
                          <SwiperSlide key={index}>
                            {m.type === "video" ? (
                              <video
                                src={m.url}
                                className="w-full object-cover"
                                controls
                              />
                            ) : (
                              <img
                                src={m.url}
                                alt={`media-${index}`}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  )
                ) : (
                  // Media yo'q bo'lsa
                  <div className="w-full h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-xl">
                    <p className="text-gray-400 text-lg">No Media</p>
                  </div>
                )}

               
              </div>
            </div>

            {/* Ma'lumot qismi */}
            <div className="p-8 md:p-12 flex flex-col justify-center ">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                  {item.title?.[lang]}
                </h1>
                <p className="text-xl text-orange-400 font-semibold">
                  {item.avtor?.[lang]}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-1 h-6 bg-orange-400 mr-3 rounded"></span>
                  Kitob haqida
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.description?.[lang]}
                </p>
              </div>

              <div className="flex gap-6 mb-8">
                <div className="bg-blue-50 px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-500">Sahifalar</p>
                  <p className="text-2xl font-bold text-blue-600">{item.pages}</p>
                </div>
                <div className="bg-orange-50 px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-500">Yil</p>
                  <p className="text-2xl font-bold text-orange-400">{item.year}</p>
                </div>
              </div>

              {/* PDF yuklab olish tugmasi */}
              <button
                onClick={handleDownload}
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" />
                PDF yuklab olish
              </button>

           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}