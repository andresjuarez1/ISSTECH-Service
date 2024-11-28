import React from 'react'

const Card = () => {
  return (
    <>
      <div className='bg-white rounded-2xl pt-5 px-8 w-[85%] h-min flex flex-col items-center font-poppins text-justify mb-10'>
        <a href="">
          <img src="/card-img.png" className='w-full' alt="" />
          <p className='text-2xl font-medium pt-3'>Titulo</p>
          <p className='text-lg font-light pb-3'>17/10/2024</p>
          <p className='text-base font-light pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet odio sed velit sagittis, in sagittis velit consectetur. Aliquam convallis molestie nibh, quis congue ligula gravida at. In sapien quam, iaculis tempor vehicula eget, varius id nulla. Phasellus fermentum tellus libero, sed consequat risus placerat in. </p>
        </a>
      </div>
    </>
  )
}

export default Card