import React from 'react'

const Payments = () => {
  return (
    <div className='mt-[98px] px-[28px]' >
         <div className='flex items-center ' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >4</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >PAYMENTS & REFUNDS</p>        
        </div>

        <div className='flex flex-col items-center' >
          <p className='text-[56px] font-[500] leading-[64px] text-center mt-[48px] lg:w-[50vw] md:w-[70vw]' >Seamless payments & Hassle-Free refunds</p>
          <p className='text-[18px] font-[400] text-center mt-[24px] lg:w-[70vw] md:w-[85vw]' >Focus on the game, not the transaction! Enjoy secure, fast, and hassle-free payments with multiple options, including UPI, cards, and wallets. Need to cancel? Our smooth refund process ensures quick and easy reimbursements, so you can book with confidence every time.</p>

          <ul className='flex mt-[24px] ' >
            <li><p className='px-[18px] py-[4px] font-[500] text-[14px] rounded-[48px] bg-[var(--subwhite)]' >UPI Payment</p></li>
            <li><p className='px-[18px] py-[4px] font-[500] text-[14px] rounded-[48px] bg-[var(--subwhite)]' >Credit Card</p></li>
            <li><p className='px-[18px] py-[4px] font-[500] text-[14px] rounded-[48px] bg-[var(--orange)] !text-white' >In App Credit</p></li>
          </ul>
        </div>
    </div>
  )
}

export default Payments