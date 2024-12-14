import React from "react";
import headPosterImg from "../../../assets/imgs/header-img.jpeg";

const HeaderPoster = ({ title }) => {
  return (
    <div
      className="w-full h-[20rem] flex justify-center items-center rounded-lg"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${headPosterImg}) center center no-repeat`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold text-white">{title}</h1>
    </div>
  );
};

export default HeaderPoster;
