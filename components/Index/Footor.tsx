import Image from 'next/image'
import React from 'react'

const Footor = () => {
  return (
    <div className='lg:mt-[98px] md:mt-[56px] mt-[48px] lg:h-[506px] md:h-[506px] bg-black lg:px-[28px] md:px-[28px] px-[14px] lg:pt-[44px] md:pt-[44px] pt-[0px] lg:pb-[24px] md:pb-[24px] pb-[65px] flex lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center lg:justify-between md:justify-between justify-center relative overflow-hidden' >

        <div className='flex flex-col lg:justify-start md:justify-start justify-center lg:items-start md:items-start items-center ' >
          <p className='lg:text-[24px] md:text-[24px] text-[20px] font-[500] leading-[24px] !text-white mt-[48px] lg:mt-[0px] md:mt-[0px]' >Subscribe to our newsletter</p>
          <p className='lg:text-[14px] md:text-[14px] text-[10px] font-[400]  mt-[6px] !text-white' >Your Game, Your Turf – Anytime, Anywhere</p>

          <div className='flex rounded-[28px] lg:mt-[24px] md:mt-[24px] mt-[19px] pr-[2px] py-[2px] bg-white lg:w-[316px] md:w-[316px] w-[346px] items-center justify-between' >
            <input type="text" className='px-[24px] py-[15px] w-[87%] placeholder:text-[12px] h-[45px] outline-0' placeholder='Enter your email address' />
            <button className='bg-black rounded-full w-[42px] h-[42px] flex items-center justify-center' ><Image width={24} height={24} alt='arrow' src={'/index/arrow-up-right.png'} /></button>
          </div>

          <ul className='hidden lg:block md:block mt-[24px] gap-[16px]' >
            <li><p className='text-[14px] font-[500] !text-[#FCFBFC99]' >© EXTRATIME</p></li><br />
            <div className='flex gap-[16px] ' >
              <li><p className='text-[14px] font-[500] !text-[#FCFBFC99]' >Terms & Conditions</p></li>
              <li><p className='text-[14px] font-[500] !text-[#FCFBFC99]' >Privacy Policy</p></li>
              <li><p className='text-[14px] font-[500] !text-[#FCFBFC99]' >Cookies</p></li>
            </div>
          </ul>
        </div>

        <div className='lg:flex md:flex grid grid-cols-2 gap-[28px] lg:mt-[0px] md:mt-[0px] mt-[48px] ' >
          <ul>
            <li><p className='!text-[var(--subwhite)] lg:text-[18px] md:text-[18px] text-[16px] font-[600] ' >Platform</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[24px] md:mt-[24px] mt-[18px]' >Home</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[12px]' >Facilities</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[12px]' >Find a Match</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[12px]' >Community</p></li>
          </ul>
          <ul>
            <li><p className='!text-[var(--subwhite)] lg:text-[18px] md:text-[18px] text-[16px] font-[600] ' >For turf owners</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[24px] md:mt-[24px] mt-[18px]' >List your turf</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[12px]' >Business Dashboard</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[12px]' >Marketing & Promotions</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[12px]' >Help Center</p></li>
          </ul>
          <ul>
            <li><p className='!text-[var(--subwhite)] lg:text-[18px] md:text-[18px] text-[16px] font-[600] ' >Payments & Support</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[24px] md:mt-[24px] mt-[18px]' >Payment & Refund Policy</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[12px]' >FAQs</p></li>
            <li><p className='!text-[var(--subwhite)] lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[12px]' >Contact Us</p></li>
          </ul>
        </div>

        <ul className='flex flex-1  lg:hidden md:hidden mt-[36px] w-full justify-between gap-[2vw]' >
          <li><p className='text-[12px] font-[500] !text-[#FCFBFC99]' >© EXTRATIME</p></li><br />
          <div className='flex flex-1  justify-between' >
            <li><p className='text-[12px] font-[500] !text-[#FCFBFC99]' >Terms & Conditions</p></li>
            <li><p className='text-[12px] font-[500] !text-[#FCFBFC99]' >Privacy Policy</p></li>
            <li><p className='text-[12px] font-[500] !text-[#FCFBFC99]' >Cookies</p></li>
          </div>
        </ul>

        <p className='!text-white lg:text-[252px] md:text-[190px] text-[64px] font-[400] absolute lg:bottom-[-120px] md:bottom-[-90px] bottom-[-30px]  w-full max-w-screen text-center left-[0px] z-20 ' >EXTRATIME</p>
    </div>
  )
}

export default Footor