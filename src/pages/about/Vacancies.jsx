import React, { useEffect, useState } from "react";
import logo from "../../assets/minLogo.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Briefcase, FileText, X, Upload } from "lucide-react";

const Vacancies = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [vacancyName, setVacancyName] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Telegram ma'lumotlari
  const BOT_TOKEN = "8127546280:AAGerl644eOstJZ0sFmNqhctdRjCAlCbHlo";
  const CHAT_ID = "2122893555";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async () => {
    if (!file || !vacancyName) return alert("Barcha maydonlarni to‘ldiring!");

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("chat_id", CHAT_ID);
      formData.append(
        "caption",
        `🧾 Yangi ariza!\n\n💼 Vakansiya: ${vacancyName}`
      );
      formData.append("document", file);

      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        alert("✅ Rezume muvaffaqiyatli yuborildi!");
        setVacancyName("");
        setFile(null);
        setFileName("");
        document.getElementById("my_modal_1").close();
      } else {
        alert("❌ Yuborishda xatolik yuz berdi!");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Internetda muammo bo'lishi mumkin.");
    } finally {
      setLoading(false);
    }
  };

  const [data, Setdata] = useState([]);
  const lang = useSelector((state) => state.language.lang);
  const { t } = useTranslation();

  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://uzneftegaz-backend-production.up.railway.app/api/vacancies`
      );
      const data = await response.json();
      Setdata(data.vacancies);
      if (!response.ok) {
        throw new Error(response.status);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
    
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-[90%] mx-auto px-6 mb-12">
      <div className="flex items-center gap-2 mt-8 mb-12">
        <img src={logo} alt="" />
        <h2 className="text-4xl font-bold text-info duration-300">
          {t("about.vacancies")}
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20 ">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-info"></div>
        </div>
      ) : (
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title?.[lang]}
                  </h3>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 px-4 py-2 rounded-lg font-bold">
                  {item.salaryType?.[lang]}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">
                      {t("about.vacanciessalary")}
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      {item.salary?.[lang]}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">
                      {t("about.vacanciesrequirements")}
                    </p>
                    <p className="text-gray-700">{item.description?.[lang]}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">
                      {t("about.vacanciesappeal")}
                    </p>
                    <p className="text-gray-700">{item.deadline?.[lang]}</p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="btn bg-orange-400 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <Briefcase className="inline-block mr-2" size={20} />
                  {t("about.vacanciesModalApply")}
                </button>

                <dialog id="my_modal_1" className="modal backdrop-blur-sm">
                  <div className="modal-box max-w-md bg-white rounded-2xl shadow-2xl p-0 overflow-hidden">
                    <div className="bg-info p-6 text-white relative">
                      <button
                        className="absolute top-4 right-4 hover:bg-white/20 rounded-full p-1"
                        onClick={() =>
                          document.getElementById("my_modal_1").close()
                        }
                      >
                        <X size={24} />
                      </button>
                      <h3 className="font-bold text-2xl mb-2">
                        {" "}
                        {t("about.vacanciesModalSendResume")}
                      </h3>
                      <p className="text-blue-50 text-sm">
                        {t("about.vacanciesModalDescription")}
                      </p>
                    </div>

                    <div className="p-6 space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Briefcase className="inline-block mr-1" size={16} />
                          {t("about.vacanciesModalVacancyName")}
                        </label>
                        <input
                          type="text"
                          placeholder={`${t(
                            "about.vacanciesExamplePosition"
                          )} `}
                          value={vacancyName}
                          onChange={(e) => setVacancyName(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <FileText className="inline-block mr-1" size={16} />
                          {t("about.vacanciesModalResume")} (PDF, DOC, DOCX)
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-upload"
                          />
                          <label
                            htmlFor="file-upload"
                            className="flex items-center justify-center w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group"
                          >
                            <div className="text-center">
                              <Upload
                                className="mx-auto mb-2 text-gray-400 group-hover:text-blue-500 transition-colors"
                                size={32}
                              />
                              {fileName ? (
                                <p className="text-sm font-medium text-gray-700">
                                  {fileName}
                                </p>
                              ) : (
                                <>
                                  <p className="text-sm font-medium text-gray-600">
                                    {t("about.vacanciesInputUpload")}
                                  </p>
                                </>
                              )}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="p-6  flex gap-3">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_1").close()
                        }
                        className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100"
                      >
                        {t("about.vacanciesModalCloseBtn")}
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!vacancyName || !file || loading}
                        className="flex-1 px-4 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-orange-600 disabled:opacity-50 transition-all"
                      >
                        {loading ? "Yuborilmoqda..." : "Yuborish"}
                      </button>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vacancies;
