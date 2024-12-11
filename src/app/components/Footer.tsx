import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div>
          <footer className="bg-gray-100 h-[25rem]  text-white py-4">
      <div className="container mx-auto text-center flex flex-col-3 mt-16">
       
       <div>
        <h1 className="text-black font-bold text-[1.20rem] mb-5 mr-80 ">Core Courses</h1>
        
        {/* Link 1 */}
        <div>
        <Link href={"/Programming Fundamentals"} className='text-gray-700 -ml-60  ' >Programming Fundamentals</Link>
        </div>
      
        <div className='mt-4'>
        <Link href={"/Web2 Using NextJS"} className='text-gray-700 -ml-72 mr-3  ' >Web2 Using NextJS</Link>
        </div>

        <div className='mt-4'>
        <Link href={"/Earn as You Learn"} className='text-gray-700 -ml-80 -mr-2 ' >Earn as You Learn</Link>
        </div>
        
       </div>
       
        {/* Adance courses */}
       <div>
        <h1 className="text-black font-bold text-[1.20rem] mr-80 ">Advanced Courses</h1>

        <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-80 -ml-4">Web 3 and Metaverse</Link>
          </div>

          <div className="mt-4">
          <Link href={"/Cloud-Native Computing"} className="text-gray-700 mr-80 -ml-1 ">Cloud-Native Computing</Link>
          </div>

          <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-48  ">Artificial Intelligence (AI) and Deep Learning</Link>
          </div>

          <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-80 ml-4  ">Ambient Computing and IoT</Link>
          </div>
          <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-80 ml-5  ">Genomics and Bioinformatics</Link>
          </div>
          <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-52  ">Network Programmability and Automation</Link>
          </div>
        </div>
       
        {/* Imp Links */}
        
       <div>
        <h1 className="text-black font-bold text-[1.20rem] -ml-40 ">Social Links</h1>
      
      <div className="flex  ">
      <Image className='h-[3.3rem] mt-2 cursor-pointer -ml-14' src={"/picture/logo/facebook.png"} alt='facebook-logo' width={48} height={0}></Image>
       
       <Image className='h-[3.3rem] mt-2 cursor-pointer' src={"/picture/logo/youtube.webp"} alt='youtube-logo' width={48} height={0}></Image>
       
       <Image className='h-[3.3rem] mt-2 cursor-pointer' src={"/picture/logo/twitter.png"} alt='Twitter-logo' width={45} height={0}></Image>

       <Image className='h-[4.2rem] cursor-pointer' src={"/picture/logo/insta.webp"} alt='Insta-logo' width={55} height={0}></Image>

       <Image className='h-[2.6rem] mt-3 cursor-pointer' src={"/picture/logo/tiktok.webp"} alt='Tiktok-logo' width={38} height={0}></Image>
          </div>
<p className='text-blue-600 underline -ml-11 cursor-pointer'>eduacaion@governorsindh.com</p>
 </div> 
       
       </div>
    </footer>
    </div>
  )
}

export default Footer
