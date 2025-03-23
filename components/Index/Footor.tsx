import Image from 'next/image'
import React from 'react'

const Footor = () => {
  return (
    <div className='mt-[98px] h-[506px] bg-black px-[28px] pt-[44px] pb-[24px] flex items-start justify-between relative' >

        <div>
          <p className='text-[24px] font-[500] leading-[24px] !text-white' >Subscribe to our newsletter</p>
          <p className='text-[14px] font-[400] mt-[6px]' >Your Game, Your Turf – Anytime, Anywhere</p>

          <div className='flex rounded-[28px] pr-[2px] py-[2px] bg-white w-[360px] items-center justify-between' >
            <input type="text" className='px-[24px] py-[15px] w-[87%] placeholder:text-[12px] h-[45px] outline-0' placeholder='Enter your email address' />
            <button className='bg-black rounded-full w-[42px] h-[42px] flex items-center justify-center' ><Image width={24} height={24} alt='arrow' src={'/index/arrow-up-right.png'} /></button>
          </div>

          <ul className='mt-[24px] flex gap-[16px]' >
            <li><p className='text-[14px] font-[500] !text-[#FCFBFC99]' >© EXTRATIME</p></li>
            <li><p className='text-[14px] font-[500] !text-[#FCFBFC99]' >Terms & Conditions</p></li>
            <li><p className='text-[14px] font-[500] !text-[#FCFBFC99]' >Privacy Policy</p></li>
            <li><p className='text-[14px] font-[500] !text-[#FCFBFC99]' >Cookies</p></li>
          </ul>
        </div>

        <div className='flex gap-[64px]' >
          <ul>
            <li><p className='!text-[var(--subwhite)] text-[18px] font-[600] ' >Platform</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[24px]' >Home</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[16px]' >Facilities</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[16px]' >Find a Match</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[16px]' >Community</p></li>
          </ul>
          <ul>
            <li><p className='!text-[var(--subwhite)] text-[18px] font-[600] ' >For turf owners</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[24px]' >List your turf</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[16px]' >Business Dashboard</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[16px]' >Marketing & Promotions</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[16px]' >Help Center</p></li>
          </ul>
          <ul>
            <li><p className='!text-[var(--subwhite)] text-[18px] font-[600] ' >Payments & Support</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[24px]' >Payment & Refund Policy</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[16px]' >FAQs</p></li>
            <li><p className='!text-[var(--subwhite)] text-[16px] font-[400] mt-[16px]' >Contact Us</p></li>
          </ul>
        </div>

        <p className='!text-white text-[242px] font-[400] absolute bottom-[-120px] z-20' >EXTRATIME</p>
    </div>
  )
}

export default Footor