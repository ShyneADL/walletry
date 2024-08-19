import React from 'react'
import { atom } from '../assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const Why = () => {
  useGSAP(() => {
    gsap.fromTo(
      '#atom', {
        y: 420,
        opacity: 0,
      },
      {
        scrollTrigger:'#why',
        y: 0,
        duration: 1.5,
        // ease: 'back',
        opacity: 1,
      }
    )
    gsap.fromTo(
      '#atom_text', {
        y: -420,
        opacity: 0,
      },
      {
        scrollTrigger: '#why',
        y: 0,
        duration: 1.5,
        opacity: 1,
        ease: 'back',
      }
    )
  },[])
  return (
    <section id='why' className='xl:px-[72px] px-[20px] lg:py-[110px] py-[70px] flex lg:flex-row flex-col-reverse items-center xl:gap-[133.86px] gap-[20px] bg-darkBlue w-full'>
      <img id='atom' src={atom} className='xl:w-[450px] xl:h-[431px] md:w-[380px] w-[240px]' />
      <div id='atom_text' className='flex flex-col items-start md:gap-[22px] gap-[18px]'>
        <h3 className='font-sora font-extrabold xl:text-[40px] md:text-[32px] text-[22px] xl:leading-[52px] md:leading-[44px] tracking-[-1.2px] text-white md:w-[578px]'>Top blockchains build on Walletry.</h3>
        <p className='font-inter font-normal xl:text-[24px] md:text-[20px] xl:leading-[36px] md:leading-[30px] tracking-[-0.36px] lg:w-[500px] md:w-[630px] mt-[35px] text-darkGrey'>Walletry is committed to fostering the growth of Web3 applications by providing the infrastructure and security needed for Web3.</p>
        <p className='font-inter font-normal xl:text-[24px] md:text-[20px] xl:leading-[36px] md:leading-[30px] tracking-[-0.36px] lg:w-[500px] md:w-[630px] text-darkGrey'>Walletry believes in Web3 for all. Our web3 wallet infrastructure serves as your secure gateway into the world of digital assets, offering a seamless onboarding experience for both newcomers and seasoned blockchain enthusiasts.</p>
      </div>
    </section>
  )
}

export default Why
