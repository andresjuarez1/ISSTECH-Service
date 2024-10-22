import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLog = () => {
    navigate('/Login');
  };

  return (
    <>
      <div className='grid grid-cols-2 font-poppins'>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-semibold text-5xl'>CREA TU CUENTA</p>

          <p className='text-base font-light pt-3 w-[40%] text-center'>Rellena los campos con la información correspondiente</p>

          <form className='flex flex-col pt-6 gap-5'>
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14 w-[500px]' type='text' placeholder='Nombre' />
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14' type='text' placeholder='Apellido' />
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14' type='email' placeholder='Correo' />
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14' type='text' placeholder='Firma electrónica' />
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14' type='number' placeholder='Teléfono' />
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14' type='password' placeholder='Contraseña' />
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14' type='password' placeholder='Repite tu contraseña' />

            <button onClick={handleLog} className='bg-[#2c2c2c] font-medium text-white rounded-2xl p-4 mt-8'>Registrarse</button>
          </form>
        </div>

        <div className="relative">
          <img
            src="/login-img.png"
            className="w-full h-screen object-cover"
            alt=""
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-10 w-[470px] rounded-xl shadow-lg text-center text-white">
            <div className='flex justify-center mt-2'>
              <img src="/ISSTECH-logo.png" alt="" className='mb-6 h-[70px]' />
            </div>
            <p className="text-4xl font-medium mb-6">BIENVENIDO</p>
            <p className='text-lg font-light mb-8'>Ingresa tu información	para poder crear tu cuenta correctamente</p>
            <div className='border-t-2 mb-6 border-white'></div>
            <p className='font-light'>¿Ya tienes una cuenta?</p>
            <button onClick={handleLog} className='bg-white font-medium text-[#2c2c2c] px-10 rounded-2xl py-3 mt-4 mb-2'>Inicia sesión</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default Login
