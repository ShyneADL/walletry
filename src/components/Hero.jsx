import React from 'react'
import { mouse } from '../assets'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const hero = () => {
  useGSAP(() => {
    gsap.to(
      '#mouse',
      {
        y:12,
        repeat: -1,
        yoyo: true,
        ease: 'circ.inOut'
      }
    )
    gsap.fromTo(
      '#text',
      {
        y:120,
        opacity: 0,
      },
      {
        y:0,
        opacity: 1,
        ease: 'power3.inOut',
        duration: 0.8,
        delay: 0.8,
      }
    )
  },[])
  return (
    <div className='bg-darkBlue hero_image md:py-[125px] py-[70px] flex flex-col items-center md:h-[1488px] h-[728px] w-full'>
      <div id='text' className='flex flex-col items-center gap-[10px]'>
        <h4 className='font-inter font-semibold md:text-[16px] text-[14px] leading-[21px] tracking-[0.9px] text-center text-darkGrey'>Introducing Walletry</h4>
        <h2 className='font-sora font-bold md:text-[46px] text-[24px] md:leading-[55.66px] text-center text-white lg:w-[718.91px] md:w-[592px] w-[380px]'>Seamless onboarding process into any platform via wallet connection</h2>
        <p className='font-inter font-normal md:text-[18px] text-[16px] md:leading-[27px] text-center text-darkGrey mt-[10px] md:w-[600px] w-[320px]'>At Walletry, we are dedicated to simplifying the complex world of blockchain technology and empowering individuals to explore the endless possibilities of the decentralized financial ecosystem.</p>
        <button className='gradient_btn md:py-[21px] py-[16px] md:px-[82.5px] px-[60px] md:text-[18px] text-[16px] leading-[22.68px] mt-[25px]'>Book a Demo</button>
      <div className='flex flex-col items-center gap-[17px] md:mt-[634.9px] mt-[100px] cursor-pointer'>
        <div className='p-4 '>
          <img src={mouse} id='mouse' className='w-[38px] h-[64px]'/>
        </div>
        <p className='font-inter font-bold uppercase text-[12px] leading-[14px] tracking-[0.6px] text-center text-darkGrey'>Scroll to explore</p>
      </div>
      </div>
    </div>
  )
}

export default hero
