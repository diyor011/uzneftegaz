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

  const handleDownload = (pdfUrl) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      alert("PDF fayl topilmadi");
    }
  };

  return (
    <div className="min-h-screen mx-auto max-w-[90%] py-12 px-4">
      <div className="flex flex-col gap-8">
        {book.map(item => (
          <div key={item._id} className="grid md:grid-cols-2 gap-0 rounded-3xl shadow-2xl overflow-hidden bg-white h-full">

            <div className="flex items-center justify-center">
              <div className="w-full h-full">

                {/* mediaType borligini tekshiramiz */}
                {item.mediaType ? (

                  /* Agar mediaType array bo'lsa → SWIPER */
                  Array.isArray(item.mediaType) ? (
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      pagination={{ clickable: true }}
                      loop={true}
                    >
                      {item.mediaType.map((media, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={media.url}
                            alt="kitob rasm"
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (

                    /* Agar mediaType object bo'lsa → TYPE bo'yicha rasm chiqaramiz */
                    item.mediaType.type?.includes("image") ? (
                      <img
                        src={item.mediaType.url}
                        alt="kitob rasm"
                        className="w-full h-full object-cover"
                      />
                    ) : item.mediaType.type?.includes("video") ? (
                      <video
                        controls
                        className="w-full h-full object-cover"
                      >
                        <source src={item.mediaType.url} type={item.mediaType.type} />
                      </video>
                    ) : (
                      <div className="w-full h-[300px] bg-gray-300 flex items-center justify-center">
                        Format qo‘llab-quvvatlanmaydi
                      </div>
                    )
                  )

                ) : (
                  <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-400">Rasm mavjud emas</p>
                  </div>
                )}

              </div>

            </div>

            {/* Ma'lumot qismi */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
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
                onClick={() => handleDownload(item.mediaDocs?.[0]?.url)}
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