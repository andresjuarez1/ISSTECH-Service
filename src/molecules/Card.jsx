import React from "react";

const Card = ({ data, onClick }) => {
  return (
    <>
      <div
        className="bg-white rounded-2xl pt-5 px-8 w-[85%] h-min flex flex-col items-center font-poppins text-justify mb-10 cursor-pointer"
        onClick={onClick}
      >
        <img src={data.image} className="w-full" alt={data.title} />
        <p className="text-2xl font-medium pt-3">{data.title}</p>
        <p className="text-lg font-light pb-3">{data.date}</p>
        <p className="text-base font-light pb-10">{data.description}</p>
      </div>
    </>
  );
};

export default Card;
