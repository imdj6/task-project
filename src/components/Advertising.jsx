import React from 'react'
import BigCard from "../UiComponents/Advertising/BigCard"
import Adver1 from "../Assets/Adver1.png"
function Advertising() {
  return (
    <div className='p-8 md:p-10'>
        <div className='text-center md:p-3 font-semibold text-xl md:text-3xl text-[#B5B5B5] '>
        Pioneering splendid science-themed
        </div>
        <div className='text-center font-semibold text-xl md:text-3xl text-[#3D3269]'>
        experiences since 2014!
        </div>
        <div className='flex-row p-2 space-y-5 md:space-y-0 md:flex md:p-10 md:space-x-5'>
          <BigCard number="6000+" header="Birthday Parties" more="Learn more" img={Adver1} color="first"/>
          <BigCard number="25+" header="Carnivals" more="Learn more"
          img={Adver1}/>
        </div>
    </div>
  )
}




export default Advertising