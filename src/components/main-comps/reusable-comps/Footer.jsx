import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Footer = () => {
  const abtUs = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Destination" },
    { title: "Contact Us" },
  ];

  const services = [
    { title: "Support" },
    { title: "Explore" },
    { title: "Get in Touch" },
    { title: "Testimonials" },
  ];

  const contact = [
    { title: "20, Guze Ellul Mercer Str, Iklin IKL1371 MALTA" },
    { title: "123-456-789", icon: <FaPhoneAlt /> },
    { title: "maltaxplore@gmail.com", icon: <TbMailFilled /> },
  ];

  return (
    <div className="max-w-container--fluid bg-primary--color mt-32 text-white py-10">
      <div className="max-w-container mx-auto">
        {/*  */}
        <div className="w-full flex justify-center relative">
          <div className="w-4 h-[8rem] rounded-xl bg-primary--bg absolute -top-12"></div>
          <div className="w-4 h-[6rem] rounded-xl bg-primary--bg absolute -top-28 left-[52%]"></div>
          <div className="w-4 h-[5rem] rounded-xl bg-primary--bg absolute top-0 left-[52%]"></div>
        </div>
        {/*  */}
        <div className="w-full flex justify-between border-b py-5 mb-10 border-gray-400">
          <h1 className="text-3xl font-bold w-[40%]">
            SO WHY LATE? ONE STEEP FAR FROM A TOUR
          </h1>

          <div className="w-[40%] mt-3">
            <input
              type="text"
              placeholder="Your mail address"
              className="py-3 pl-4 w-[70%] rounded-sm"
            />
            <button className="py-3 ml-4 rounded-sm bg-neutral-50 text-black w-[20%]">
              Send
            </button>
          </div>
        </div>

        <div className="w-full border-b py-5 mb-10 border-gray-400 flex justify-between">
          <div className="w-[25%]">
            <h2 className="text-xl font-bold">LOGO HERE</h2>
            <p className="mt-3 text-sm">
              Immerse yourself in stunning visuals and captivating stories as
              you navigate through our website.{" "}
            </p>

            <div className="flex gap-5 mt-7">
              <span className="w-7 h-7 border border-primary--bg rounded-full flex justify-center items-center">
                <FaXTwitter />
              </span>

              <span className="w-7 h-7 border border-primary--bg rounded-full flex justify-center items-center">
                <FaFacebookF />
              </span>

              <span className="w-7 h-7 border border-primary--bg rounded-full flex justify-center items-center">
                <FaInstagram />
              </span>

              <span className="w-7 h-7 border border-primary--bg rounded-full flex justify-center items-center">
                <FaGithub />
              </span>
            </div>
          </div>

          <div className="w-[50%] flex justify-between">
            <ul>
              <p className="text-xl font-semibold mb-3">About Us</p>
              {abtUs.map((item, index) => {
                return (
                  <li key={index} className="my-2">
                    {item.title}
                  </li>
                );
              })}
            </ul>

            <ul>
              <p className="text-xl font-semibold mb-3">Services</p>
              {services.map((item, index) => {
                return (
                  <li key={index} className="my-2">
                    {item.title}
                  </li>
                );
              })}
            </ul>

            <ul>
              <p className="text-xl font-semibold mb-3">Contact Info</p>
              {contact.map((item, index) => {
                return (
                  <li key={index} className="my-2 flex gap-3">
                    {item.icon ? (
                      <span className="w-8 h-8 border-2 border-gray-300 rounded-full flex justify-center items-center">
                        {item.icon}
                      </span>
                    ) : (
                      ""
                    )}
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="text-center">
        {" "}
        <small className="text-gray-300">
          {" "}
          &copy; maltaxplore 2024 , All Rights Reserved
        </small>
      </div>
    </div>
  );
};

export default Footer;
