import React from 'react'
import { discord, telegram, twitter, ig, fb } from '../assets'
const footer = () => {
  return (
    <footer className='lg:px-20 px-[20px] pb-[32px] md:pt-[113px] pt-[70px] flex flex-col items-start gap-[32px] bg-darkBlue w-full relative'>
      <div className='flex md:flex-row flex-col items-start md:gap-[130px] gap-[58px] w-full'>
        {/* 1st Column */}
        <div className='flex flex-col items-start gap-[25px]'>
          <h4 className='font-sora font-bold text-[18px] leading-[22.68px] text-white'>Walletry.</h4>
          <p className='font-inter font-normal text-[18px] leading-[27px] text-lightGrey w-[241px]'>Simplest Web3 Wallet Infrastructure for everyone</p>
          <div className='flex items-center gap-[32px] mt-[33px]'>
            <div className='p-2 rounded-full bg-[#181D27] cursor-pointer'>
              <img src={discord} className='w-[32px]' />
            </div>
            <div className='p-2 rounded-full bg-[#181D27] cursor-pointer'>
              <img src={twitter} className='w-[32px]' />
            </div>
            <div className='p-2 rounded-full bg-[#181D27] cursor-pointer'>
              <img src={ig} className='w-[32px]' />
            </div>
            <div className='p-2 rounded-full bg-[#181D27] cursor-pointer'>
              <img src={telegram} className='w-[32px]' />
            </div>
            <div className='p-2 rounded-full bg-[#181D27] cursor-pointer'>
              <img src={fb} className='w-[32px]' />
            </div>

          </div>
        </div>
        {/* 2nd Column */}
        <div className='flex flex-col items-start gap-[24px] w-[260px]'>
        <h4 className='font-sora font-bold text-[18px] leading-[22.68px] text-white'>Quick Links.</h4>
          <div className='flex items-start w-[260px]'>
            <div className='flex flex-col gap-[24px] w-[187px]'>
              <p className='font-inter font-normal text-[18px] leading-[27px] text-lightGrey cursor-pointer'>Buy/Sell</p>
              <p className='font-inter font-normal text-[18px] leading-[27px] text-lightGrey cursor-pointer'>Trade Now</p>
              <p className='font-inter font-normal text-[18px] leading-[27px] text-lightGrey cursor-pointer'>Pricing</p>
            </div>
            <div className='flex flex-col gap-[24px]'>
              <p className='font-inter font-normal text-[18px] leading-[27px] text-lightGrey cursor-pointer'>Wallets</p>
              <p className='font-inter font-normal text-[18px] leading-[27px] text-lightGrey cursor-pointer'>Company</p>
            </div>
          </div>
        </div>
        {/* 3rd Column */}
        <div className='flex flex-col items-start gap-[24px]'>
          <h4 className='font-sora font-bold text-[18px] leading-[22.68px] text-white'>Submit for updates.</h4>
          <p className='font-inter font-normal text-[18px] leading-[27px] text-lightGrey w-[241px]'>Stay informed on all things Web3 with updates and news from Walletry.</p>
          <div className='flex items-center gap-[10px] rounded-[100px] input_box py-2 pr-2 pl-6'>
            <input type='email' placeholder='Enter your email address' className='email_box'/>
            <button className='py-3 px-6 rounded-[100px] bg-primary text-white font-inter font-semibold text-[14px] leading-[22.4px]'>Send</button>
          </div>
        </div>
      </div>
      <div className='mt-[67px] bg-[#34384C] h-[1px] w-full'/>
      <div className='flex items-center justify-between w-full'>
        <h5 className='font-inter font-normal md:text-[16px] text-[14px] md:leading-[24px] text-[#5D6588]'>Walletry ©. All rights reserved.</h5>
        <div className='flex items-center md:gap-5 gap-3'>
          <p className='font-inter font-normal md:text-[16px] text-[14px] leading-[24px] text-[#5D6588] cursor-pointer w-[70px]'>Terms of Service</p>
          <div className='h-6 w-[1px] bg-[#5D6588]'/>
          <p className='font-inter font-normal md:text-[16px] text-[14px] leading-[24px] text-[#5D6588] cursor-pointer w-[70px]'>Privacy Policy</p>
        </div>
      </div>

      <button className='md:flex hidden py-[9px] p-3 rounded-[6px] bg-[#091A53] font-black text-[16px] leading-[18px] text-center text-white absolute md:bottom-[34.68px] right-[26.25px]'>^</button>
    </footer>
  )
}

export default footer
