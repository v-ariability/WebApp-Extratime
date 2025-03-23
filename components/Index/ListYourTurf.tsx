import React from 'react'

const ListYourTurf = () => {
  return (
    <div className='mt-[98px] mx-[28px] ' >

        <div className='flex items-center ' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >6</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >LIST YOUR TURF</p>        
        </div>

        <p className='mt-[48px] text-[56px] leading-[64px] font-[500]' >List Your Turf – <br /> Grow Your Business with Ease.</p>
        <p className='mt-[24px] font-[400] text-[18px]' >Turn your turf into a high-demand sports destination! Our platform helps turf owners boost visibility, attract more bookings, and <br /> manage operations seamlessly. With powerful analytics, easy marketing, secure payments, and automated scheduling, you can <br /> maximize revenue while focusing on delivering the best sports experience</p>

        <div className='mt-[49px] flex flex-col gap-[28px]' >
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

        <div className='flex items-center justify-center mt-[98px]' >
            <button className='items-center text-[18px] font-[400] px-[22px] py-[12px] rounded-[28px] bg-[var(--foreground))] !text-white ' >Business Dashboard</button>
        </div>

    </div>
  )
}

export default ListYourTurf