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
    <section id='why' className='lg:px-[72px] px-[20px] lg:py-[110px] py-[70px] flex lg:flex-row flex-col-reverse items-center lg:gap-[133.86px] gap-[20px] bg-darkBlue'>
      <img id='atom' src={atom} className='lg:w-[450px] lg:h-[431px] md:w-[380px] w-[240px]' />
      <div id='atom_text' className='flex flex-col items-start md:gap-[22px] gap-[18px]'>
        <h3 className='font-sora font-extrabold lg:text-[40px] md:text-[32px] text-[22px] lg:leading-[52px] md:leading-[44px] tracking-[-1.2px] text-white md:w-[578px]'>Top blockchains build on Walletry.</h3>
        <p className='font-inter font-normal xl:text-[24px] md:text-[20px] xl:leading-[36px] md:leading-[30px] tracking-[-0.36px] md:w-[630px] mt-[35px] text-darkGrey'>Walletry is committed to fostering the growth of Web3 applications by providing the infrastructure and security needed for Web3.</p>
        <p className='font-inter font-normal xl:text-[24px] md:text-[20px] xl:leading-[36px] md:leading-[30px] tracking-[-0.36px] md:w-[630px] text-darkGrey'>Walletry believes in Web3 for all. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma on security.</p>
      </div>
    </section>
  )
}

export default Why
