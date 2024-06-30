import React from 'react'

const header = () => {
  return (
    <header className='bg-white py-5 px-20 flex items-center justify-between w-full'>
      <h1 className='font-sora font-700 text-[24px] leading-[30.24px] text-primary'>Walletry</h1>
      <nav>
        <ul className='flex items-center gap-1'>
          <li className='flex items-center gap-[9.25px] py-5 px-5'>
            <p className='font-inter font-500 text-[16px] leading-[28px] text-black'>Product</p>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </li>
          <li className='flex items-center gap-[9.25px] py-5 px-5'>
            <p className='font-inter font-500 text-[16px] leading-[28px] text-black'>About</p>
          </li>
          <li className='flex items-center gap-[9.25px] py-5 px-5'>
            <p className='font-inter font-500 text-[16px] leading-[28px] text-black'>Demo</p>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </li>
          <li className='flex items-center gap-[9.25px] py-5 px-5'>
            <p className='font-inter font-500 text-[16px] leading-[28px] text-black'>Pricing</p>
          </li>
          <li className='gradient_btn py-[6px] px-10 text-[16px] leading-[28px]'>Sign Up</li>
        </ul>
      </nav>
    </header>
  )
}

export default header
