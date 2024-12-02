import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLog = () => {
    navigate("/Login");
  };

  const HandleDocument = () => {
    navigate("/Dashboard");
  };

  const handleSend = () => {
    navigate("/Send");
  };

  const handleReceived = () => {
    navigate("/Received");
  };

  const handleUploadDocument = () => {
    navigate("/Upload");
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <nav>
      <ul className="hidden lg:flex justify-center lg:justify-between p-8 font-poppins mt-2">
        <button
          className="hidden lg:block ml-10"
          onClick={handleUploadDocument}
        >
          Subir documento
        </button>

        <div className="gap-2 lg:gap-10 mt-3 lg:mr-10 flex text-center lg:text-base text-xs">
          <li className="relative w-[80px] group">
            <button className="hover:font-semibold" onClick={HandleDocument}>
              Principal
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-2 w-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </li>

          <li className="relative w-[80px] group">
            <button className="hover:font-semibold" onClick={handleReceived}>
              Recibido
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-2 w-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </li>

          <li className="relative w-[80px] group">
            <button className="hover:font-semibold" onClick={handleSend}>
              Enviados
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-2 w-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </li>

          <li className="relative w-[80px] group">
            <button className="hover:font-semibold" onClick={handleLog}>
              Salir
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-2 w-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </li>
        </div>
      </ul>

      <div className="lg:hidden flex justify-between items-center p-4">
        <button onClick={toggleMenu} className="text-xl">
          ☰
        </button>
        <button onClick={handleUploadDocument}>Subir documento</button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl font-bold"
          >
            ✕
          </button>
          <ul className="text-center space-y-6">
            <li>
              <button
                className="text-xl hover:font-semibold"
                onClick={HandleDocument}
              >
                Principal
              </button>
            </li>
            <li>
              <button
                className="text-xl hover:font-semibold"
                onClick={handleReceived}
              >
                Recibido
              </button>
            </li>
            <li>
              <button
                className="text-xl hover:font-semibold"
                onClick={handleSend}
              >
                Enviados
              </button>
            </li>
            <li>
              <button
                className="text-xl hover:font-semibold"
                onClick={handleLog}
              >
                Salir
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
