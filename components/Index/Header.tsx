import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center lg:mx-[28px] md:mx-[28px] mx-[14px] mt-[24px] px-[24px] py-[19px] bg-[#F3F3F3] rounded-[48px]' >

        <div className='flex flex-row gap-[24px] items-center' >
            <p className='text-[18px] md:text-[24px] lg:text-[24px] font-[600] tracking-[-5%]' >EXTRATIME</p>
            <ul className='hidden flex-row gap-[6px] items-center lg:flex ' >
                <li><button className='text-[14px] cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' >HOME</button></li>
                <li><button className='text-[14px] cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' >FACILITIES</button></li>
                <li><button className='text-[14px] cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' >GET THE APP</button></li>
                <li><button className='text-[14px] cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' >CONTACT US</button></li>
            </ul>
        </div>

        <div className='hidden gap-[6px] lg:flex md:hidden' >
            <button className='text-[14px] cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' ><p>MEMBERSHIP</p></button>
            <button className='text-[14px] cursor-pointer px-[28px] py-[14px] bg-[#FD7A49] rounded-[48px]' ><p className='!text-[var(--background)]' >TURF OWNERS</p></button>
        </div>

        <button className='bg-[var(--orange)] p-[12] rounded-[8px] lg:hidden ' >
          <Image src={'/index/menu01.png'} width={24} height={24} alt='hamburger' />
        </button>

    </div>
  )
}

export default Header