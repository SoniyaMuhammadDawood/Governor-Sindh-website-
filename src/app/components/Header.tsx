import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='fixed z-50 w-full'>
<header>
        <div className=" bg-blue-800 h-20 py-6 text-lg text-white ">

          <nav className="flex justify-end z-50 cursor-pointer">
            <Link className="mr-9 " href={"/"}>Home</Link>
            <Link className="mr-9 " href={"/Apply"}>Apply</Link>
            <Link className="mr-9 " href={"/Jobs"}>Jobs</Link>
            <Link className="mr-9 " href={"/Courses"}>Courses</Link>
            <Link className="mr-14 " href={"/Result"}>Result</Link>

          </nav>
            <p className="flex justify-start ml-56 -mt-7 text-2xl font-bold">Tuition Free Education Program on Latest Technologies</p>

            <div className="z-50 relative">
            <Image className="-mt-7 ml-6 cursor-pointer " src={"/picture/govt.png"} alt="logo" width={90} height={90}></Image>
            </div>

        </div>

      </header>
</div>
  )
}

export default Header

