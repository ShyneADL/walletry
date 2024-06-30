import React from 'react'

const Onboarding = () => {
  return (
    <section className='py-[90px] bg-darkBlue flex flex-col items-center gap-[86px] w-full'>
      <h3 className='font-sora font-bold text-[32px] leading-[40.32px] text-center text-white w-[883px]'>Walletry makes Life easier for onboarding experience  for everyone.</h3>
      <div className='flex items-center gap-[108px] mb-[110px]'>
        <ul className='flex flex-col items-center gap-[26px]'>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Wallet</li>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Gaming</li>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>NFT</li>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>Social</li>
          <li className='font-sora font-semibold text-[24px] leading-[38px] tracking-[-0.64px] text-lightGrey'>MintCoin</li>
        </ul>
        <div className='flex flex-col items-start gap-[35px] bg-white rounded-[24px] py-[85px] pl-[73px] pr-[155px]'>
          <h4 className='font-sora font-bold text-[36px] leading-[52px] tracking-[-0.5px] text-black  w-[739px]'>Convenience and conversion with the right amount of security at every stage.</h4>
          <p className='font-inter font-normal text-[22px] leading-[26.4px] text-darkGrey w-[711.65px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
          <button className='gradient_btn py-[8.5px] px-[39.5px] text-[16px] leading-[28px]'>Let's Go</button>
        </div>
      </div>
    </section>
  )
}

export default Onboarding
