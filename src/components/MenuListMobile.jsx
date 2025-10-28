import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const MenuList = ({ dropdowns }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const menuRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col gap-1 w-full" ref={menuRef}>
            {dropdowns.map((drop, i) => (
                <div key={i} className="w-full">
                    {/* Tugma */}
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="flex justify-between items-center w-full px-3 py-2 text-left hover:text-[#00A2DE] transition"
                    >
                        <span>{drop.title}</span>
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                   
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 opacity-100 mt-1" : "max-h-0 opacity-0"
                            }`}
                    >
                        {Array.isArray(drop.items) && drop.items.length > 0 && (
                            <ul className=" rounded-md  shadow-sm">
                                {drop.items.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={item.path || "#"}
                                            className="block px-5 py-2 border-b border-base-300 shadow hover:text-[#00A2DE]"
                                        >
                                            {item.label || item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
