import React, { useState } from 'react'
import Chatlist from '../components/Chatlist'
import Chatblock from '../components/Chatblock'
import Profilebar from '../components/Profilebar'

const Homepage = () => {
  const [usersel, setusersel] = useState(false);
  return (
    <div className='border w-full h-screen overflow-hidden relative'>
      <div className= {`backdrop-blur-md rounded-2xl border border-gray-600 grid overflow-hidden
      ${usersel ? 'md:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_1.5fr_1fr]':'md:grid-cols-2'}`}>  
        <div className='bg-white/20'>
          <Chatlist usersel={usersel} setusersel={setusersel}/>
        </div>
        <div>
          <Chatblock usersel={usersel} setusersel={setusersel}/>
        </div>
        <div>
          <Profilebar usersel={usersel} setusersel={setusersel}/>
        </div>

      </div>
    </div>
  )
}
export default Homepage
