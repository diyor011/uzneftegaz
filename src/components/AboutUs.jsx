import React, { useState, useEffect } from 'react';
import { Users, Target, Award, TrendingUp, Heart, Zap } from 'lucide-react';

export default function AboutUs() {
    const [counts, setCounts] = useState({ years: 0, clients: 0, projects: 0 });

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targets = { years: 5, clients: 150, projects: 200 };
        let step = 0;

        const timer = setInterval(() => {
            step++;
            setCounts({
                years: Math.floor((targets.years * step) / steps),
                clients: Math.floor((targets.clients * step) / steps),
                projects: Math.floor((targets.projects * step) / steps)
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Maqsadga Yo'nalganlik",
            desc: "Har bir loyihada aniq natijaga erishish"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Mijozlar Mamnuniyati",
            desc: "Sizning muvaffaqiyatingiz - bizning maqsadimiz"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Innovatsiya",
            desc: "Zamonaviy texnologiyalar va yechimlar"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Sifat Kafolati",
            desc: "Yuqori standartlar va professional yondashuv"
        }
    ];

    const team = [
        { name: "Aziz Rahimov", role: "Founder & CEO", img: "👨‍💼" },
        { name: "Madina Karimova", role: "Creative Director", img: "👩‍🎨" },
        { name: "Sardor Tursunov", role: "Tech Lead", img: "👨‍💻" },
        { name: "Dilnoza Sharipova", role: "Project Manager", img: "👩‍💼" }
    ];

    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <div className=" mx-auto px-6 py-20">
                <div className="text-center mb-16">

                    <h2 className="text-2xl font-bold  mb-4 max-w-3xl mx-auto leading-relaxed">
                        Biz “Нефт газ бино иншоот” МЧЖ
                    </h2>
                    <p>“NEFT GAZ BINO INSHOAT” МЧЖ фаолияти бино ва иншоотлардан ишончли ва самарали фойдаланиш, “Ўзбекнефтгаз” акциядорлик жамияти биноларига замонавий аутсорсинг хизматлар ва бошка ташкилотлар фаолияти учун мўътадил ишлаб чиқариш шароитларини таъминлаш билан шуғулланади.

                        Жамият юридик шахс сифатида “Ўзбекнефтгаз” акциядорлик жамияти томонидан ташкил этилган. “Ўзбекнефтгаз” акциядорлик жамиятнинг бевосита таркибга киради ва унинг фаолиятида Ўзбекистон Республикаси қонунлари, Президент фармонлари, Ўзбекистон Республикаси Вазирлар Маҳкамасининг қарорлари ва фармойишларига ва “Ўзбекнефтгаз” АЖ кўрсатмаларига амал қилади.</p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-5xl font-bold text-info mb-2">{counts.years}+</div>
                        <div className="text-gray-600 font-medium">Yillik Tajriba</div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-5xl font-bold text-info mb-2">{counts.clients}+</div>
                        <div className="text-gray-600 font-medium">Baxtli Mijozlar</div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-5xl font-bold text-orange-400 mb-2">{counts.projects}+</div>
                        <div className="text-gray-600 font-medium">Bajarilgan Loyihalar</div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gradient-to-br bg-info p-10 rounded-3xl text-white">
                        <h3 className="text-3xl font-bold mb-4">Missiyamiz</h3>
                        <p className="text-lg leading-relaxed opacity-90">
                            Mijozlarimizga eng yaxshi xizmat ko'rsatish va ularning
                            biznes maqsadlariga erishishda ishonchli hamkor bo'lish.
                            Biz sifat, innovatsiya va samaradorlikka e'tibor qaratamiz.
                        </p>
                    </div>

                    <div className=" bg-orange-400  p-10 rounded-3xl text-white">
                        <h3 className="text-3xl font-bold mb-4">Viziyamiz</h3>
                        <p className="text-lg leading-relaxed opacity-90">
                            Texnologiya va ijodkorlikning uyg'unligida eng yaxshi
                            yechimlar yaratuvchi yetakchi kompaniya bo'lish.
                            Har bir loyihada yangi standartlar o'rnatish.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                        Bizning Qadriyatlarimiz
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-info duration-500 transition-all group-hover:bg-orange-400 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}