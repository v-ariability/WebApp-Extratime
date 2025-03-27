import React from 'react'

const Payments = () => {
  return (
    <div className='mt-[98px] mx-[14px] md:mx-[28px] lg:mx-[28px]' >
         <div className='flex items-center ' >
            <p className='lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] w-[36px] h-[36px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >4</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)] text-[14px] lg:text-[18px] md:text-[18px]' >PAYMENTS & REFUNDS</p>        
        </div>

        <div className='flex flex-col items-center' >
          <p className='lg:text-[56px] md:text-[56px] text-[28px] font-[500] lg:leading-[64px] md:leading-[64px] leading-[36px] text-center mt-[48px] lg:w-[50vw] md:w-[70vw]' >Seamless payments & Hassle-Free refunds</p>
          <p className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] text-center mt-[24px] lg:w-[70vw] md:w-[85vw]' >Focus on the game, not the transaction! Enjoy secure, fast, and hassle-free payments with multiple options, including UPI, cards, and wallets. Need to cancel? Our smooth refund process ensures quick and easy reimbursements, so you can book with confidence every time.</p>

          <ul className='flex gap-[8px]  mt-[24px] ' >
            <li><p className='px-[18px] py-[4px] font-[500] lg:text-[14px] md:text-[14px] text-[12px] rounded-[48px] bg-[var(--subwhite)]' >UPI Payment</p></li>
            <li><p className='px-[18px] py-[4px] font-[500] lg:text-[14px] md:text-[14px] text-[12px] rounded-[48px] bg-[var(--subwhite)]' >Credit Card</p></li>
            <li><p className='px-[18px] py-[4px] font-[500] lg:text-[14px] md:text-[14px] text-[12px] rounded-[48px] bg-[var(--orange)] !text-white' >In App Credit</p></li>
          </ul>
        </div>
    </div>
  )
}

export default Payments