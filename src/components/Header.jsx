import React, {useEffect, useState, useRef} from 'react'


const header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
const wrapperRef = useRef(null);  // Create a ref for the wrapper element

const handleMenu = () => {
  setToggleMenu(!toggleMenu);
};

useEffect(() => {
  const handleClickOutside = (event) => {
      // Check if wrapperRef.current is defined before accessing its properties
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setToggleMenu(false); 
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [wrapperRef]);
const burgerBar = "h-[2.5px] bg-black w-5 transition ease transform duration-300";

  return (
    <header>
      {/* Desktop Header */}
      <nav className='bg-white py-5 lg:px-20 md:px-16 px-8 md:flex hidden items-center justify-between w-full'>
        <h1 className='font-sora font-bold text-[24px] leading-[30.24px] text-primary'>Walletry</h1>
        <div className='md:flex hidden'>
          <ul className='flex items-center gap-1'>
            <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
              <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Product</p>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </li>
            <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
              <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>About</p>
            </li>
            <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
              <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Demo</p>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </li>
            <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
              <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Pricing</p>
            </li>
            <li className='gradient_btn py-[6px] px-10 text-[16px] leading-[28px]'>Sign Up</li>
          </ul>
        </div>
      </nav >
      {/* Mobile Header */}
      <nav className='bg-white py-5 lg:px-20 md:px-16 px-8 flex md:hidden items-center justify-between w-full'>
            <div className='flex gap-4 items-center'>
            {/* Menu Icon */}
            <div onClick={handleMenu} className= {`${toggleMenu ? 'fixed' : 'static'} flex flex-col gap-[4px] items-center z-50  justify-center cursor-pointer`}>
              <span className={`${burgerBar} ${toggleMenu && "rotate-45 translate-y-[8px] w-5"}`}></span>
              <span className={`${burgerBar} ${toggleMenu && "opacity-0"}`}></span>
              <span className={`${burgerBar} ${toggleMenu && "-rotate-45 -translate-y-[5px] w-5"}`}></span>
            </div>

            <h1 className='font-sora font-bold text-[24px] leading-[30.24px] text-primary'>Walletry</h1>

            {/* Open menu with the slide-right animation */}
            {toggleMenu && (
            <ul className='flex flex-col items-start gap-3 bg-white z-[40] fixed top-0 left-0 w-[250px] h-full py-24 px-6 slide-right'>
              <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
                <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Product</p>
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </li>
              <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
                <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>About</p>
              </li>
              <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
                <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Demo</p>
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </li>
              <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
                <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Pricing</p>
              </li>
              <li className='gradient_btn py-[6px] px-10 text-[16px] leading-[28px]'>Sign Up</li>
          </ul>
        )}
            {/* Close menu with the slide-left animation */}
            {!toggleMenu && (
            <ul className='flex flex-col items-start gap-3 bg-white z-[40] fixed top-0 left-0 w-[250px] h-full py-24 px-6 slide-left'>
              <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
                <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Product</p>
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </li>
              <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
                <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>About</p>
              </li>
              <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
                <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Demo</p>
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </li>
              <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
                <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Pricing</p>
              </li>
              <li className='gradient_btn py-[6px] px-10 text-[16px] leading-[28px]'>Sign Up</li>
          </ul>
        )}
        </div>
        {toggleMenu && <div className='menu-overlay' onClick={handleMenu}></div>}
      </nav>
    </header>
  )
}

export default header
