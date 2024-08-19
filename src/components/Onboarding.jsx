import React, {useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Onboarding = () => {
  const onboardingRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      '.side_text', {
          y:120,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: onboardingRef.current,
            start: 'top center',
            end: 'bottom bottom',
          },
          y:0,
          opacity: 1,
          stagger: 0.2,
          ease: 'back',
          delay: 0.5,
      }
    )
    gsap.timeline()
    // White box
    .fromTo(
      '#white_box', 
      {
        scale: 0.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: 'back.inOut',
        duration: 1,
      }
    )
    // Button
    .fromTo(
      '#go_btn',
      {
        y: 20,
        opacity: 0,
      },
      {
        y:0,
        opacity: 1,
        ease: 'back',
        duration: 1.3,
        delay: 0.5,
      }

    )
    },[])
  return (
    <section className='py-[70px] xl:px-[80px] lg:px-[20px] md:px-[80px] px-[20px] bg-darkBlue flex flex-col items-center gap-[86px] w-full'>
      <h3 className='font-sora font-bold md:text-[32px] text-[22px] leading-[40.32px] text-center text-white lg:w-[883px] md:w-[600px] w-[390px]'>Walletry makes Life easier for onboarding experience  for everyone.</h3>
      <div className='text_wrapper flex lg:flex-row flex-col-reverse items-center xl:gap-[108px] gap-[72px] lg:mb-[110px] mb-[50px]'>
        <ul className='flex lg:flex-col items-center md:gap-[26px] md:flex-nowrap flex-wrap gap-[12px] justify-center'>
          <li className='side_text font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Wallet</li>
          <li className='side_text font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Gaming</li>
          <li className='side_text font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>NFT</li>
          <li className='side_text font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Social</li>
          <li className='side_text font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>MintCoin</li>
        </ul>
        <div ref={onboardingRef} id='white_box' className='flex flex-col items-start gap-[35px] bg-white rounded-[24px] xl:py-[85px] py-[52px] xl:pl-[73px] pl-[30px] xl:pr-[155px] pr-[30px]'>
          <h4 id='main_text' className='font-sora font-bold md:text-[36px] text-[24px] md:leading-[52px] tracking-[-0.5px] text-black lg:w-[739px] md:w-[578px] w-[323px]'>Convenience and conversion with the right amount of security at every stage.</h4>
          <p className='font-inter font-normal md:text-[22px] text-[16px] md:leading-[26.4px] text-darkGrey lg:w-[711.65px] md:w-[546px] w-[299px] '>From setting up your wallet to navigating the blockchain landscape, we've got you covered.</p>
          <button id='go_btn' className='gradient_btn py-[8.5px] px-[39.5px] text-[16px] leading-[28px]'>Let's Go</button>
        </div>
      </div>
    </section>
  )
}

export default Onboarding
