import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


import { item1, item2, item3, arrow, corner } from '../assets'

const Info = () => {
  useGSAP(() => {
    gsap.fromTo(
      '#blockchain',
      {
        opacity: 0,
      },
      {
        scrollTrigger: '#blockchain',
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: 'back.inOut'
      }
    )
    gsap.fromTo(
      '.info_box',
      {
        x:200,
        opacity: 0,
      },
      {
        scrollTrigger: '.info_box',
        x:0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        ease: 'expo'
      }
    )
  },[])
  return (
    <section className='md:py-[104px] py-[70px] bg-white flex flex-col items-center gap-[160px]  w-full'>
      <h3 id='blockchain' className='font-sora font-bold md:text-[32px] text-[22px] text-[22px] leading-[40.32px] text-center text-black md:w-[674px] w-[390px]'>Walletry makes blockchain development accessible for everyone.</h3>
      <div className='flex lg:flex-row flex-col items-center content-center justify-center lg:flex-wrap lg:gap-[10px] gap-[120px]'>
        <div className='p-[30px] info_box shadow flex flex-col items-start gap-[15px] relative md:w-[420px] w-[300px] md:h-[480px]'>
          <img src={item1} className='absolute md:top-[-180px] top-[-120px] left-[50%] translate-x-[-50%] md:w-[340px] w-[260px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <div className='flex items-start flex-col justify-between h-full'>
            <div className='flex flex-col items-start gap-[15px]'>
            <h3 className='font-sora font-bold md:text-[32px] text-[22px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Multi-Currency Support</h3>
            <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-full'>Walletry provides support for a wide range of cryptocurrencies, allowing you to manage multiple digital assets within a single, convenient platform. Easily track and transfer various cryptocurrencies without the need for multiple wallets.</p>
            </div>
            <div className='flex items-center justify-between mt-4 w-full'>
              <p className='font-sora font-semibold text-[18px] leading-[27px] tracking-[-0.36px] text-primary'>Learn more</p>
              <img src={arrow} className='w-[26px] h-[26px]'/>
            </div>
          </div>
        </div>
        <div className='p-[30px] relative info_box shadow flex flex-col items-start gap-[15px] relative md:w-[420px] w-[300px] md:h-[480px]'>
          <img src={item2} className='absolute md:top-[-180px] top-[-120px] left-[50%] translate-x-[-50%] md:w-[340px] w-[260px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <div className='flex items-start flex-col justify-between h-full'>
            <div className='flex flex-col items-start gap-[15px]'>
            <h3 className='font-sora font-bold md:text-[32px] text-[22px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Decentralized Finance (DeFi) Integration</h3>
            <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-full'>Walletry seamlessly integrates with various decentralized finance (DeFi) protocols, enabling you to participate in activities such as staking, lending, and yield farming directly from your wallet. Explore the world of DeFi and maximize your earning potential with Walletry's DeFi integrations.</p>
            </div>
            <div className='flex items-center justify-between mt-4 w-full'>
              <p className='font-sora font-semibold text-[18px] leading-[27px] tracking-[-0.36px] text-primary'>Learn more</p>
              <img src={arrow} className='w-[26px] h-[26px]'/>
            </div>
          </div>
        </div>
        <div className='p-[30px] relative info_box shadow flex flex-col items-start gap-[15px] relative md:w-[420px] w-[300px] md:h-[480px] xl:mt-0 lg:mt-20'>
          <img src={item3} className='absolute md:top-[-180px] top-[-120px] left-[50%] translate-x-[-50%] md:w-[340px] w-[260px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <div className='flex items-start flex-col justify-between h-full'>
            <div className='flex flex-col items-start gap-[15px]'>
            <h3 className='font-sora font-bold md:text-[32px] text-[22px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Cross-Platform Accessibility</h3>
            <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-full'>Access your Walletry account from any device, whether it's your desktop, laptop, or mobile phone. Our cross-platform accessibility ensures that you can manage your digital assets and stay connected to the blockchain ecosystem wherever you are, whenever you need it.</p>
            </div>
            <div className='flex items-center justify-between mt-4 w-full'>
              <p className='font-sora font-semibold text-[18px] leading-[27px] tracking-[-0.36px] text-primary'>Learn more</p>
              <img src={arrow} className='w-[26px] h-[26px]'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
