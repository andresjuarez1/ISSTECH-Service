import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/');
  };

  const handleDashboard = () => {
    navigate('/Dashboard');
  };

  return (
    <>
      <div className='grid grid-cols-2 font-poppins'>
        <div className='flex flex-col justify-center items-center'>

          <div className="pb-5 flex flex-col justify-center items-center">
            <p className='font-semibold text-5xl pb-3'>INICIA SESIÓN</p>
            <p className='text-base font-light pt-3 w-[75%] text-center'>Rellena los campos con la información correspondiente</p>
          </div>

          <form className='flex flex-col pt-6 gap-5'>
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14  w-[500px] mb-2' type='email' placeholder='Correo' />
            <input className='border-[#8d8d8d] border-2 rounded-2xl p-4 h-14' type='password' placeholder='Contraseña' />
            <button onClick={handleDashboard} className='bg-[#2c2c2c] font-medium text-white rounded-2xl p-4 mt-8'>Inicia sesión</button>
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
            <p className='text-lg font-light mb-8'>Ingresa tu información para poder acceder a tu cuenta correctamente</p>
            <div className='border-t-2 mb-6 border-white'></div>
            <p className='font-light'>¿No tienes una cuenta?</p>

            <button onClick={handleRegister} className='bg-white font-medium text-[#2c2c2c] px-10 rounded-2xl py-3 mt-4 mb-2'>Registrate</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default Login