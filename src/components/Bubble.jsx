import React from 'react'

function Bubble({ bubName = "bubble"}) {
  return (
    <div className='bg-white/10 backdrop-blur-xs pr-2 pl-2 border-1 sm:border-2 border-black text-[0.8rem] sm:text-[1.2rem] font-medium p-1 flex items-center justify-center hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300 hover:scale-105'>
        <p>{bubName}</p>
    </div>
  )
}

export default Bubble