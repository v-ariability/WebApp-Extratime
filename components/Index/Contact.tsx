import React from 'react'

const Contact = () => {
  return (
    <div className='mt-[98px] mx-[14px] md:mx-[28px] lg:mx-[28px]' >

        <div className='flex items-center ' >
            <p className='lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] w-[36px] h-[36px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >7</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)] lg:text-[18px] md:text-[18px] text-[14px]' >CONTACT</p>        
        </div>

        <div className='lg:mt-[48px] md:mt-[48px] mt-[24px] lg:rounded-[28px] md:rounded-[28px] rounded-[18px] bg-[var(--subwhite)] lg:flex items-center justify-between lg:px-[30px] md:px-[30px] px-[12px] lg:py-[24px] md:py-[24px] py-[14px] md:block' >

            <div className='flex flex-col justify-between' >
                <div>
                    <p className='lg:text-[56px] md:text-[56px] text-[28px] font-[500]' >Contact us</p>
                    <p className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] lg:mt-[24px] md:mt-[24px] mt-[14px]' >Have questions or need assistance? Whether it&apos;s booking inquiries, turf <br /> listings, or general support, our team is ready to assist you. Reach out to <br /> us, and we’ll get back to you as soon as possible</p>
                    <div className='flex lg:block md:block justify-start items-center gap-[24px]' >
                        <p className='lg:text-[18px] md:text-[18px] text-[14px]  font-[400] lg:mt-[24px] md:mt-[24px] mt-[18px] ' >info@extratime.com</p>
                        <p className='lg:text-[18px] md:text-[18px] text-[14px]  font-[400] lg:mt-[16px] md:mt-[16px] mt-[18px] ' >+91 90XXXXXXXX</p>
                    </div>
                </div>
                <div className='lg:block md:flex hidden justify-between items-center md:mt-[132px]' >
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

            <div className='rounded-[18px] bg-white pb-[30px] lg:pt-[24px] md:pt-[24px] pt-[12px] lg:px-[24px] md:px-[24px] px-[14px] mt-[24px] md:mt-[33px] lg:mt-[0px]' >
                <p className='lg:text-[32px] md:text-[32px] text-[18px] font-[500]' >Let’s get in touch</p>

                <div className='lg:mt-[48px] md:mt-[48px] mt-[24px] lg:flex md:flex block lg:justify-between md:justify-start items-center gap-[23px]' >

                    <div className='' >
                        <p className='lg:text-[14px] md:text-[14px] text-[8px] font-[400]' >FIRST NAME <span className='!text-[#ff0000]' >*</span></p>
                        <input className='lg:mt-[8px] md:mt-[8px] mt-[6px] px-[20px] py-[10px] rounded-[12px] bg-[var(--subwhite)] placeholder:text-[12px] flex flex-1 w-[100%] md:w-fit lg:w-fit' type="text" placeholder='Enter your first name' name="" id="" />
                    </div>
 
                    <div className='mt-[20px] lg:mt-[0px] md:mt-[0px]' >
                        <p className='lg:text-[14px] md:text-[14px] text-[8px] font-[400]' >LAST NAME</p>
                        <input className='lg:mt-[8px] md:mt-[8px] mt-[6px] px-[20px] py-[10px] rounded-[12px] bg-[var(--subwhite)] placeholder:text-[12px] flex flex-1 w-[100%] md:w-fit lg:w-fit' type="text" placeholder='Enter your last name' name="" id="" />
                    </div>
 
                </div>

                <div className='mt-[24px] flex flex-1 flex-col' >
                    <p className='lg:text-[14px] md:text-[14px] text-[8px] font-[400]' >EMAIL ADDRESS  <span className='!text-[#ff0000]' >*</span></p>
                    <input className='lg:mt-[8px] md:mt-[8px] mt-[6px] px-[20px] py-[10px] rounded-[12px] bg-[var(--subwhite)] placeholder:text-[12px]  flex flex-1 lg:w-full md:w-[63%]' type="text" placeholder='Enter your email Address' name="" id="" />
                </div>
 
                <div className='mt-[24px] flex flex-1 flex-col' >
                    <p className='lg:text-[14px] md:text-[14px] text-[8px] font-[400]' >YOUR MESSAGE  <span className='!text-[#ff0000]' >*</span></p>
                    <textarea rows={6} className='mt-[8px] px-[20px] py-[10px] rounded-[12px] bg-[var(--subwhite)] placeholder:text-[12px]  flex flex-1' placeholder='Enter your email Address' name="" id="" />
                </div>
                <button className='lg:text-[18px] md:text-[18px] text-[14px] font-[400] px-[27px] py-[12px] rounded-[28px] bg-[var(--orange)] flex flex-1 !text-white w-full text-center justify-center mt-[24px]' >SEND MESSAGE</button>
                <p className='text-center lg:text-[12px] md:text-[12px] text-[8px] !text-[#04040450]  lg:mt-[16px] md:mt-[16px] mt-[6px]' >By contacting us, your agree to our Terms of service and Privacy policy</p>
            </div>

            <div className='lg:hidden md:hidden block justify-between items-center md:mt-[132px] ' >
                <div>
                    <p className='font-[500] lg:text-[18px] md:text-[18px] text-[14px] lg:mt-[36px] md:mt-[36px] mt-[27px]' >Customer Support</p>
                    <p className='lg:text-[14px] md:text-[14px] text-[12px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[6px] lg:w-[75%] md:w-[28vw]' >Need help? Our support team is available  to assist you with bookings, payments,  and any other inquiries.</p>
                </div> 
                <div>
                    <p className='font-[500] lg:text-[18px] md:text-[18px] text-[14px] lg:mt-[36px] md:mt-[36px] mt-[24px]' >Feedback & Suggestions</p>
                    <p className='lg:text-[14px] md:text-[14px] text-[12px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[6px] lg:w-[76%] md:w-[30vw]' >Your opinion matters! Share your feedback and  suggestions to help us improve and  enhance your experience.</p>
                </div> 
                <div>
                    <p className='font-[500] lg:text-[18px] md:text-[18px] text-[14px] lg:mt-[36px] md:mt-[36px] mt-[24px]' >Customer Support</p>
                    <p className='lg:text-[14px] md:text-[14px] text-[12px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[6px] lg:w-[70%] md:w-[26vw]' >Looking to collaborate? Connect with us for business inquiries, sponsorships, or  partnership opportunities.</p>
                </div> 
            </div>

        </div>
    </div>
  )
}

export default Contact