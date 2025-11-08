import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import i18n from "../i18n";
import { useDispatch, useSelector } from "react-redux";

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);

  const currentLang = localStorage.getItem("lang") || "oz";
  const [title, setTitle] = useState(
    currentLang === "uz" ? "Ozbekcha" :
      currentLang === "ru" ? "Русский" :
        "Ўзбекча"
  );

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const changeLanguage = (lang, title) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setTitle(title);
    setOpen(false);
    dispatch({ type: "SET_LANGUAGE", payload: lang });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-base-100 hover:bg-base-200 cursor-pointer transition"
      >
        <Globe className="w-5 h-5" />
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-40 rounded-lg bg-white shadow-lg z-50">
          <ul className="py-2 text-sm">
            <li
              className="px-4 py-2 cursor-pointer hover:text-[#00A2DE]"
              onClick={() => changeLanguage("oz", "Ўзбекча")}
            >
              Ўзбекча
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:text-[#00A2DE]"
              onClick={() => changeLanguage("ru", "Русский")}
            >
              Русский
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:text-[#00A2DE]"
              onClick={() => changeLanguage("uz", "Ozbekcha")}
            >
              Ozbekcha
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
