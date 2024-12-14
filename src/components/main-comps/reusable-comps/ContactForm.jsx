import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="w-full shadow-md flex justify-between p-28">
      {/*  */}
      <form className="w-[50%] ">
        <div className="flex w-full justify-between">
          <div className="w-[40%]">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="block border-2 border-gray-400 rounded-sm py-2 pl-4 w-full outline-none"
            />
          </div>

          <div className="w-[40%]">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="block border-2 border-gray-400 rounded-sm py-2 pl-4 w-full mb-5 outline-none"
            />
          </div>
        </div>

        <label>Email</label>
        <input
          type="email"
          placeholder="your mail address"
          className="block border-2 border-gray-400 rounded-sm py-2 pl-4 w-full mb-5 outline-none"
        />

        <label>Phone Number</label>
        <input
          type="text"
          placeholder="your phone number"
          className="block border-2 border-gray-400 rounded-sm py-2 pl-4 w-full mb-5 outline-none"
        />

        <label>Message</label>
        <textarea
          placeholder="Leave a mesage for us"
          className="block border-2 border-gray-400 rounded-sm py-2 pl-4 w-full mb-5 outline-none"
        />

        <button
          type="button"
          className="bg-primary--color rounded-sm w-full py-3 text-white"
        >
          Send Now
        </button>
      </form>
      {/*  */}
      <div className="w-[40%]">
        <div className="w-full">
          <p className="text-xl mb-4 font-semibold">Our Location:</p>
          <div className="flex gap-5">
            <span className="w-7 h-7 border border-black rounded-full flex justify-center items-center">
              <FaLocationDot />
            </span>
            <p>20, Guze Ellul Mercer Str, Iklin IKL1371 MALTA</p>
          </div>
        </div>

        <div className="w-full my-10">
          <p className="text-xl mb-4 font-semibold">Contact Us:</p>
          <div className="flex gap-5">
            <span className="w-7 h-7 border border-black rounded-full flex justify-center items-center">
              <FaPhoneAlt />
            </span>
            <p>123-456-789</p>
          </div>

          <div className="flex gap-5 mt-4">
            <span className="w-7 h-7 border border-black rounded-full flex justify-center items-center">
              <TbMailFilled />
            </span>
            <p>maltaxplore@gmail.com</p>
          </div>
        </div>

        <div className="w-full my-10">
          <p className="text-xl mb-4 font-semibold">Social Link:</p>
          <div className="flex gap-5">
            <span className="w-7 h-7 border border-black rounded-full flex justify-center items-center">
              <FaXTwitter />
            </span>

            <span className="w-7 h-7 border border-black rounded-full flex justify-center items-center">
              <FaFacebookF />
            </span>

            <span className="w-7 h-7 border border-black rounded-full flex justify-center items-center">
              <FaInstagram />
            </span>

            <span className="w-7 h-7 border border-black rounded-full flex justify-center items-center">
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
