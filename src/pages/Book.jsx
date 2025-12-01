import React, { useState } from 'react';
import { Download, BookOpen } from 'lucide-react';

export default function BookPage() {
  // const [book] = useState({
  //   title: "O'zbek Adabiyoti Tarixidan",
  //   author: "Alisher Navoiy",
  //   image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  //   description: "Bu kitob o'zbek adabiyotining boy tarixini, uning rivojlanish bosqichlarini va mashhur shoirlar ijodini o'rganish uchun mo'ljallangan. Kitobda klassik va zamonaviy adabiyot namunalari, she'rlar va hikoyalar to'plangan. O'zbek tilining go'zalligi va san'at asarlarining chuqurligi bu kitobda o'z aksini topgan.",
  //   pages: 450,
  //   year: 2024,
  //   pdfUrl: "#"
  // });
  const [book, setBook] = useState([])

  const Getbook = async () => {
    try {

      const response = await fetch('https://uzneftegaz-backend-production.up.railway.app/api/books')
      const data = response.json()
      setBook(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDownload = () => {
    // PDF yuklab olish funksiyasi
    alert("PDF yuklab olinmoqda...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {book.map(item => (
            <div key={item._id} className="grid md:grid-cols-2 gap-0">
            {/* Rasm qismi */}
            <div className="bg-info p-8 flex items-center justify-center">
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-400 rounded-full p-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Ma'lumot qismi */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                  {book.title}
                </h1>
                <p className="text-xl text-orange-400 font-semibold">
                  {book.author}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-1 h-6 bg-orange-400 mr-3 rounded"></span>
                  Kitob haqida
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div className="flex gap-6 mb-8">
                <div className="bg-blue-50 px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-500">Sahifalar</p>
                  <p className="text-2xl font-bold text-info">{book.pages}</p>
                </div>
                <div className="bg-orange-50 px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-500">Yil</p>
                  <p className="text-2xl font-bold text-orange-400">{book.year}</p>
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

              <p className="text-sm text-gray-500 mt-4 text-center">
                PDF formatida yuqori sifatli kitob
              </p>
            </div>
          </div>
        ))}
        </div>


      </div>
    </div>
  );
}