import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    
    <div className='top-0 left-0 w-full  p-4 flex items-center'>
      <img className=' w-40 z-10' src ={LOGO} />
    </div>
    
  )
}

export default Header