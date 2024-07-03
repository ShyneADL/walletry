import React from 'react'
import { device, faded } from '../assets'

const FinalSect = () => {
  return (
    <section className='md:px-20 px-[20px] md:pt-[140px] py-[60px] pb-[70px] bg-white flex flex-col items-start md:gap-[70px] gap-[40px] w-full relative'>
      <div className='flex md:flex-row flex-col items-center md:gap-[122px] gap-[0px] md:pl-[26px] pl-[0px] md:pr-[52px] pr-[0px] '>
        <div className='flex flex-col items-start gap-[22px]'>
          <h3 className='font-sora font-extrabold lg:text-[40px] md:text-[32px] text-[22px] lg:leading-[52px] tracking-[-1.2px] text-black md:w-[578px]'>Top blockchains build on Walletry.</h3>
          <p className='font-inter font-normal lg:text-[24px] text-[16px] lg:leading-[36px] tracking-[-0.36px] text-darkGrey md:mt-[35px] mt-[20px] md:w-[630px]'>Walletry is committed to fostering the growth of Web3 appliations by providing the infrastructure and security needed for Web3.</p>
          <p className='font-inter font-normal lg:text-[24px] text-[16px] lg:leading-[36px] tracking-[-0.36px] text-darkGrey md:mt-[35px] mt-[20px] md:w-[630px]'>Walletry believes in Web3 for all. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma on security.</p>
        </div>
        <img src={device} className='w-[450px]' />
      </div>
      <div className='flex items-center lg:flex-nowrap flex-wrap md:gap-[73px] gap-[25px] rounded-[16px] py-[38px] md:px-[125px] px-[38px] mt-[23px] bg-darkBlue w-full'>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>220K+</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Contract creators</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>89</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Active validators</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>90M+</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Unique addresses</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>17.5K</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[136px]'>Delegators on PoS</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>4.9B+</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Total transactions</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-[10px] w-full'>
        <h2 className='font-sora font-extrabold md:text-[48px] text-[40px] md:leading-[72px] tracking-[-1.2px] text-center text-black'>Want to get involved?</h2>
        <p className='font-inter font-normal md:text-[24px] text-[20px] leading-[36px] tracking-[-0.36px] text-center text-darkGrey'>Or learn all about <span className='text-primary'>how Walletry works.</span></p>
        <button className='py-[17.5px] px-[47px] font-sora font-semibold text-[16px] leading-[20.16px] text-white gradient_btn rounded-[30px] mt-[15px]'>Join the Community</button>
      </div>
      <img src={faded} className='faded_img md:top-[871px] top-[1050px]' />
    </section>
  )
}

export default FinalSect;
