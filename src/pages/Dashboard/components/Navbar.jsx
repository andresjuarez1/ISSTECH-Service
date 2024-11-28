import React from "react";
import SelectComponent from "../atoms/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLog = () => {
    navigate("/Login");
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "option1", label: "Departamento 1" },
    { value: "option2", label: "Departamento 2" },
    { value: "option3", label: "Departamento 3" },
  ];

  return (
    <nav>
      <ul className="justify-center lg:justify-between p-8 flex font-poppins mt-2">
        <div className="hidden lg:block">
          <SelectComponent
            label="Selecciona una dependencia"
            options={options}
            onChange={handleSelectChange}
            value={selectedOption}
          />
        </div>

        <div className="gap-10 mt-3 lg:mr-10 flex text-center">
          <li className="relative w-[80px] group">
            <button className="hover:font-semibold">Recibido</button>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-2 w-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </li>
          <li className="relative w-[80px] group">
            <button className="hover:font-semibold">Enviados</button>
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
    </nav>
  );
};

export default Navbar;
