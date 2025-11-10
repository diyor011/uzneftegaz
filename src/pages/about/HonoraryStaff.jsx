import React, { useEffect, useState } from 'react';
import { Award, Star, Trophy, Medal, Target, Zap, Heart, TrendingUp } from 'lucide-react';
import logo from "../../assets/minLogo.png"
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function HonoraryEmployees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [data, Setdata] = useState([])
  const lang = useSelector((state) => state.language.lang);
  const getProduct = async () => {
    try {
      const response = await fetch(`https://uzneftegaz-backend-production.up.railway.app/api/honorary/`)
      const data = await response.json()
      Setdata(data.data)
      if (!response.ok) {
        throw new Error(response.status)
      }
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])


  const { t } = useTranslation();


  return (
    <div className="min-h-screen max-w-[90%] mx-auto">


      <div className='flex items-center gap-2 mt-16
            mb-12    '>
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold  text-info duration-300">
          {t("about.honoraryStaff")}
        </h2>

      </div>

      {/* Employees Grid */}
      <div className=" pb-20 mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((employee) => (
            <div
              key={employee._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="relative bg-info h-48 flex items-center justify-center">
                <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                  <Medal className="w-6 h-6 text-orange-600" />
                </div>
                <div className="overflow-hidden max-h-[230px] ">
                  <img  className=' w-full h-full mb-12 object-cover' src={`${employee.image}`} alt="" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{employee.fullName?.[lang]}</h3>
                <p className="text-orange-400 font-semibold mb-4">{employee.specialist?.[lang]}</p>

                {/* Stats Mini */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center bg-yellow-50 rounded-lg py-2">
                    <div className="text-xl font-bold text-orange-400">{employee.experience?.[lang]}</div>
                    <div className="text-xs text-gray-600">     {t("about.honoraryStaffyear")}</div>
                  </div>
                  <div className="text-center bg-orange-50 rounded-lg py-2">
                    <div className="text-xl font-bold text-orange-400">{employee.project?.[lang]}+</div>
                    <div className="text-xs text-gray-600">{t("about.honoraryStaffproject")}</div>
                  </div>
                  <div className="text-center bg-red-50 rounded-lg py-2">
                    <div className="text-xl font-bold text-info">{employee.grade?.[lang]}%</div>
                    <div className="text-xs text-gray-600"> {t("about.honoraryStaffproject")}</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl mb-4 border-l-4 border-orange-500">
                  <p className="text-sm italic text-gray-700">"{employee.description?.[lang]}"</p>
                </div>

             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}