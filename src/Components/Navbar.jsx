import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      <div className="bg-violet-900 flex items-center justify-between text-white ">
        <p className='text-xl  font-bold px-6'>TODOLINGO</p>
        <ul className='flex gap-10 px-10 py-4'>
          <li className='font-semibold'>Home</li>
          <li className='font-semibold'>Your Tasks</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar