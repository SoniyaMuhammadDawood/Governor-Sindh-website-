import React from "react";
import Image from "next/image";

const Card = () => {
  const cards = [
    {
      detail: "Programming Fundamentals",
      image: "card-1.jpg",
    },

    {
      detail: "Web2 Using NextJs",
      image: "card-2.jpg",
    },

    {
      detail: "Earn as You Learn",
      image: "card-3.jpg",
    },
  ];

  const secondCard = [
    {
      detail: "Artificial Intelligence",
      image: "card-4.jpg",
    },

    {
      detail: "Web 3 and Metaverse",
      image: "card-5.jpg",
    },

    {
      detail: "Cloud-Native Computing",
      image: "card-6.jpg",
    },
    {
      detail: "Ambient Computing and IoT",
      image: "card-7.jpg",
    },
    {
      detail: "Genomics and Bioinformatics",
      image: "card-8.jpg",
    },
    {
      detail: "Network Programmability and Automation",
      image: "card-9.jpg",
    },
  ];

  return (
    <div className="divide-y divide-gray-300 space-y-20 ">

      {/* add divder*/}
      <div className="h-[30rem] w-full -my-5 pt-4 ">
        <h1 className="ml-8 my-8  tracking-tight text-blue-900 font-bold text-[2.7rem] font-sans">
          Core Courses Sequence
        </h1>

        {/* Main div */}
        <div className="flex items-start gap-12 ml-8">
          {cards.map((item, i) => (
            <div
              key={i}
              className="w-72 shadow-lg  rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 will-change-transform "
            >
              <Image
                src={`/picture/cards-pic/${item.image}`}
                alt="Card Image"
                height={150}
                width={150}
                className="object-cover w-full h-48"
              />

              <div>
                <p className="flex justify-center text-center bg-white text-gray-700 py-6 font-bold">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* new card div */}

      <div>
        <h1 className="ml-8 my-8  tracking-tight text-blue-900 font-bold text-[2.7rem] font-sans">
          Advanced Courses
        </h1>
        {/* Main div */}
        <div className=" ml-8 grid grid-cols-4 gap-10 mb-20">
          {secondCard.map((item, a) => (
            <div
              key={a}
              className="w-72 shadow-lg  rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 will-change-transform "
            >
              <Image
                src={`/picture/cards-pic/${item.image}`}
                alt="Card Image"
                height={150}
                width={150}
                className="object-cover w-full h-48"
              />

              <div>
                <p className="flex justify-center text-center bg-white text-gray-700 py-6 font-bold">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
          {/* card */}
        </div>
      </div>

    </div>
  );
};

export default Card;
