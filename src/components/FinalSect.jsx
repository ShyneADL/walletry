import React, { useRef } from 'react'
import { device, faded } from '../assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


const FinalSect = () => {
 const blueBoxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '#device', {
        y: -420,
        opacity: 0,
      },
      {
        scrollTrigger: '#last_text',
        y: 0,
        duration: 1.5,
        // ease: 'back',
        opacity: 1,
      }
    )
    gsap.fromTo(
      '#last_text', {
        y: 420,
        opacity: 0,
      },
      {
        scrollTrigger: '#last_text',
        y: 0,
        duration: 1.5,
        opacity: 1,
        ease: 'back',
      }
    )
    gsap.to(
      '#cta_btn',
      {
        y: 5,
        yoyo: true,
        ease: 'elastic.in',
        repeat: -1,
        duration: 0.9,
      }
    )
  },[])

  useGSAP(() => {
    gsap.timeline()
    .fromTo(
      blueBoxRef.current,
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        scrollTrigger: blueBoxRef.current,
        opacity: 1,
        scale: 1,
        ease: 'power1',
        duration: 1,
      }
    )
    .fromTo(
      '#white_text', {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: 'expo.in',

      }
    )
    .fromTo(
      '#grey_text',
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
  }, [])
  return (
    <section className='lg:px-20 px-[20px] lg:pt-[140px] py-[60px] pb-[70px] bg-white flex flex-col items-start lg:gap-[70px] gap-[40px] w-full relative'>
      <div className='flex first_div lg:flex-row flex-col items-center lg:gap-[122px] gap-[0px] lg:pl-[26px] pl-[0px] lg:pr-[52px] pr-[0px] '>
        <div id='last_text' className='flex flex-col items-start gap-[22px]'>
          <h3 className='font-sora font-extrabold lg:text-[40px] md:text-[32px] text-[22px] lg:leading-[52px] tracking-[-1.2px] text-black md:w-[578px]'>Top blockchains build on Walletry.</h3>
          <p className='font-inter font-normal lg:text-[24px] text-[16px] lg:leading-[36px] tracking-[-0.36px] text-darkGrey md:mt-[35px] mt-[20px] md:w-[630px]'>Walletry is committed to fostering the growth of Web3 appliations by providing the infrastructure and security needed for Web3.</p>
          <p className='font-inter font-normal lg:text-[24px] text-[16px] lg:leading-[36px] tracking-[-0.36px] text-darkGrey md:mt-[35px] mt-[20px] md:w-[630px]'>Walletry believes in Web3 for all. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma on security.</p>
        </div>
        <img id='device' src={device} className='md:w-[450px] w-[240px]' />
      </div>
      <div ref={blueBoxRef} id='blue_box' className='flex items-center lg:flex-nowrap flex-wrap lg:gap-[73px] gap-[25px] rounded-[16px] py-[38px] lg:px-[125px] px-[38px] mt-[23px] bg-darkBlue w-full'>
        <div className='flex flex-col items-start gap-6'>
          <h3 id='white_text' className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>220K+</h3>
          <p id='grey_text' className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Contract creators</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 id='white_text' className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>89</h3>
          <p id='grey_text' className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Active validators</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 id='white_text' className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>90M+</h3>
          <p id='grey_text' className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Unique addresses</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 id='white_text' className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>17.5K</h3>
          <p id='grey_text' className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[136px]'>Delegators on PoS</p>
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h3 id='white_text' className='font-sora font-extrabold md:text-[32px] text-[22px] md:leading-[38px] tracking-[-0.64px] text-white'>4.9B+</h3>
          <p id='grey_text' className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[132px]'>Total transactions</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-[10px] w-full'>
        <h2 className='font-sora font-extrabold md:text-[48px] text-[40px] md:leading-[72px] tracking-[-1.2px] text-center text-black'>Want to get involved?</h2>
        <p className='font-inter font-normal md:text-[24px] text-[20px] leading-[36px] tracking-[-0.36px] text-center text-darkGrey'>Or learn all about <span className='text-primary'>how Walletry works.</span></p>
        <button id='cta_btn' className='py-[17.5px] px-[47px] font-sora font-semibold text-[16px] leading-[20.16px] text-white gradient_btn rounded-[30px] mt-[15px]'>Join the Community</button>
      </div>
      <img src={faded} className='faded_img lg:top-[871px] top-[1050px]' />
    </section>
  )
}

export default FinalSect;
