import React, { useState } from 'react'

const Profile = ({usersel, setusersel}) => {
  const [imgsel, setimgsel] = useState(null);
  return (
    <div className='flex flex-col backdrop-blur-md rounded-2xl 
    border border-gray-600 overflow-hidden h-screen items-center justify-center'>
        <form className='bg-white/60 rounded-xl'>
          <div className='flex flex-col'>
            <h1 className='font-bold p-3 m-3 text-lg'>DEA surveillance file</h1>
            <input onChange={(e)=>setimgsel(e.target.files[0])}
            type="file" id="avatar" accept="image/png, image/jpeg" hidden/>
            <div className='flex flex-row items-center'>
              <label htmlFor='avatar' className='cursor-pointer font-bold bg-gray-600/40 p-3 m-3
              rounded-xl  hover:bg-gray-700/60'>
                Set Alias Mask
              </label>
              <img src={imgsel ? URL.createObjectURL(imgsel) : 'avatar.svg'} className='h-20 w-20 m-3 rounded-3xl outline-2'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <input type='text' placeholder='Name' className='p-3 m-3 rounded-xl bg-white'/>
            <input type='text' placeholder='Bio' className='p-3 m-3 rounded-xl bg-white'/>
          </div>
        </form>
    </div>
  )
}

export default Profile