import React from 'react'
import { messagesDummyData } from '../../tempuserpics/assets';

const Profilebar = ({usersel, setusersel}) => {
  return usersel &&(
    <div className='flex flex-col h-screen bg-gray-500/50 p-5 items-center overflow-y-auto'>
        <h1 className='mx-auto font-bold text-[25px] bg-white/50 m-3 p-3 rounded-xl'
        onClick={()=>{setusersel(usersel);console.log("user isss:", usersel)}}>
          Operator Info
        </h1>
        <img 
          src={usersel.profilePic} 
          className="h-80 w-80 rounded-[2rem] p-5 m-5" 
        />
        <h1 className='font-bold text-[25px] p-3'>{usersel.fullName}</h1>
        <p className='bg-white/60 m-3 p-3 rounded-xl'>{usersel.bio}</p>
        <hr className="w-full border-t-4 border-white/80 my-4 rounded-full" />
        <h1 className='self-start text-[20px] p-1 m-1 font-semibold'>Media</h1>
        <div className='grid grid-cols-2 mt-2'>
          {messagesDummyData.map((msg)=>{
            const early =(usersel._id ===msg.senderId||usersel._id ===msg.receiverId);
            if(!early||!msg?.image) return null;
            return (
              <div>
                <img
                  src={msg.image}
                  className="h-full rounded-3xl p-2 cursor-pointer"
                  onClick={() => window.open(msg.image, '_blank')}
                />
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Profilebar