import React from 'react'

const Profilebar = ({usersel, setusersel}) => {
  return usersel &&(
    <div className='flex flex-col h-screen bg-gray-500/50 p-5 items-center'>
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
    </div>
  )
}

export default Profilebar