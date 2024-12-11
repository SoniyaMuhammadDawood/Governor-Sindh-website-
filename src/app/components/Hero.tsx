import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div 
className="pt-12 bg-cover bg-center bg-no-repeat z-10 overflow-hidden relative after:absolute after:inset-0 after:bg-slate-50 after:bg-opacity-65 "
style={{ backgroundImage: "url('/picture/bg_house.jpg')" }}>


  <div className="flex justify-between items-start">
    {/* Left content */}
    <div className="w-1/2 z-50">
      <h1 className="text-6xl text-blue-900 mt-28 ml-7 font-extrabold tracking-wide ">
        Governor Sindh
      </h1>
      <p className="text-[2.7rem] font-sans ml-8 font-normal -mt-1 text-blue-800 tracking-widest">
        Kamran Khan Tessori
      </p>
      <div className="text-[2.7rem] font-extrabold text-blue-400 ml-7">
        <p className="-mb-4">Certified Cloud</p>
        <p className="-mb-3">Applied Generative AI</p>
        <p>Engineer (GenEng)</p>
      </div>
      <p className="text-blue-900 ml-7 font-bold font-sans text-2xl mt-4">
        Earn up to $5,000 / month
      </p>
      <p className="tracking-wider text-blue-900 ml-7 font-bold font-sans text-2xl mt-4">
        Now admissions are open in <br /> Hyderabad
      </p>

      {/* Button and text section */}
      <div className="flex flex-wrap mt-10">
        <button className="text-lg rounded-lg tracking-widest bg-blue-900 text-white ml-8 py-2 px-12 font-extrabold mt-7 mb-2 font-sans hover:translate-y-1 hover:font-sans hover:font-extrabold">
          Apply Now
        </button>
        <div className="ml-24">
          <p className="mt-7 text-3xl font-extrabold text-blue-900">562,143</p>
          <p className="text-blue-900 text-lg font-normal">
            Accepted Applications
          </p>
        </div>
      </div>
    </div>

    {/* Right image */}
    <div className="w-1/2 flex justify-end mt-10 z-50">
      <Image
        src={"/picture/govImg.png"}
        alt="logo"
        height={1212}
        width={1600}
        className="-mr-64 h-auto min-w-[900px]"
      />
    </div>
  </div>
 

</div>
  )
}

export default Hero
