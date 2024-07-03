import React from 'react'

const header = () => {
  return (
    <header className='bg-white py-5 lg:px-20 md:px-16 px-8 flex items-center justify-between w-full'>
      <h1 className='font-sora font-bold text-[24px] leading-[30.24px] text-primary'>Walletry</h1>
      <nav className='md:flex hidden'>
        <ul className='flex items-center gap-1'>
          <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
            <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Product</p>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </li>
          <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
            <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>About</p>
          </li>
          <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
            <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Demo</p>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </li>
          <li className='flex items-center gap-[9.25px] lg:py-5 py-2 lg:px-5 px-2'>
            <p className='font-inter font-medium text-[16px] leading-[28px] text-black'>Pricing</p>
          </li>
          <li className='gradient_btn py-[6px] px-10 text-[16px] leading-[28px]'>Sign Up</li>
        </ul>
      </nav>
      
      {/* Mobile Sidebar Navigation */}
      <nav className='md:hidden flex'></nav>
    </header>
  )
}

export default header
