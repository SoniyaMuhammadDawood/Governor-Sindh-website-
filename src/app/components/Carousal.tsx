import React from 'react'
import Image from 'next/image'

const Carousal = () => {
  return (
    <div className='h-full w-full my-8'>
    <div className="carousel w-[80rem] h-[35rem] mx-10 gap-4">
      
      <div className="carousel-item w-1/2">
        <Image
          src="/picture/slider-pic/slider-1.jpg"
          alt=""
          width={640} // Adjust width dynamically
          height={480} // Adjust height dynamically
          className="w-full rounded-xl"
        />
      </div>

      <div className="carousel-item w-1/2">
        <Image
          src="/picture/slider-pic/slider-2.jpg"
          alt=""
          width={640}
          height={480}
          className="w-full rounded-xl"
        />
      </div>

      <div className="carousel-item w-1/2">
        <Image
          src="/picture/slider-pic/slider-3.jpg"
          alt=""
          width={640}
          height={480}
          className="w-full rounded-xl"
        />
      </div>

      <div className="carousel-item w-1/2">
        <Image
          src="/picture/slider-pic/slider-4.jpg"
          alt=""
          width={640}
          height={480}
          className="w-full rounded-xl"
        />
      </div>

      <div className="carousel-item w-1/2">
        <Image
          src="/picture/slider-pic/slider-5.jpg"
          alt=""
          width={640}
          height={480}
          className="w-full rounded-xl"
        />
      </div>

      <div className="carousel-item w-1/2">
        <Image
          src="/picture/slider-pic/slider-6.jpg"
          alt=""
          width={640}
          height={480}
          className="w-full rounded-xl"
        />
      </div>

      <div className="carousel-item w-1/2">
        <Image
          src="/picture/slider-pic/slider-7.jpg"
          alt=""
          width={640}
          height={480}
          className="w-full rounded-xl"
        />
      </div>

      <div className="carousel-item w-1/2">
        <Image
          src="/picture/slider-pic/slider-8.jpg"
          alt=""
          width={640}
          height={480}
          className="w-full rounded-xl"
        />
      </div>

    </div>
  </div>
  )
}

export default Carousal
