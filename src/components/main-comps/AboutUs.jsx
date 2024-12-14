import React from "react";
import HeaderPoster from "./reusable-comps/HeaderPoster";

import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

//Section-1
import img1 from "../../assets/imgs/about-us/img2.png";
import img2 from "../../assets/imgs/about-us/img1.jpeg";
import img3 from "../../assets/imgs/about-us/img3.png";

//Section-2
import img4 from "../../assets/imgs/about-us/img4.png";

// Section-3
import img5 from "../../assets/imgs/about-us/person.jpeg";
import img6 from "../../assets/imgs/about-us/img5.png";

// Section-4
import team1 from "../../assets/imgs/about-us/team1.jpeg";
import team2 from "../../assets/imgs/about-us/team2.jpeg";
import team3 from "../../assets/imgs/about-us/team3.jpeg";
import ContactForm from "./reusable-comps/ContactForm";

const AboutUs = () => {
  const cardDetails = [
    { img: team1, name: "Selena Smite", role: "Expert Team Guide" },
    { img: team2, name: "Selena Smite", role: "Expert Team Guide" },
    { img: team3, name: "Selena Smite", role: "Expert Team Guide" },
  ];

  return (
    <div className="max-w-container mx-auto my-5">
      <HeaderPoster title={"About Us"} />

      {/* Section-1 */}
      <div className="w-full flex justify-between my-28">
        <div className="w-[35%]">
          <h1 className="text-4xl font-bold mb-2">Welcome to MaltaXplore</h1>
          <p className="font-semibold text-lg my-4">
            Your ultimate guide to discovering the rich heritage, stunning
            landscapes, and vibrant culture of Malta.{" "}
          </p>
          <p className="mb-3">
            Whether you’re planning a relaxing getaway, an adventure-filled
            trip, or exploring Malta’s history and traditions, MaltaXplore is
            here to make your journey unforgettable.
          </p>
          <p>
            As a team of passionate locals and travel enthusiasts, we bring
            together firsthand knowledge and insider tips to help you explore
            Malta like never before. From iconic landmarks to hidden gems, from
            culinary delights to thrilling experiences, we aim to connect you
            with the very best Malta has to offer.
          </p>
        </div>

        {/*  */}
        <div className="w-[50%] flex justify-between">
          <div className="w-[30%] relative">
            <div className="w-[85%] h-[8rem] rounded-lg overflow-hidden absolute top-10 -right-20 border-4 border-primary--bg">
              <img src={img2} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-full h-[12rem] rounded-lg overflow-hidden absolute bottom-10 -right-2">
              <img src={img1} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-[65%]">
            <div className="w-full h-[26rem] rounded-lg overflow-hidden">
              <img src={img3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="w-full">
        <div className="w-full flex">
          <div className="w-[59%] h-[30rem] rounded-lg overflow-hidden relative">
            <div className="absolute bg-primary--bg rounded-br-lg w-[30%] pb-7">
              <div className="w-5 h-[120%] bg-primary--bg absolute -right-3 bottom-0 rounded-2xl rotate-[17deg]"></div>
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <img src={img4} alt="" className="w-full h-full object-cover" />
          </div>
          {/*  */}
          <div className="w-[40%] relative mt-10">
            <div className="w-[100%] absolute -left-10 -bottom-10 p-10 bg-primary--bg shadow-lg rounded-lg">
              <p className="font-semibold text-lg mb-8">
                MaltaXplore began with a simple idea: to share the unmatched
                beauty and rich culture of Malta with the world. What started as
                a passion project by a group of avid travelers and proud locals
                has grown into a trusted platform for exploring everything the
                Maltese Islands have to offer.
              </p>

              <p>
                Driven by a love for Malta’s history, stunning vistas, and warm
                hospitality, we set out to create a space where visitors can
                find authentic insights and practical advice to make their trip
                unforgettable. Our story is one of connection, inspiration, and
                a deep commitment to showcasing the heart of Malta to travelers
                from all walks of life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section-3 */}
      <div className="w-full mt-36">
        <div className="w-[70%] mx-auto">
          <div className="w-full flex justify-between">
            <svg
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6837 22.8274C19.6837 20.9941 20.1628 19.4545 21.1212 18.2087C21.8003 17.3503 22.7219 16.7864 23.8857 16.517C25.0316 16.2503 26.1149 16.2316 27.0941 16.4587C27.4274 14.4795 26.8857 12.3837 25.5107 10.1628C24.133 7.94338 22.3566 6.27463 20.1816 5.15658L23.4753 0.416992C25.142 1.24199 26.7253 2.28783 28.1837 3.55241C29.6628 4.81699 30.9753 6.27116 32.142 7.91491C33.3087 9.55866 34.1837 11.4149 34.7462 13.5191C35.3087 15.6232 35.4649 17.7691 35.1962 19.9774C34.8462 22.8941 33.9045 25.2274 32.3712 26.9566C30.8392 28.708 28.9309 29.5837 26.6462 29.5837C24.6357 29.5837 22.967 28.9795 21.6462 27.7545C20.3392 26.5545 19.6864 24.91 19.6878 22.8212L19.6837 22.8274ZM0.675327 22.8274C0.675327 20.9941 1.1545 19.4545 2.11283 18.2087C2.79338 17.3337 3.71491 16.7663 4.87741 16.5066C6.04408 16.2496 7.11352 16.2344 8.08574 16.4607C8.41908 14.5024 7.89824 12.3982 6.51908 10.1691C5.14408 7.96074 3.36908 6.29408 1.19408 5.16908L4.4795 0.416992C6.14755 1.24199 7.717 2.28713 9.18783 3.55241C10.6803 4.83589 12.0059 6.30149 13.1337 7.91491C14.292 9.56074 15.1545 11.4149 15.717 13.5191C16.2884 15.6216 16.442 17.8158 16.1691 19.9774C15.8232 22.8941 14.8857 25.2274 13.3566 26.9566C11.8288 28.6955 9.92394 29.5649 7.64199 29.5649C5.62811 29.5677 3.96005 28.9587 2.63783 27.7378C1.33088 26.5378 0.676716 24.8934 0.675327 22.8045V22.8274Z"
                fill="#E92B2B"
              />
            </svg>
            <svg
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6837 22.8274C19.6837 20.9941 20.1628 19.4545 21.1212 18.2087C21.8003 17.3503 22.7219 16.7864 23.8857 16.517C25.0316 16.2503 26.1149 16.2316 27.0941 16.4587C27.4274 14.4795 26.8857 12.3837 25.5107 10.1628C24.133 7.94338 22.3566 6.27463 20.1816 5.15658L23.4753 0.416992C25.142 1.24199 26.7253 2.28783 28.1837 3.55241C29.6628 4.81699 30.9753 6.27116 32.142 7.91491C33.3087 9.55866 34.1837 11.4149 34.7462 13.5191C35.3087 15.6232 35.4649 17.7691 35.1962 19.9774C34.8462 22.8941 33.9045 25.2274 32.3712 26.9566C30.8392 28.708 28.9309 29.5837 26.6462 29.5837C24.6357 29.5837 22.967 28.9795 21.6462 27.7545C20.3392 26.5545 19.6864 24.91 19.6878 22.8212L19.6837 22.8274ZM0.675327 22.8274C0.675327 20.9941 1.1545 19.4545 2.11283 18.2087C2.79338 17.3337 3.71491 16.7663 4.87741 16.5066C6.04408 16.2496 7.11352 16.2344 8.08574 16.4607C8.41908 14.5024 7.89824 12.3982 6.51908 10.1691C5.14408 7.96074 3.36908 6.29408 1.19408 5.16908L4.4795 0.416992C6.14755 1.24199 7.717 2.28713 9.18783 3.55241C10.6803 4.83589 12.0059 6.30149 13.1337 7.91491C14.292 9.56074 15.1545 11.4149 15.717 13.5191C16.2884 15.6216 16.442 17.8158 16.1691 19.9774C15.8232 22.8941 14.8857 25.2274 13.3566 26.9566C11.8288 28.6955 9.92394 29.5649 7.64199 29.5649C5.62811 29.5677 3.96005 28.9587 2.63783 27.7378C1.33088 26.5378 0.676716 24.8934 0.675327 22.8045V22.8274Z"
                fill="#E92B2B"
              />
            </svg>
          </div>
          <h1 className="text-center text-3xl">
            At MaltaXplore, we aim to inspire and guide travelers, ensuring
            every visit to Malta is unforgettable and authentic.
          </h1>

          <div className="w-[10rem] h-[10rem] mx-auto flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img src={img5} alt="" className="w-full h-full object-cover" />
            </div>

            <p className="text-balance font-semibold mt-4">Cleven D’amato</p>
            <p className="text-sm">CEO & Founder</p>
          </div>
        </div>

        {/*  */}
        <div className="relative">
          <div className="w-full h-[30rem] rounded-lg overflow-hidden relative flex justify-center">
            <div className="w-[50%] h-[4rem] absolute bg-primary--bg rounded-b-lg text-center">
              <div className="w-5 h-[120%] bg-primary--bg rounded-xl rotate-[15deg] absolute -right-2 bottom-0"></div>
              <div className="w-5 h-[120%] bg-primary--bg rounded-xl rotate-[-15deg] absolute -left-2 bottom-0"></div>
              <h1 className="text-3xl font-semibold">We are on amission</h1>
            </div>
            <img src={img6} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="w-full flex justify-between absolute -bottom-52">
            <div className="w-[45%] p-10 bg-primary--bg shadow-xl rounded-lg">
              <h1 className="text-3xl font-semibold mb-5">Our Mission</h1>
              <p>
                At MaltaXplore, our mission is to inspire and empower travelers
                by providing reliable, in-depth information about Malta’s
                attractions, activities, and accommodations. We are committed to
                being your trusted resource, ensuring every visitor to Malta has
                access to accurate, up-to-date, and personalized travel
                insights.
              </p>
            </div>

            <div className="w-[45%] p-10 bg-primary--bg shadow-xl rounded-lg">
              <h1 className="text-3xl font-semibold mb-5">Our Vision</h1>
              <p>
                To become the leading platform for exploring Malta, recognized
                globally for fostering meaningful travel experiences, promoting
                sustainable tourism, and celebrating the unique beauty of the
                Maltese Islands.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section-4 */}
      <div className="w-full mt-72">
        <h1 className="text-center text-3xl font-bold mb-10">
          Meet with our smart team
        </h1>
        <div className="w-full flex justify-between">
          {cardDetails.map((item, index) => {
            return (
              <div className="w-[30%] h-[35rem]">
                <div className="w-full h-[80%] rounded-lg overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <section className="flex justify-between mt-3">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-8 h-8 flex justify-center items-center rounded-full bg-neutral-200"
                    >
                      <TiSocialLinkedin />
                    </a>

                    <a
                      href="#"
                      className="w-8 h-8 flex justify-center items-center rounded-full bg-neutral-200"
                    >
                      <FaXTwitter />
                    </a>

                    <a
                      href="#"
                      className="w-8 h-8 flex justify-center items-center rounded-full bg-neutral-200"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default AboutUs;
