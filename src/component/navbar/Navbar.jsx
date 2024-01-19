import React from 'react'
import { FaBars , FaUser} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center bg-[#dedfe4] py-2'>
      <div><FaBars size={25} /></div>
      <div>
        <img src="../../src/assets/logo.png" className='w-[50px] ' alt="" />
      </div>
      <div>
        <ul className='flex gap-4 text-black items-center cursor-pointer'>
          <li>Build</li>
          <li>Build</li>
          <li>Cart</li>
          <li className='bg-gray-800 flex 
          justify-center items-center py-2 px-2 
          rounded-full bg-black'><FaUser color='white' />
</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar