import React, { useState } from 'react'
import { userDummyData } from '../../tempuserpics/assets'

const Chatlist = ({ usersel, setusersel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="pb-5 h-screen">
    <div className="flex flex-col m-3 h-full">
        <div className="flex justify-between items-center m-3">
        <img
            src="/token.svg"
            className="max-h-20 bg-black/30 rounded-full p-2 w-24"
            alt="Token"
        />
        <h1 className="font-bold text-[30px]">Known Aliases</h1>
        <div className="relative">
            <img
            src="/menu.svg"
            className="max-h-10 cursor-pointer hover:scale-110 hover:opacity-80 hover:rounded-full hover:bg-white/60 transition-transform duration-200"
            onClick={toggleMenu}
            alt="Menu"
            />
            {isMenuOpen && (
            <div className="fixed bg-gray-800/90 p-3 rounded-xl z-50">
                <p className="text-red-700 font-bold cursor-pointer">Clocking Out</p>
                <hr className="border-gray-400 my-2" />
                <p className="cursor-pointer text-white">DEA surveillance file</p>
            </div>
            )}
        </div>
        </div>
        <div className="flex m-3 bg-white/50 hover:bg-white/70 rounded-full">
        <img src="/search.svg" className="h-8 m-2" alt="Search" />
        <input
            type="text"
            className="bg-transparent outline-none w-full"
            placeholder="Search Alias registry ..."
        />
        </div>
        <div className="overflow-y-auto scroll-smooth flex-grow">
        {userDummyData.map((user, index) => {
            const isSelected = usersel?._id === user._id
            console.log('Selected user:', usersel);
            return (
            <div
                key={user._id || index}
                onClick={() => {setusersel(user)
                    console.log('Selected user:', usersel);
                }}
                className={`flex items-center hover:bg-white/40 rounded-full ${
                isSelected ? 'bg-white/60' : ''
                }`}
            >
                <img
                src={user.profilePic}
                className="w-20 aspect-[1/1] rounded-full m-3"
                />
                <div>
                <p className="font-bold">{user.fullName}</p>
                </div>
            </div>
            )
        })}
        </div>
    </div>
    </div>
  )
}

export default Chatlist