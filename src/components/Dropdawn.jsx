import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tashqariga bosilganda yopish
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside); // <-- o'zgartirildi
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 px-2 py-2 rounded-md transition hover:text-[#00A2DE]"
      >
        <span className="cursor-pointer font-semibold text-md">{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && Array.isArray(items) && items.length > 0 && (
        <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg z-50">
          <ul className="py-2 cursor-pointer flex flex-col">
            {items.map((item, index) => (
                <Link
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:text-[#00A2DE]"
                  to={item.path || "#"}
                >
                  {item.label}
                </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
