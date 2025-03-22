import Image from 'next/image'
import React from 'react'

const Faculties = () => {
  return (
    <div className='mt-[98px] mx-[28px]' >
        <div className='flex items-cente ' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >3</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >FACILITIES</p>        
        </div>

        <div className='mt-[48px]' >
            <p className='text-[56px] font-[500] text-center' >Explore our facilities.</p>
            <p className='text-[16px] font-[400] text-center mt-[24px]' >From high-quality turfs and professional-grade courts to fully-equipped arenas, our facilities are designed for every athlete. Whether <br /> you&apos;re playing for fun or competing at the highest level, experience top-tier sports environments that enhance your game. Find the perfect <br /> venue and play without limits</p>
        </div>

        <div className='bg-[var(--subwhite)] rounded-[18px] py-[24px] px-[30px] mt-[24px]' >
            <div className='flex justify-end items-center gap-[12px]' >
                <input 
                    className='bg-white rounded-[28px] py-[13px] px-[24px] w-[460px]'
                    placeholder='Enter your pincode '
                    type="text" /> 
                <button className='px-[52px] py-[12px] rounded-[28px] text-[18px] font-[500] bg-[var(--orange)] !text-[var(--background)]' >View all</button>
            </div>
            <Image src={'/index/GoogleMapsWidget.png'} className='!w-[100%] mt-[32px]' width={1000} height={1500} alt='map' />
            <p className='text-[16px] text-center font-[400] mt-[32px]' >Find top sports facilities near you with ease! Whether it&apos;s a turf, court, or arena, locate the perfect venue for your <br /> next game in just a few taps. Play at the best spots, anytime, anywhere</p>

            <div className='flex justify-between gap-[24px] mt-[24px]' >

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