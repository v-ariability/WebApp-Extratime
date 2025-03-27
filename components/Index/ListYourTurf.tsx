import React from 'react'

const ListYourTurf = () => {
  return (
    <div className='mt-[98px] mx-[14px] md:mx-[28px] lg:mx-[28px]' >

        <div className='flex items-center ' >
            <p className='lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] w-[36px] h-[36px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >6</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)] lg:text-[18px] md:text-[18px] text-[14px]' >LIST YOUR TURF</p>        
        </div>

        <p className='lg:mt-[48px] md:mt-[48px] mt-[24px] lg:text-[56px] md:text-[56px] text-[28px] lg:leading-[64px] md:leading-[64px] leading-[36px] font-[500] lg:w-[50vw] md:w-[70vw]' >List Your Turf –  Grow Your Business with Ease.</p>
        <p className='lg:mt-[24px] md:mt-[24px] mt-[14px] font-[400] lg:text-[18px] md:text-[18px] text-[14px] lg:w-[75vw] md:w-[80vw]' >Turn your turf into a high-demand sports destination! Our platform helps turf owners boost visibility, attract more bookings, and  manage operations seamlessly. With powerful analytics, easy marketing, secure payments, and automated scheduling, you can  maximize revenue while focusing on delivering the best sports experience</p>

        <div className='mt-[49px] flex flex-col lg:gap-[28px] md:gap-[28px] gap-[14px] lg:flex md:hidden ' >
            <div className='lg:flex md:flex block items-center justify-center gap-[14px]' >
                <div className='flex items-center justify-center gap-[14px]' >
                    <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] flex justify-center items-center px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Analytics & Insights</button>
                    <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] flex flex-1 justify-center items-center px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Marketing & Promotions</button>
                </div>
                <div className='flex items-center justify-center gap-[14px] mt-[12px] lg:mt-[0px] md:mt-[0px]' >
                    <button className='lg:flex md:flex hidden lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Automated Booking Management</button>
                    <button className='lg:flex md:flex hidden lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Secure & Instant Payments</button>
                    <button className='flex lg:hidden md:hidden  justify-center items-center lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Ratings & Reviews</button>
                    <button className='flex lg:hidden md:hidden flex-1 justify-center items-center lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px]  bg-[var(--orange)] !text-white' >Real-Time Notifications</button>
                </div>
            </div>

            <button className='ml-[20%] lg:ml-[0px] md:ml-[0px] flex lg:hidden md:hidden w-fit lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Dynamic Pricing & Discounts</button>
            <button className=' flex lg:hidden md:hidden w-fit lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white' >Automated Booking Management</button>

            <div className='flex lg:hidden md:hidden items-center justify-center gap-[14px]' >
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Location-Based Visibility</button>
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white  ' >Business Dashboard</button>
            </div>

            <button className=' flex lg:hidden md:hidden w-fit lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white' > Multi-Sport Facility Management</button>
            <button className=' flex lg:hidden md:hidden w-fit lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Secure & Instant Payments</button>


            <div className='lg:flex md:flex hidden items-center justify-center gap-[14px]' >
                <div className='lg:flex md:flex hidden items-center justify-center gap-[14px]' >
                    <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Location-Based Visibility</button>
                    <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white  ' >Real-Time Notifications</button>
                </div>
                <div className='flex items-center justify-center gap-[14px]' >
                    <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Dynamic Pricing & Discounts</button>
                    <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white  ' >Multi-Sport Facility Management</button>
                </div>
            </div>
            <div className='lg:flex md:flex hidden items-center justify-center gap-[14px]' >
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Ratings & Reviews</button>
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Business Dashboard</button>
            </div>
        </div>

        <div className='mt-[49px] hidden flex-col gap-[28px] lg:hidden md:flex' >
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Analytics & Insights</button>
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Marketing & Promotions</button>
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Automated Booking Management</button>
            </div>
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Secure & Instant Payments</button>
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px]  bg-[var(--orange)] !text-white  ' >Location-Based Visibility</button>
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]  ' >Real-Time Notifications</button>
            </div>
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px]  bg-[var(--orange)] !text-white' >Ratings & Reviews</button>
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Business Dashboard</button>
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Dynamic Pricing & Discounts</button>
            </div>
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='lg:text-[18px] md:text-[18px] text-[12px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]  w-fit' >Multi-Sport Facility Management</button>
            </div>
        </div>

        <div className='flex items-center justify-center lg:mt-[98px] md:mt-[98px] mt-[24px]' >
            <button className='items-center lg:text-[18px] md:text-[18px] text-[14px] font-[400] px-[47px] py-[12px] rounded-[28px] bg-[var(--foreground))] !text-white ' >LIST YOUR TURF TODAY</button>
        </div>

    </div>
  )
}

export default ListYourTurf