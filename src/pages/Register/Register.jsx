import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLog = () => {
    navigate("/Login");
  };

  return (
    <>
      <div className="lg:grid grid-cols-2 font-poppins">
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="lg:hidden flex justify-center mt-4">
            <img src="/ISSTECH-logo-black.png" alt="" className="h-[40px]" />
          </div>

          <p className="font-semibold text-3xl mt-5 lg:mt-0 lg:text-5xl">
            CREA TU CUENTA
          </p>

          <p className="w-[50%] text-xs font-light pt-3 lg:w-[40%] lg:text-base text-center">
            Rellena los campos con la información correspondiente
          </p>

          <form className="flex flex-col pt-4 lg:pt-6 gap-5">
            <input
              className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-10 w-[300px] lg:h-14 lg:w-[500px]"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-9 lg:h-14 w-[300px] lg:w-[500px]"
              type="text"
              placeholder="Apellido"
            />
            <input
              className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-9 lg:h-14 w-[300px] lg:w-[500px]"
              type="email"
              placeholder="Correo"
            />
            <input
              className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-9 lg:h-14 w-[300px] lg:w-[500px]"
              type="text"
              placeholder="Firma electrónica"
            />
            <input
              className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-9 lg:h-14 w-[300px] lg:w-[500px]"
              type="number"
              placeholder="Teléfono"
            />
            <input
              className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-9 lg:h-14 w-[300px] lg:w-[500px]"
              type="password"
              placeholder="Contraseña"
            />
            <input
              className="border-[#8d8d8d] text-sm lg:text-base border-[1.5px] lg:border-2 rounded-xl lg:rounded-2xl p-4 h-9 lg:h-14 w-[300px] lg:w-[500px]"
              type="password"
              placeholder="Repite tu contraseña"
            />

            <button
              onClick={handleLog}
              className="bg-[#2c2c2c] font-medium text-white rounded-2xl p-4 mt-5 lg:mt-8"
            >
              Registrarse
            </button>
          </form>

          <p className="lg:hidden font-light">
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={handleLog}
              className="bg-white font-medium text-[#2c2c2c] mt-2 mb-0 lg:px-10 rounded-2xl py-3 lg:mt-4 lg:mb-2"
            >
              Inicia sesión
            </button>
          </p>
        </div>

        <div className="hidden lg:block lg:relative">
          <img
            src="/login-img.png"
            className="w-full h-screen object-cover"
            alt=""
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-10 w-[470px] rounded-xl shadow-lg text-center text-white">
            <div className="flex justify-center mt-2">
              <img src="/ISSTECH-logo.png" alt="" className="mb-6 h-[70px]" />
            </div>
            <p className="text-4xl font-medium mb-6">BIENVENIDO</p>
            <p className="text-lg font-light mb-8">
              Ingresa tu información para poder crear tu cuenta correctamente
            </p>
            <div className="border-t-2 mb-6 border-white"></div>
            <p className="font-light">¿Ya tienes una cuenta?</p>
            <button
              onClick={handleLog}
              className="bg-white font-medium text-[#2c2c2c] px-10 rounded-2xl py-3 mt-4 mb-2"
            >
              Inicia sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
