import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center mx-[28px] my-[24px] px-[24px] py-[19px] bg-[#F3F3F3] rounded-[48px]' >

        <div className='flex flex-row gap-[24px] items-center' >
            <p className='text-[24px] font-[600]' >EXTRATIME</p>
            <ul className='flex flex-row gap-[6px] items-center' >
                <li><button className='cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' >HOME</button></li>
                <li><button className='cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' >FACILITIES</button></li>
                <li><button className='cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' >GET THE APP</button></li>
                <li><button className='cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' >CONTACT US</button></li>
            </ul>
        </div>

        <div className='flex gap-[6px]' >
            <button className='cursor-pointer px-[28px] py-[14px] bg-[var(--background)] rounded-[48px]' ><p>MEMBERSHIP</p></button>
            <button className='cursor-pointer px-[28px] py-[14px] bg-[#FD7A49] rounded-[48px]' ><p className='text-[var(--background)]' >TURF OWNERS</p></button>
        </div>

    </div>
  )
}

export default Header