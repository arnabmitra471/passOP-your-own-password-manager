import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white sticky bottom-0 py-4">
      <div className="logo text-center font-bold text-xl">
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500 uppercase">Op/&gt;</span>
      </div>
      <div className="description flex justify-center items-center text-lg gap-4">
        <span>Created with</span> <img src="icons/heart.jpg" alt="Image of a heart" className="w-10 ml-2 inline-block" />

        <span> By Arnab Mitra</span>
      </div>
      <div className="attribution flex justify-center items-center my-1">
        <p>Copyright &copy; Arnab Mitra All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
