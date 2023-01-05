import React from 'react'
import logo from '../assets/Tutedude.png'
import Dropdown from './Dropdown'

const Navbar = () => {
  return (
    <div style={{height: 73.03}} className='flex'>
      <div className='flex h-14 w-full'>
        <div className='max-[428px]:-ml-16 max-[428px]:mt-12'><img style={{width: 160,height:50,marginLeft:74,marginTop:6,position:'absolute'}} src={logo} /></div>
        <div className='hidden md:flex md:h-14 md:w-full md:m-auto '>
            <div className='h-[22px] w-[140px] mb-[26px] mt-[25px] ml-[766px] text-center text-[#800080] opacity-25 text-lg hover:opacity-100  font-medium'>My Assignment</div>
              <div style={{width:156,height:22,marginTop:25}} className='ml-7 text-[#800080] opacity-25 text-base hover:opacity-100 font-medium '>Chat with Mentor</div>
              <div style={{marginLeft:14,marginTop:25,marginRight:6}} className=''><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#800080"/>
      </svg></div>
              <div className='mt-[22px] w-[111px] h-[22px] text-[#800080] font-[18px]'>ProfileName</div>
              <div style={{marginTop:30}} className='-ml-[8px]'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill="#800080"/>
      </svg></div>
          </div>
          <Dropdown/>
      </div>
    </div>
  )
}

export default Navbar;