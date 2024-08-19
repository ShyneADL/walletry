import React from 'react'
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '../assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const Solutions = () => {
  useGSAP(() => {
    gsap.fromTo('.shadow_box', 
      {
      y: -100,
      opacity: 0,
     },
      {
      duration: 1,
      opacity: 1,  
      y: 0,
      ease: "back.inOut",
      scrollTrigger: '.shadow_box',
      stagger: {
        grid: 'auto',
        from: "start",
        axis: "y",
        ease: "elastic.in",
        amount: 1.5
      }
    });
  }, [])
  return (
    <section className='bg-white flex flex-col items-center gap-[58px] md:py-[120px] py-[70px] xl:px-[185px] lg px-[20px] w-full'>
      <div className='flex flex-col items-center gap-[20px]'>
        <h3 className='font-sora font-bold md:text-[32px] text-[22px] md:leading-[40.32px] text-center text-black'>Scaling solutions, amplified</h3>
        <p className='font-inter font-normal md:text-[24px] text-[16px] md:leading-[36px] tracking-[-0.36px] text-center text-darkGrey'>Walletry’s complete suite of blockchain-scaling solutions.</p>
      </div>
      <div className='grid_box'>
        <div className='shadow_box flex flex-col items-start item-0 md:gap-[15px] gap-[10px] rounded-[24px] md:pl-[32px] xl:pl-[32px] lg:pl-[22px] pl-[18px] xl:pr-[20px] lg:pr-[18px] md:pr-[20px] pr-[18px] md:pt-[32px] pt-[18px] md:pb-[66px] pb-[38px] md:h-[400px] h-auto'>
          <img src={icon1} className='w-8 h-8' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-black md:mt-5 mt-3'>Intuitive User Experience</h3>
          <p className='font-inter font-normal md:text-[16px] text-[14px] leading-[27px] tracking-[-0.36px] md:w-[277.2px] w-[135px]'>Walletry offers an intuitive and user-friendly interface, making it easy for users of all levels of experience to seamlessly navigate and manage their digital assets.</p>
        </div>
        <div className='shadow_box flex flex-col items-start item-1 md:gap-[15px] gap-[10px] rounded-[24px] md:pl-[32px] xl:pl-[32px] lg:pl-[22px] pl-[18px] xl:pr-[20px] lg:pr-[18px] md:pr-[20px] pr-[18px] md:pt-[32px]  pt-[18px] md:pb-[66px] pb-[38px] md:h-[400px] h-auto'>
          <img src={icon2} className='w-8 h-8' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-black md:mt-5 mt-3'>Robust Security Measures</h3>
          <p className='font-inter font-normal md:text-[16px] text-[14px] leading-[27px] tracking-[-0.36px] md:w-[277.2px] w-[135px]'>With Walletry, security is our top priority. We implement cutting-edge security measures to safeguard your funds and ensure that your assets are protected at all times.</p>
        </div>
        <div className='shadow_box flex flex-col items-start item-2 md:gap-[15px] gap-[10px] rounded-[24px] md:pl-[32px] xl:pl-[32px] lg:pl-[22px] pl-[18px] xl:pr-[20px] lg:pr-[18px] md:pr-[20px] pr-[18px] md:pt-[32px]  pt-[18px] md:pb-[66px] pb-[38px] md:h-[400px] h-auto'>
          <img src={icon3} className='w-8 h-8' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-black md:mt-5 mt-3'>Resources and Updates</h3>
          <p className='font-inter font-normal md:text-[16px] text-[14px] leading-[27px] tracking-[-0.36px] md:w-[277.2px] w-[135px]'>Stay informed and up-to-date on the latest trends and developments in the blockchain industry with Walletry's curated content and resources to enable you to make informed decisions about your digital assets.</p>
        </div>
        <div className='shadow_box flex flex-col items-start item-3 md:gap-[15px] gap-[10px] rounded-[24px] md:pl-[32px] xl:pl-[32px] lg:pl-[22px] pl-[18px] xl:pr-[20px] lg:pr-[18px] md:pr-[20px] pr-[18px] md:pt-[32px]  pt-[18px] md:pb-[66px] pb-[38px] md:h-[400px] h-auto'>
          <img src={icon4} className='w-8 h-8' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-black md:mt-5 mt-3'>24/7 Customer Support</h3>
          <p className='font-inter font-normal md:text-[16px] text-[14px] leading-[27px] tracking-[-0.36px] md:w-[277.2px] w-[135px]'>Our dedicated support team is available round the clock to address any queries and provide you with the guidance you need to navigate the world of blockchain technology effectively.</p>
        </div>
        <div className='shadow_box flex flex-col items-start item-4 md:gap-[15px] gap-[10px] rounded-[24px] md:pl-[32px] xl:pl-[32px] lg:pl-[22px] pl-[18px] xl:pr-[20px] lg:pr-[18px] md:pr-[20px] pr-[18px] md:pt-[32px]  pt-[18px] md:pb-[66px] pb-[38px] md:h-[400px] h-auto'>
          <img src={icon5} className='w-8 h-8' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-black md:mt-5 mt-3'>Asset Management</h3>
          <p className='font-inter font-normal md:text-[16px] text-[14px] leading-[27px] tracking-[-0.36px] md:w-[277.2px] w-[135px]'>Manage a diverse portfolio of digital assets with ease on Walletry. Our platform supports a wide range of cryptocurrencies, providing you with the flexibility to explore various investment opportunities.</p>
        </div>
        <div className='shadow_box flex flex-col items-start item-5 md:gap-[15px] gap-[10px] rounded-[24px] md:pl-[32px] xl:pl-[32px] lg:pl-[22px] pl-[18px] xl:pr-[20px] lg:pr-[18px] md:pr-[20px] pr-[18px] md:pt-[32px]  pt-[18px] md:pb-[66px] pb-[38px] md:h-[400px] h-auto'>
          <img src={icon6} className='w-8 h-8' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-black md:mt-5 mt-3'>Onboarding Process</h3>
          <p className='font-inter font-normal md:text-[16px] text-[14px] leading-[27px] tracking-[-0.36px] md:w-[277.2px] w-[135px]'>Walletry offers a seamless onboarding process that guides you through setting up your wallet and getting started on your blockchain journey in no time.</p>
        </div>
      </div>
    </section>
  )
}

export default Solutions
