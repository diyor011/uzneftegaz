import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    // console.log(items);


    // Tashqariga bosilganda yopish
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left " ref={dropdownRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-2 rounded-md transition hover:text-[#00A2DE]"
            >
                <span className="cursor-pointer font-semibold">{title}</span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && Array.isArray(items) && items.length > 0 && (
                <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg z-50 ">
                    <ul className="py-2 cursor-pointer">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer hover:text-[#00A2DE]"
                            >
                                <Link to={item.path || "#"}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
