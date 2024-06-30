import React from 'react'
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '../assets'

const Solutions = () => {
  return (
    <section className='bg-white flex flex-col items-center gap-[58px] py-[120px] px-[185px] w-full'>
      <div className='flex flex-col items-center gap-[20px]'>
        <h3 className='font-sora font-bold text-[32px] leading-[40.32px] text-center text-black'>Scaling solutions, amplified</h3>
        <p className='font-inter font-normal text-[24px] leading-[36px] tracking-[-0.36px] text-center text-darkGrey'>Walletry’s complete suite of blockchain-scaling solutions.</p>
      </div>
      <div className='grid_box'>
        <div id='item-0' className='flex flex-col items-start gap-[15px] rounded-[24px] pl-[32px] pr-[20px] pt-[32px] pb-[66px] shadow_box'>
          <img src={icon1} className='w-8 h-8' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] text-black mt-5'>Walletry</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] w-[277.2px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
        </div>
        <div id='item-1' className='flex flex-col items-start gap-[15px] rounded-[24px] pl-[32px] pr-[20px] pt-[32px] pb-[66px] shadow_box'>
          <img src={icon2} className='w-8 h-8' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] text-black mt-5'>Walletry</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] w-[277.2px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
        </div>
        <div id='item-2' className='flex flex-col items-start gap-[15px] rounded-[24px] pl-[32px] pr-[20px] pt-[32px] pb-[66px] shadow_box'>
          <img src={icon3} className='w-8 h-8' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] text-black mt-5'>Walletry</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] w-[277.2px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
        </div>
        <div id='item-3' className='flex flex-col items-start gap-[15px] rounded-[24px] pl-[32px] pr-[20px] pt-[32px] pb-[66px] shadow_box'>
          <img src={icon4} className='w-8 h-8' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] text-black mt-5'>Walletry</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] w-[277.2px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
        </div>
        <div id='item-4' className='flex flex-col items-start gap-[15px] rounded-[24px] pl-[32px] pr-[20px] pt-[32px] pb-[66px] shadow_box'>
          <img src={icon5} className='w-8 h-8' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] text-black mt-5'>Walletry</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] w-[277.2px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
        </div>
        <div id='item-5' className='flex flex-col items-start gap-[15px] rounded-[24px] pl-[32px] pr-[20px] pt-[32px] pb-[66px] shadow_box'>
          <img src={icon6} className='w-8 h-8' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] text-black mt-5'>Walletry</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] w-[277.2px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
        </div>
      </div>
    </section>
  )
}

export default Solutions
