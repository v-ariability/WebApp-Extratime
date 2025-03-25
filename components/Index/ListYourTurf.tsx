import React from 'react'

const ListYourTurf = () => {
  return (
    <div className='mt-[98px] mx-[28px] ' >

        <div className='flex items-center ' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >6</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >LIST YOUR TURF</p>        
        </div>

        <p className='mt-[48px] text-[56px] leading-[64px] font-[500] lg:w-[50vw] md:w-[70vw]' >List Your Turf –  Grow Your Business with Ease.</p>
        <p className='mt-[24px] font-[400] text-[18px] lg:w-[75vw] md:w-[80vw]' >Turn your turf into a high-demand sports destination! Our platform helps turf owners boost visibility, attract more bookings, and  manage operations seamlessly. With powerful analytics, easy marketing, secure payments, and automated scheduling, you can  maximize revenue while focusing on delivering the best sports experience</p>

        <div className='mt-[49px] flex flex-col gap-[28px] lg:flex md:hidden' >
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Analytics & Insights</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Marketing & Promotions</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Automated Booking Management</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Secure & Instant Payments</button>
            </div>
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Location-Based Visibility</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white  ' >Real-Time Notifications</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Dynamic Pricing & Discounts</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white  ' >Multi-Sport Facility Management</button>
            </div>
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Ratings & Reviews</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Business Dashboard</button>
            </div>
        </div>

        <div className='mt-[49px] flex flex-col gap-[28px] lg:hidden md:flex' >
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Analytics & Insights</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Marketing & Promotions</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Automated Booking Management</button>
            </div>
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >Secure & Instant Payments</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px]  bg-[var(--orange)] !text-white  ' >Location-Based Visibility</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]  ' >Real-Time Notifications</button>
            </div>
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px]  bg-[var(--orange)] !text-white' >Ratings & Reviews</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)] ' >Business Dashboard</button>
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--orange)] !text-white ' >Dynamic Pricing & Discounts</button>
            </div>
            <div className='flex items-center justify-center gap-[14px]' >
                <button className='text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--subwhite)]  w-fit' >Multi-Sport Facility Management</button>
            </div>
        </div>

        <div className='flex items-center justify-center mt-[98px]' >
            <button className='items-center text-[18px] font-[400] px-[47px] py-[12px] rounded-[28px] bg-[var(--foreground))] !text-white ' >LIST YOUR TURF TODAY</button>
        </div>

    </div>
  )
}

export default ListYourTurf