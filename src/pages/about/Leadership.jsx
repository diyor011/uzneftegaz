import React from 'react'
import { Calendar, User, Download, Share2, Eye, ChevronRight, FileText, Image, Video, Users, Award, Briefcase, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';


const Leadership = () => {

    const pageTypes = [


        {
            id: 1,
            name: "Karimov Javohir Akmalovich",
            position: "Direktor",
            phone: "+998 71 123 45 67",
            email: "director@davlat.uz",
            reception: "Dushanba-Juma: 14:00-17:00",
            bio: "Yuqori malakali mutaxassis. 20 yillik tajriba.",
            image: true
        },
        {
            id: 2,
            name: "Rahmonova Nilufar Saidovna",
            position: "O'rinbosari - Yoshlar siyosati bo'yicha",
            phone: "+998 71 123 45 68",
            email: "youth@davlat.uz",
            reception: "Dushanba-Juma: 14:00-16:00",
            bio: "Yoshlar bilan ishlash bo'yicha 15 yillik tajriba.",
            image: true
        }

    ]

    return (
        <div className='max-w-[90%] mx-auto mt-16 flex flex-col gap-8'>
            {pageTypes.map(item => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                        {/* Photo */}
                        <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-blue-500 to-blue-600 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <User className="w-32 h-32 text-white opacity-50" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="md:w-2/3 p-6 lg:p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                            <p className="text-orange-600 font-semibold mb-4 text-lg">{item.position}</p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                    <span>{item.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <span>{item.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Calendar className="w-5 h-5 text-blue-600" />
                                    <span>{item.reception}</span>
                                </div>
                            </div>

                            <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                {item.bio}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Leadership
