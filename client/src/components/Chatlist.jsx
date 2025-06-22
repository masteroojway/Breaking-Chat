import React, { useState } from 'react'

const Chatlist = ({ usersel, setusersel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="pb-5">
      <div className="flex justify-between items-center m-3">
        <img src="/token.svg" className="max-h-15" />
        <h1 className="font-bold text-[20px]">Known Aliases</h1>
        <div>
          <img
            src="/menu.svg"
            className="max-h-10 cursor-pointer hover:scale-110 hover:opacity-80 hover:rounded-full hover:bg-white/60 transition-transform duration-200"
            onClick={toggleMenu}
            alt="Menu"
          />
          {isMenuOpen && (
            <div className="absolute bg-white shadow-lg p-3">
              <p className="text-red-700 font-bold cursor-pointer">Clocking Out</p>
              <hr className="border-gray-500 my-2" />
              <p className="cursor-pointer">DEA surveillance file</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Chatlist