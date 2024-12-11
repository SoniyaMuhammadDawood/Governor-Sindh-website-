
import React from 'react'


import Hero from './components/Hero';
import Card from './components/Card';
import MainPage from './components/MainPage';
import Carousal from './components/Carousal';


export default function Home() {

  return (
<div>


{/* Hero section */}
<Hero/>


{/* Mainpage div */}
<MainPage/>


{/* carousel */}
<Carousal/>

{/* card div*/}
<Card/>

</div>


);
}

