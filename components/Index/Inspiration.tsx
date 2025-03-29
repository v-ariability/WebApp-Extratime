import Image from 'next/image'
import React from 'react'

const Inspiration = () => {
  return (
    <div className='lg:mt-[98px] md:mt-[56px] mt-[48px] mx-[14px] md:mx-[28px] lg:mx-[28px]' >  
        <div className='flex items-center ' >
            <p className='lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] w-[36px] h-[36px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >5</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)] text-[14px] lg:text-[18px] md:text-[18px]' >INSPIRATION</p>        
        </div>

        <div className='lg:mt-[48px] md:mt-[48px] mt-[24px] lg:px-[98px] md:px-[61px] px-[14px] lg:py-[72px] md:py-[72px] py-[24px] bg-[var(--subwhite)] lg:rounded-[28px] md:rounded-[28px] rounded-[18px]' >
            <p className='lg:text-[28px] md:text-[20px] text-[14px] font-[400] text-center ' >Every sport brings a unique challenge—speed, strategy, skill, and endurance. Whether you&apos;re dribbling on the basketball court, scoring goals on the football turf, smashing sixes in cricket, or mastering your serve in tennis, we’ve got the perfect facility for you. Choose your sport, embrace the challenge, and elevate your game.</p>
            <div className='lg:flex md:flex grid grid-cols-3 gap-[8px] items-center justify-center mt-[24px]'  >
                <button className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] lg:px-[27px] md:px-[27px] px-[0px] lg:block md:block flex flex-1 justify-center items-center py-[12px] rounded-[28px] bg-white' >Football</button>
                <button className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] lg:px-[27px] md:px-[27px] px-[0px] lg:block md:block flex flex-1 justify-center items-center py-[12px] rounded-[28px] bg-[var(--orange)] !text-white' >Cricket</button>
                <button className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] lg:px-[27px] md:px-[27px] px-[0px] lg:block md:block flex flex-1 justify-center items-center py-[12px] rounded-[28px] bg-white' >Basketball</button>
                <button className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] lg:px-[27px] md:px-[27px] px-[0px] lg:block md:block flex flex-1 justify-center items-center py-[12px] rounded-[28px] bg-white' >Tennis</button>
                <button className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] lg:px-[27px] md:px-[27px] px-[0px] lg:block md:block flex flex-1 justify-center items-center py-[12px] rounded-[28px] bg-white' >Table Tennis</button>
                <button className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] lg:px-[27px] md:px-[27px] px-[0px] lg:block md:block flex flex-1 justify-center items-center py-[12px] rounded-[28px] bg-white' >Boxing</button>
            </div>

            <div className='mt-[56px] lg:flex md:flex hidden gap-[14px] items-center justify-center' >
                <Image alt='image' src={'/index/Rectangle51.png'} width={240} height={240} className='rounded-[24px] lg:w-[240px] md:w-[189px] ' />
                <Image alt='image' src={'/index/Rectangle52.png'} width={240} height={240} className='rounded-[24px] lg:w-[240px] md:w-[189px]' />
                <Image alt='image' src={'/index/Rectangle53.png'} width={240} height={240} className='rounded-[24px] lg:w-[240px] md:w-[189px]' />
                <Image alt='image' src={'/index/Rectangle54.png'} width={240} height={240} className='rounded-[24px] lg:w-[240px] md:w-[189px]' />
            </div>
        </div>
    </div>
  )
}

export default Inspiration