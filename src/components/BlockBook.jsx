import React, { useEffect, useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BooksBlock = ({ onBookClick, onViewAll }) => {
    const [latestBook, setLatestBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const lang = useSelector((state) => state.language.lang);

    const getBooks = async () => {
        try {
            const response = await fetch('https://uzneftegaz-backend-production.up.railway.app/api/books');
            const data = await response.json();
            // Eng oxirgi kitobni olish
            if (data.book && data.book.length > 0) {
                setLatestBook(data.book[data.book.length - 1]);
            }
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!latestBook) {
        return null;
    }

    return (
        <div className="mb-16">
            {/* Asosiy kitob kartochkasi */}
            <Link
                to={"Book"}
                className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
            >
                <div className="flex flex-col md:flex-row">

                    {/* Rasm qismi */}
                    <div className="md:w-2/5 relative ">
                        <div className="h-64 md:h-full overflow-hidden bg-gray-100">
                            {latestBook.mediaType ? (
                                latestBook.mediaType.type === "video" ? (
                                    <video
                                        src={latestBook.mediaType.url}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={latestBook.mediaType.url}
                                        alt={latestBook.title?.[lang]}
                                        className="w-full h-full object-cover"
                                    />
                                )
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <BookOpen className="w-20 h-20 text-gray-300" />
                                </div>
                            )}
                        </div>

                        {/* Yangi badge */}
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                            Yangi
                        </div>
                    </div>

                    {/* Ma'lumot qismi */}
                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-3">
                                {latestBook.title?.[lang]}
                            </h3>

                            <p className="text-info text-2xl font-bold  mb-4">
                                {latestBook.avtor?.[lang]}
                            </p>

                            <p className="text-base-content text-lg font-semibold leading-relaxed mb-6 line-clamp-4">
                                {latestBook.description?.[lang]}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                            <div className="flex gap-6 text-sm text-gray-500">
                                <span className="flex items-center gap-1 text-md font-semibold">
                                    <BookOpen className="w-6 h-6" />
                                    {latestBook.pages} sahifa
                                </span>
                                <span className='text-md font-semibold'>{latestBook.year}-yil</span>
                            </div>

                            <button className="text-info font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                                Batafsil
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Barcha kitoblarni ko'rish tugmasi */}
            <div className="mt-6 text-center">

                <Link
                    to={'Book'}
                    onClick={() => onViewAll && onViewAll()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-info text-white font-semibold rounded hover:bg-blue-700 transition-colors"
                >
                    Barcha kitoblar
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
};

export default BooksBlock;