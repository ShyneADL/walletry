import React from 'react'
import { item1, item2, item3, arrow, corner } from '../assets'

const Info = () => {
  return (
    <section className='py-[104px] bg-white flex flex-col items-center gap-[160px] w-full'>
      <h3 className='font-sora font-700 text-[32px] leading-[40.32px] text-center text-black w-[674px]'>Walletry makes blockchain development accessible for everyone.</h3>
      <div className='flex items-center gap-[22.25px]'>
        <div className='p-10 bg-white shadow flex flex-col items-start gap-[15px] relative'>
          <img src={item1} className='absolute top-[-20px] left-[50%] translate-x-[-50%]'/>
          <img src={corner} className='absolute right-[0px] top-[0px]' />
          <h3 className='font-sora font-700 text-[32px] leading-[38px] tracking-[-0.64px]'>Globally-accesible, transformational API</h3>
        </div>
      </div>
    </section>
  )
}

export default Info
