import React, { useRef, useState } from "react";
import Dropdown from "../components/Dropdawn.jsx";
import { Link } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown.jsx";
import { useTranslation } from "react-i18next";
import { MdMenuOpen } from "react-icons/md";
import MenuList from "./MenuListMobile.jsx";
import logo from "../assets/logo.png"

const Navbar = () => {
  const { t } = useTranslation();
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  // JSON fayldan keladigan tarjima massivini olish
  const dropdowns = t("menu", { returnObjects: true }) || [];


  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-[90%] mx-auto flex gap-6 justify-between py-2 items-center">
        <Link to={"/"}>
          <img className="w-20" src={logo} alt="logo" />
        </Link>

        <div className=" hidden    lg:flex">
          {dropdowns.map((drop, i) => (
            <Dropdown key={i} title={drop.title} items={drop.items} />
          ))}
        </div>
        <div className="flex items-center gap-2">

          <LanguageDropdown />
          <div className="flex lg:hidden">
            <div className="drawer drawer-end">
              <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-5" className="drawer-button "><MdMenuOpen className="text-2xl" /></label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-100  z-50 min-h-full w-80 p-4">
                  <MenuList dropdowns={dropdowns} />
                </ul>
              </div>
            </div>

          </div>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
