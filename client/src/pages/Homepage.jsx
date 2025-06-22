import React, { useState } from 'react'
import Chatlist from '../components/Chatlist'
import Chatblock from '../components/Chatblock'
import Profilebar from '../components/Profilebar'

const Homepage = () => {
  const [usersel, setusersel] = useState(false);
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
      <div className= {`h-full backdrop-blur-md rounded-2xl border border-gray-600 grid overflow-hidden
      ${usersel ? 'md:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_3fr_1fr]':'md:grid-cols-2'}`}>

        {/* Left: Chatlist */}
        <div className='border-r border-gray-500'>
          <Chatlist usersel={usersel} setusersel={setusersel}/>
        </div>

        {/* Center: Chatblock */}
        <div className='border-r border-gray-500'>
          <Chatblock usersel={usersel} setusersel={setusersel}/>
        </div>

        {/* Right: Profilebar */}
        <div>
          <Profilebar usersel={usersel} setusersel={setusersel}/>
        </div>

      </div>
    </div>
  )
}

export default Homepage
