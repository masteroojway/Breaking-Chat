import React from 'react'
import { assets, messagesDummyData } from '../../tempuserpics/assets'

const Chatblock = ({ usersel, setusersel}) => {
  return usersel ? (
    <div className="flex flex-col bg-gray-700/70 rounded-sm h-screen">
      <div className="flex bg-gray-500/60 rounded-sm items-center">
        <img
          src={assets.profile_enrique}
          className="rounded-full h-20 m-4"
          alt="Enrique Martinez"
          onClick={()=> {setusersel(usersel);console.log("user is:", usersel)}}
        />
        <p className="p-3 font-bold text-[20px] m-3">Enrique Martinez</p>
        <span className="bg-green-600 h-3 w-3 rounded-full"></span>
        <img 
        src='backbutton.svg' 
        className='h-12 ml-auto m-3 cursor-pointer hover:bg-white/60 rounded-xl p-1' 
        onClick={()=> setusersel(null)} />
      </div>
      {/*chat area*/}
      <div className='flex flex-col overflow-y-auto h-[calc(100%-120px)] p-3 pb-6'>
        {messagesDummyData.map((msg, ind)=>(
          <div key={ind} 
          className={`flex flex-col bg-blue-600/50 mx-3 mt-3 rounded-xl p-3`}>
            {msg.image && (
              <img src={msg.image} className='rounded-sm'/>
            )}
            <p>{msg.text}</p>
      </div>
        ))}
      </div>
      <div className='flex bg-white/50 bottom-0 right-0 left-0 flex items-center gap-3 p-3 rounded-sm'>
          <input type="text" placeholder='Type your message here' className='w-full outline-none'/>
          <input type="file" id="filesel" accept="image/png, image/jpeg" hidden/>
          <label htmlFor='filesel'>
            <img src='filesel.svg' className='flex h-7 m-1 cursor-pointer'/>
          </label>
          <img src='sendicon.svg' className='h-10 hover:bg-black/50 rounded-full p-2'/>
      </div>
    </div>
  ) : (
    <div className="flex flex-col bg-gray-500/50 rounded-sm h-screen items-center justify-center text-center">
      <div className='flex flex-col h-full justify-center text-center'>
        <img src='/token.svg' className='h-30 m-4' alt="Token" />
        <p className="text-[25px] font-semibold">Don't just start Conversations</p>
        <p className="text-[30px] font-bold">Start Operations</p>
      </div>
    </div>
  )
}

export default Chatblock