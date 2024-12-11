import React from 'react'
import Image from 'next/image'


const MainPage = () => {
  return (
    <div>


    <div>
<div className="tracking-tight text-blue-900 font-bold text-[2.1rem] font-sans mt-20 text-center ">
        <h1 >
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur <br /> 
        </h1>
        <h1>Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
        </div>
  
        <p className="text-black font-sans tracking-wide my-8 text-[1.3rem] text-justify mx-8 ">
        The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>
</div>


{/* 3 images */}
<div className="flex justify-evenly">

<Image src={"/picture/image1.png"} alt='pic-1' width={420} height={0} className='rounded-lg shadow-2xl shadow-black h-[19rem] '></Image>

<Image src={"/picture/image2.png"} alt='pic-1' width={420} height={0} className='rounded-lg shadow-2xl shadow-black h-[19rem]'></Image>

<Image src={"/picture/image3.png"} alt='pic-1' width={420} height={0} className='rounded-lg shadow-2xl shadow-black h-[19rem] '></Image>

</div>
</div>
  )
}

export default MainPage
