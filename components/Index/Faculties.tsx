import Image from 'next/image'
import React from 'react'

const Faculties = () => {
  return (
    <div className='lg:mt-[98px] md:mt-[56px] mt-[48px] lg:mx-[28px] md:mx-[28px] mx-[14px]' >
        <div className='flex items-center ' >
            <p className='lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] w-[36px] h-[36px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >3</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)] text-[14px] lg:text-[18px] md:text-[18px] ' >FACILITIES</p>        
        </div>

        <div className='lg:mt-[48px] md:mt-[48px] mt-[24px]' >
            <p className='lg:text-[56px] md:text-[56px] text-[28px] font-[500] lg:text-center md:text-center ' >Explore our facilities</p>
            <p className='lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:text-center md:text-center lg:mt-[24px] md:mt-[24px] mt-[14px]' >From high-quality turfs and professional-grade courts to fully-equipped arenas, our facilities are designed for every athlete. Whether  you&apos;re playing for fun or competing at the highest level, experience top-tier sports environments that enhance your game. Find the perfect  venue and play without limits.</p>
        </div>

        <div className='bg-[var(--subwhite)] rounded-[18px] lg:py-[24px] md:py-[24px] lg:px-[30px] md:px-[30px] py-[14px] px-[14px] lg:mt-[24px] md:mt-[24px] mt-[18px]' >
            <div className='flex lg:justify-end md:justify-end justify-between  items-center lg:gap-[12px] md:gap-[12px] gap-[6px] ' >
                <input 
                    className='bg-white rounded-[28px] lg:h-[48px] md:h-[48px] h-[36px]  px-[24px] lg:w-[460px] md:w-[460px] w-[190px]'
                    placeholder='Enter your pincode '
                    type="text" /> 
                <button className='lg:px-[52px] md:px-[52px] px-[36px] lg:h-[48px] md:h-[48px] h-[36px] rounded-[28px] lg:text-[18px] md:text-[18px] text-[14px] font-[500] bg-[var(--orange)] !text-[var(--background)]' >View all</button>
            </div>
            <Image src={'/index/GoogleMapsWidget.png'} className='!w-[100%] mt-[32px] hidden lg:flex md:flex' width={1000} height={1500} alt='map' />
            <Image src={'/index/GoogleMapsWidget1.png'} className='!w-[100%] mt-[16px] flex lg:hidden md:hidden' width={1000} height={1500} alt='map' />
            <p className='lg:text-[16px] md:text-[16px] text-[10px] text-center font-[400] lg:mt-[32px] md:mt-[32px] mt-[24px]' >Find top sports facilities near you with ease! Whether it&apos;s a turf, court, or arena, locate the perfect venue for your  next game in just a few taps. Play at the best spots, anytime, anywhere.</p>

            <div className=' justify-between gap-[24px] mt-[24px] hidden lg:flex md:flex' >

                <div className='w-[calc((100vw-142px)/4)] h-[calc((100vw-142px)/4)]  p-[12px] rounded-[18px] flex justify-start items-end align-bottom bg-[url("/index/Rectangle41.png")] bg-cover' >
                    <p className='!text-[var(--background)] text-[18px] font-[400] leading-[24px]' >Professionally <br /> Designed Courts</p>
                </div>
                <div className='w-[calc((100vw-142px)/4)] h-[calc((100vw-142px)/4)]  p-[12px] rounded-[18px] flex justify-start items-end align-bottom bg-[url("/index/Rectangle42.png")] bg-cover' >
                    <p className='!text-[var(--background)] text-[18px] font-[400] leading-[24px]' >State- <br />of-the-Art Lighting</p>
                </div>
                <div className='w-[calc((100vw-142px)/4)] h-[calc((100vw-142px)/4)]  p-[12px] rounded-[18px] flex justify-start items-end align-bottom bg-[url("/index/Rectangle43.png")] bg-cover' >
                    <p className='!text-[var(--background)] text-[18px] font-[400] leading-[24px]' >Safe & <br />Well-Maintained Surfaces</p>
                </div>
                <div className='w-[calc((100vw-142px)/4)] h-[calc((100vw-142px)/4)]  p-[12px] rounded-[18px] flex justify-start items-end align-bottom bg-[url("/index/Rectangle44.png")] bg-cover' >
                    <p className='!text-[var(--background)] text-[18px] font-[400] leading-[24px]' >Multi- <br />Sport Compatibility</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Faculties