import React from 'react'

const Vacancies = () => {
    const arr = [
        {
            id: 1,
            position: "Yoshlar siyosati bo'yicha mutaxassis",
            department: "Yoshlar ishlari bo'limi",
            salary: "5,000,000 - 7,000,000 so'm",
            type: "To'liq stavka",
            requirements: "Oliy ma'lumot, 2 yillik tajriba",
            deadline: "05.11.2025"
        },
        {
            id: 2,
            position: "Sport-tarbiyaviy ishlar mutaxassisi",
            department: "Sport va madaniyat bo'limi",
            salary: "4,500,000 - 6,500,000 so'm",
            type: "To'liq stavka",
            requirements: "Oliy ma'lumot, jismoniy tarbiya ta'limi",
            deadline: "10.11.2025"
        }
    ]
    return (
        <div className='  mx-auto mt-12 max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {arr.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.position}</h3>
                            <p className="text-blue-600 font-semibold">{item.department}</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 px-4 py-2 rounded-lg font-bold">
                            {item.type}
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold">Maosh</p>
                                <p className="text-lg font-bold text-gray-800">{item.salary}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold">Talablar</p>
                                <p className="text-gray-700">{item.requirements}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold">Murojaat qilish muddati</p>
                                <p className="text-gray-700">{item.deadline}</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-info hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                        Ariza yuborish
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Vacancies
