import React from 'react'
import BigCard from "../UiComponents/Advertising/BigCard"
function Advertising() {
  return (
    <div className='p-10'>
        <div className='text-center md:p-3 font-semibold text-xl md:text-3xl text-[#B5B5B5] '>
        Pioneering splendid science-themed
        </div>
        <div className='text-center font-semibold text-xl md:text-3xl text-[#3D3269]'>
        experiences since 2014!
        </div>
        <div className='flex p-10'>
          <BigCard/>
        </div>
    </div>
  )
}




export default Advertising