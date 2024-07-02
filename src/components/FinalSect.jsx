import React from 'react'
import { device, faded } from '../assets'

const FinalSect = () => {
  return (
    <section className='px-20 pt-[140px] pb-[70px] bg-white flex flex-col items-start gap-[70px] w-full relative'>
      <div className='flex items-center gap-[122px] pl-[26px] pr-[52px]'>
        <div className='flex flex-col items-start gap-[22px]'>
          <h3 className='font-sora font-extrabold text-[40px] leading-[52px] tracking-[-1.2px] text-black w-[578px]'>Top blockchains build on Walletry.</h3>
          <p className='font-inter font-normal text-[24px] leading-[36px] tracking-[-0.36px] text-darkGrey mt-[35px] w-[630px]'>Walletry is committed to fostering the growth of Web3 appliations by providing the infrastructure and security needed for Web3.</p>
          <p className='font-inter font-normal text-[24px] leading-[36px] tracking-[-0.36px] text-darkGrey mt-[35px] w-[630px]'>Walletry believes in Web3 for all. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma on security.</p>
        </div>
        <img src={device} className='w-[450px]' />
      </div>
      <div className='flex items-center gap-[73px] rounded-[16px] py-[38px] px-[125px] mt-[23px] bg-darkBlue w-full'>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold text-[32px] leading-[38px] tracking-[-0.64px] text-white'>220K+</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Contract creators</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold text-[32px] leading-[38px] tracking-[-0.64px] text-white'>89</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Active validators</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold text-[32px] leading-[38px] tracking-[-0.64px] text-white'>90M+</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Unique addresses</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold text-[32px] leading-[38px] tracking-[-0.64px] text-white'>17.5K</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[136px]'>Delegators on PoS</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold text-[32px] leading-[38px] tracking-[-0.64px] text-white'>4.9B+</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Total transactions</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-[10px] w-full'>
        <h2 className='font-sora font-extrabold text-[48px] leading-[72px] tracking-[-1.2px] text-center text-black'>Want to get involved?</h2>
        <p className='font-inter font-normal text-[24px] leading-[36px] tracking-[-0.36px] text-center text-darkGrey'>Or learn all about <span className='text-primary'>how Walletry works.</span></p>
        <button className='py-[17.5px] px-[47px] font-sora font-semibold text-[16px] leading-[20.16px] text-white gradient_btn rounded-[30px] mt-[15px]'>Join the Community</button>
      </div>
      <img src={faded} className='faded_img' />
    </section>
  )
}

export default FinalSect;
