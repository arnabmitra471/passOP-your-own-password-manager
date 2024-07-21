import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mypass-container flex justify-between items-center h-14 px-4 py-5">
        <div className="logo font-bold text-white">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500 uppercase">Op/&gt;</span>
        </div>
        <ul className="flex gap-5 flex-row">
          <li className="hover:bg-purple-400 py-2 px-2 hover:text-green-700 hover:rounded-md hover:transition-colors duration-200 hover:font-bold"><a href="/">Home</a></li>
          <li className="hover:bg-purple-400 py-2 px-2 hover:text-green-700 hover:rounded-md hover:transition-colors duration-200 hover:font-bold"><a href="/">About</a></li>
          <li className="hover:bg-purple-400 py-2 px-2 hover:text-green-700 hover:rounded-md hover:transition-colors duration-200 hover:font-bold"><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
