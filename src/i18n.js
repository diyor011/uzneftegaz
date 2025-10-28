import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./i18n/uz.json";
import ru from "./i18n/ru.json";
import oz from "./i18n/oz.json";

// ⬇️ localStorage dan so‘nggi tilni olish
const savedLang = localStorage.getItem("lang") || "oz";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: oz },
    ru: { translation: ru },
    oz: { translation: uz },
  },
  lng: savedLang, // ⬅️ so‘nggi tanlangan til
  fallbackLng: "oz",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
