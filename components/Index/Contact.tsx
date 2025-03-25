import React from 'react'

const Contact = () => {
  return (
    <div className='mt-[50px] mx-[28px]' >

        <div className='flex items-center ' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >7</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >CONTACT</p>        
        </div>

        <div className='mt-[48px] rounded-[28px] bg-[var(--subwhite)] lg:flex items-center justify-between px-[30px] py-[24px] md:block' >

            <div className='flex flex-col justify-between' >
                <div>
                    <p className='text-[56px] font-[500]' >Contact us</p>
                    <p className='text-[18px] font-[400] mt-[24px]' >Have questions or need assistance? Whether it&apos;s booking inquiries, turf <br /> listings, or general support, our team is ready to assist you. Reach out to <br /> us, and we’ll get back to you as soon as possible</p>
                    <p className='text-[18px] font-[400] mt-[24px]' >info@extratime.com</p>
                    <p className='text-[18px] font-[400] mt-[16px]' >+91 90XXXXXXXX</p>
                </div>
                <div className='lg:block md:flex justify-between items-center md:mt-[132px]' >
                    <div className='flex justify-between items-center flex-1' >
                        <div>
                            <p className='font-[500] text-[18px] mt-[36px]' >Customer Support</p>
                            <p className='text-[14px] font-[400] mt-[16px] lg:w-[75%] md:w-[28vw]' >Need help? Our support team is available  to assist you with bookings, payments,  and any other inquiries.</p>
                        </div> 
                        <div>
                            <p className='font-[500] text-[18px] mt-[36px]' >Feedback & Suggestions</p>
                            <p className='text-[14px] font-[400] mt-[16px] lg:w-[76%] md:w-[30vw]' >Your opinion matters! Share your feedback and  suggestions to help us improve and  enhance your experience.</p>
                        </div> 
                    </div>
                    <div>
                        <p className='font-[500] text-[18px] mt-[36px]' >Customer Support</p>
                        <p className='text-[14px] font-[400] mt-[16px] lg:w-[70%] md:w-[26vw]' >Looking to collaborate? Connect with us for business inquiries, sponsorships, or  partnership opportunities.</p>
                    </div> 
                </div>
            </div>

            <div className='rounded-[18px] bg-white pb-[30px] pt-[24px] px-[24px] md:mt-[33px] lg:mt-[0px]' >
                <p className='text-[32px] font-[500]' >Let’s get in touch</p>

                <div className='mt-[48px] flex lg:justify-between md:justify-start items-center gap-[23px]' >

                    <div className='' >
                        <p className='text-[14px] font-[400]' >FIRST NAME <span className='!text-[#ff0000]' >*</span></p>
                        <input className='mt-[8px] px-[20px] py-[10px] rounded-[12px] bg-[var(--subwhite)] placeholder:text-[12px]' type="text" placeholder='Enter your first name' name="" id="" />
                    </div>

                    <div className='' >
                        <p className='text-[14px] font-[400]' >LAST NAME</p>
                        <input className='mt-[8px] px-[20px] py-[10px] rounded-[12px] bg-[var(--subwhite)] placeholder:text-[12px] ' type="text" placeholder='Enter your last name' name="" id="" />
                    </div>

                </div>

                <div className='mt-[24px] flex flex-1 flex-col' >
                    <p className='text-[14px] font-[400]' >EMAIL ADDRESS * <span className='!text-[#ff0000]' >*</span></p>
                    <input className='mt-[8px] px-[20px] py-[10px] rounded-[12px] bg-[var(--subwhite)] placeholder:text-[12px]  flex flex-1 lg:w-full md:w-[63%]' type="text" placeholder='Enter your email Address' name="" id="" />
                </div>

                <div className='mt-[24px] flex flex-1 flex-col' >
                    <p className='text-[14px] font-[400]' >EMAIL ADDRESS * <span className='!text-[#ff0000]' >*</span></p>
                    <textarea rows={6} className='mt-[8px] px-[20px] py-[10px] rounded-[12px] bg-[var(--subwhite)] placeholder:text-[12px]  flex flex-1' placeholder='Enter your email Address' name="" id="" />
                </div>
                <button className='text-[18px] font-[400] px-[27px] py-[12px] rounded-[28px] bg-[var(--orange)] flex flex-1 !text-white w-full text-center justify-center mt-[24px]' >SEND MESSAGE</button>
                <p className='text-center text-[12px] !text-[#04040450]  mt-[16px] ' >By contacting us, your agree to our Terms of service and Privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default Contact