import React from "react";
import Navbar from "../../molecules/Navbar";
import { useRef } from "react";

const Upload = () => {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <Navbar />
      <div className="font-poppins flex justify-center items-center">
        <div className="bg-[#EFEFEF] w-[90%] lg:w-[60%] flex flex-col mt-40 justify-center items-center lg:mt-20 mb-20 rounded-3xl">
          <p className="text-2xl mb-4 mt-4 lg:mt-0 lg:mb-0 lg:text-3xl font-medium text-center pt-5 pb-5 lg:pt-20 lg:pb-10">
            Crear documento
          </p>
          <input
            className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-9 lg:h-14 w-[300px] lg:w-[600px]"
            type="text"
            placeholder="Titulo del documento"
          />

          <input
            className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-9 lg:h-14 w-[300px] lg:w-[600px] mt-5 lg:mt-10 lg:mb-10"
            type="text"
            placeholder="Descripción"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            style={{ display: "none" }}
          />
          <button
            onClick={handleFileSelect}
            className="border-[#2c2c2c] lg:mt-0 mt-10 text-xs lg:text-base w-[180px] border-2 bg-white lg:w-[300px] font-medium text-[#2c2c2c] rounded-2xl p-3"
          >
            Subir documento
          </button>

          <button className="bg-[#2c2c2c] lg:text-base text-xs w-[180px] lg:w-[300px] font-medium text-white rounded-2xl p-4 mb-10 mt-8 lg:mb-20">
            Crear documento
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
