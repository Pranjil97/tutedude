import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block ml-[294px] mt-14 md:hidden">
      <button
        onClick={toggle}
        className="text-white w-[165px] h-[48px] rounded-xl  bg-[#800080]"
      >
        <div className='flex text-center items-center justify-center'>ProfileName <div className='ml-5'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" fill="white"/>
</svg>
</div></div>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-30 bg-white rounded-md shadow-xl mt-2 py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            My Assignment
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            Chat with Mentor
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;