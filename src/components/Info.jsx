import React from 'react'
import { item1, item2, item3, arrow, corner } from '../assets'

const Info = () => {
  return (
    <section className='py-[104px] bg-white flex flex-col items-center gap-[160px] w-full'>
      <h3 className='font-sora font-bold text-[32px] leading-[40.32px] text-center text-black w-[674px]'>Walletry makes blockchain development accessible for everyone.</h3>
      <div className='flex items-center gap-[10px]'>
        <div className='p-[30px] info_box shadow flex flex-col items-start gap-[15px] relative w-[420px]'>
          <img src={item1} className='absolute top-[-180px] left-[50%] translate-x-[-50%] w-[340px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Globally-accesible, transformational API</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[302px]'>Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.</p>
          <div className='flex items-center justify-between mt-[40px] w-full'>
            <p className='font-sora font-semibold text-[18px] leading-[27px] tracking-[-0.36px] text-primary'>Learn more</p>
            <img src={arrow} className='w-[26px] h-[26px]'/>
          </div>
        </div>
        <div className='p-[30px] info_box shadow flex flex-col items-start gap-[15px] relative w-[420px]'>
          <img src={item2} className='absolute top-[-180px] left-[50%] translate-x-[-50%] w-[340px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Globally-accesible, transformational API</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[302px]'>Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.</p>
          <div className='flex items-center justify-between mt-[40px] w-full'>
            <p className='font-sora font-semibold text-[18px] leading-[27px] tracking-[-0.36px] text-primary'>Learn more</p>
            <img src={arrow} className='w-[26px] h-[26px]'/>
          </div>
        </div>
        <div className='p-[30px] info_box shadow flex flex-col items-start gap-[15px] relative w-[420px]'>
          <img src={item3} className='absolute top-[-180px] left-[50%] translate-x-[-50%] w-[340px]'/>
          <img src={corner} className='absolute right-[8px] top-[8px] w-[16.5px] h-[48px]' />
          <h3 className='font-sora font-bold text-[32px] leading-[38px] tracking-[-0.64px] mt-[85px]'>Globally-accesible, transformational API</h3>
          <p className='font-inter font-normal text-[16px] leading-[27px] tracking-[-0.36px] text-darkGrey w-[302px]'>Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.</p>
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
