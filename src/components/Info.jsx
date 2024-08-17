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
        ease: 'bounce.inOut'
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
        ease: 'bounce.inOut'
      }
    )
  },[])
  return (
    <section className='md:py-[104px] py-[70px] bg-white flex flex-col items-center gap-[160px]  w-full'>
      <h3 id='blockchain' className='font-sora font-bold md:text-[32px] text-[22px] text-[22px] leading-[40.32px] text-center text-black md:w-[674px] w-[390px]'>Walletry makes blockchain development accessible for everyone.</h3>
      <div className='flex lg:flex-row flex-col items-center lg:gap-[10px] gap-[120px]'>
        <div className='p-[30px] info_box shadow flex flex-col items-start gap-[15px] relative md:w-[420px]  w-[300px]'>
          <img src={item1} className='absolute md:top-[-180px] top-[-120px] left-[50%] translate-x-[-50%] md:w-[340px] w-[260px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Globally-accesible, transformational API</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[220px]'>Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.</p>
          <div className='flex items-center justify-between mt-[40px] w-full'>
            <p className='font-sora font-semibold text-[18px] leading-[27px] tracking-[-0.36px] text-primary'>Learn more</p>
            <img src={arrow} className='w-[26px] h-[26px]'/>
          </div>
        </div>
        <div className='p-[30px] info_box shadow flex flex-col items-start gap-[15px] relative md:w-[420px] w-[300px]'>
          <img src={item2} className='absolute md:top-[-180px] top-[-120px] left-[50%] translate-x-[-50%] md:w-[340px] w-[260px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Globally-accesible, transformational API</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[220px]'>Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.</p>
          <div className='flex items-center justify-between mt-[40px] w-full'>
            <p className='font-sora font-semibold text-[18px] leading-[27px] tracking-[-0.36px] text-primary'>Learn more</p>
            <img src={arrow} className='w-[26px] h-[26px]'/>
          </div>
        </div>
        <div className='p-[30px] info_box shadow flex flex-col items-start gap-[15px] relative md:w-[420px] w-[300px]'>
          <img src={item3} className='absolute md:top-[-180px] top-[-120px] left-[50%] translate-x-[-50%] md:w-[340px] w-[260px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <h3 className='font-sora font-bold md:text-[32px] text-[22px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Globally-accesible, transformational API</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[220px]'>Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.</p>
          <div className='flex items-center justify-between mt-[40px] w-full'>
            <p className='font-sora font-semibold text-[18px] leading-[27px] tracking-[-0.36px] text-primary'>Learn more</p>
            <img src={arrow} className='w-[26px] h-[26px]'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
