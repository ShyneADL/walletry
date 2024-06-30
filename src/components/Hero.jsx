import React from 'react'
import { mouse } from '../assets'

const hero = () => {
  return (
    <div className='bg-darkBlue hero_image py-[125px] flex flex-col items-center h-[1488px] w-full'>
      <div className='flex flex-col items-center gap-[10px]'>
        <h4 className='font-inter font-600 text-[16px] leading-[21px] tracking-[0.9px] text-center text-darkGrey'>Introducing Walletry</h4>
        <h2 className='font-sora font-700 text-[46px] leading-[55.66px] text-center text-white w-[718.91px]'>Seamless onboarding process into any platform via wallet connection</h2>
        <p className='font-inter font-400 text-[18px] leading-[27px] text-center text-darkGrey mt-[10px] w-[550px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duit. Exercitation veniam consequat sunt</p>
        <button className='gradient_btn py-[21px] px-[82.5px] text-[18px] leading-[22.68px] mt-[25px]'>Book a Demo</button>
      <div className='flex flex-col items-center gap-[17px] mt-[634.9px] cursor-pointer'>
        <div className='p-4 bounce_top'>
          <img src={mouse} className='w-[38px] h-[64px]'/>
        </div>
        <p className='font-inter font-700 uppercase text-[12px] leading-[14px] tracking-[0.6px] text-center text-darkGrey'>Scroll to explore</p>
      </div>
      </div>
    </div>
  )
}

export default hero