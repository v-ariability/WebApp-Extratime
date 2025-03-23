import Image from 'next/image'
import React from 'react'

const Inspiration = () => {
  return (
    <div className='mt-[98px] mx-[28px]' >  
        <div className='flex items-center ' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >5</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >INSPIRATION</p>        
        </div>

        <div className='mt-[48px] px-[98px] py-[72px] bg-[var(--subwhite)] rounded-[28px]' >
            <p className='text-[28px] font-[400] text-center' >Every sport brings a unique challenge—speed, strategy, skill, and endurance. Whether you&apos;re dribbling on the basketball court, scoring goals on the football turf, smashing sixes in cricket, or mastering your serve in tennis, we’ve got the perfect facility for you. Choose your sport, embrace the challenge, and elevate your game.</p>
            <div className='flex gap-[8px] items-center justify-center mt-[24px]'  >
                <button className='text-[18px] font-[400] px-[27px] py-[12px] rounded-[28px] bg-white' >Football</button>
                <button className='text-[18px] font-[400] px-[27px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white' >Cricket</button>
                <button className='text-[18px] font-[400] px-[27px] py-[12px] rounded-[28px] bg-white' >Basketball</button>
                <button className='text-[18px] font-[400] px-[27px] py-[12px] rounded-[28px] bg-white' >Tennis</button>
                <button className='text-[18px] font-[400] px-[27px] py-[12px] rounded-[28px] bg-white' >Table Tennis</button>
                <button className='text-[18px] font-[400] px-[27px] py-[12px] rounded-[28px] bg-white' >Boxing</button>
            </div>

            <div className='mt-[56px] flex gap-[14px] items-center justify-center' >
                <Image alt='image' src={'/index/Rectangle51.png'} width={240} height={240} className='rounded-[24px]' />
                <Image alt='image' src={'/index/Rectangle52.png'} width={240} height={240} className='rounded-[24px]' />
                <Image alt='image' src={'/index/Rectangle53.png'} width={240} height={240} className='rounded-[24px]' />
                <Image alt='image' src={'/index/Rectangle54.png'} width={240} height={240} className='rounded-[24px]' />
            </div>
        </div>
    </div>
  )
}

export default Inspiration