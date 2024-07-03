import React from 'react'

const Onboarding = () => {
  return (
    <section className='py-[90px] bg-darkBlue flex flex-col items-center gap-[86px] w-full'>
      <h3 className='font-sora font-bold md:text-[32px] text-[22px] leading-[40.32px] text-center text-white lg:w-[883px] md:w-[600px] w-[390px]'>Walletry makes Life easier for onboarding experience  for everyone.</h3>
      <div className='flex md:flex-row flex-col-reverse items-center md:gap-[108px] gap-[72px] mb-[110px]'>
        <ul className='flex md:flex-col items-center md:gap-[26px] gap-[12px]'>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Wallet</li>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Gaming</li>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>NFT</li>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Social</li>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>MintCoin</li>
        </ul>
        <div className='flex flex-col items-start gap-[35px] bg-white rounded-[24px] md:py-[85px] py-[52px] md:pl-[73px] pl-[12px] md:pr-[155px] pr-[22px]'>
          <h4 className='font-sora font-bold md:text-[36px] text-[24px] md:leading-[52px] tracking-[-0.5px] text-black lg:w-[739px] md:w-[578px] w-[323px]'>Convenience and conversion with the right amount of security at every stage.</h4>
          <p className='font-inter font-normal md:text-[22px] text-[16px] md:leading-[26.4px] text-darkGrey lg:w-[711.65px] md:w-[546px] w-[299px] '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
          <button className='gradient_btn py-[8.5px] px-[39.5px] text-[16px] leading-[28px]'>Let's Go</button>
        </div>
      </div>
    </section>
  )
}

export default Onboarding
