import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navs = [
    { title: "Home", path: "#" },
    { title: "About us", path: "#" },
    { title: "Services", path: "#" },
    { title: "Tour Listing", path: "#" },
    { title: "Supplier Registration", path: "#" },
  ];
  return (
    <div className="max-w-container mx-auto mt-5">
      {/* top */}
      <div className="w-full flex justify-between items-center h-[3rem]">
        <h3 className="text-lg font-bold">Logo Here</h3>

        <ul className="flex">
          {navs.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className="block px-5 text-sm">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          style={{ backgroundColor: "#FFCACA" }}
          className="py-1 px-4 rounded-sm"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
