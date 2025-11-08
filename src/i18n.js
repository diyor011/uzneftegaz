import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./i18n/uz.json";
import ru from "./i18n/ru.json";
import oz from "./i18n/oz.json";

const savedLang = localStorage.getItem("lang") || "oz";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    ru: { translation: ru },
    oz: { translation: oz },
  },
  lng: savedLang,
  fallbackLng: "oz",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
