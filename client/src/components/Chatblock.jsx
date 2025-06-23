import React from 'react'
import { assets } from '../../tempuserpics/assets'

const Chatblock = ({ usersel }) => {
  return usersel ? (
    <div className="bg-gray-500/50 rounded-sm h-full">
      <div className="flex bg-gray-500/70 rounded-sm items-center">
        <img
          src={assets.profile_enrique}
          className="rounded-full h-20 m-4"
          alt="Enrique Martinez"
        />
        <p className="p-3 font-bold text-[20px] m-3">Enrique Martinez</p>
        <span className="bg-green-600 h-3 w-3 rounded-full"></span>
      </div>
    </div>
  ) : (
    <div className="flex flex-col bg-gray-500/50 rounded-sm h-full items-center justify-center text-center">
      <div className='flex flex-col h-full justify-center text-center mb-[30%]'>
        <img src='/token.svg' className='h-30 m-4' alt="Token" />
        <p className="text-[25px] font-semibold">Don't just start Conversations</p>
        <p className="text-[30px] font-bold">Start Operations</p>
      </div>
    </div>
  )
}

export default Chatblock