import Image from 'next/image'
import React from 'react'

const Community = () => {
  return (
    <div className='mx-[14px] md:mx-[28px] lg:mx-[28px] mt-[98px]' >

        <div className='flex items-center' >
            <p className=' lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] w-[36px] h-[36px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >1</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)] text-[14px] lg:text-[18px] md:text-[18px]' >COMMUNITY</p>        
        </div>

        <div className='md:flex lg:flex justify-between items-center' >

            <div>
                <p className='text-[var(--sublack)] lg:text-[56px] md:text-[56px] text-[28px] lg:leading-[64px] md:leading-[64px] leading-[36px] font-[500] mt-[48px] w-[80%] ' >Powered by players, Built for  the community</p>
                <ul className='lg:flex md:flex grid grid-cols-2 gap-[12px] mt-[32px]' >
                    <li><p className='px-[12px] py-[4px] text-[14px] font-[500] rounded-[48px] bg-[var(--orange)] !text-[var(--background)]' >Milestone Badges</p></li>
                    <li><p className='px-[12px] py-[4px] text-[14px] font-[500] rounded-[48px] bg-[var(--subwhite)]' >Progress Tracking</p></li>
                    <li><p className='px-[12px] py-[4px] text-[14px] font-[500] rounded-[48px] bg-[var(--subwhite)]' >Find Partner</p></li>
                </ul>
                <p className='text-[var(--sublack)] mt-[16px] lg:text-[16px] md:text-[16px] text-[14px] w-[85%] font-[400]' >Join a thriving community of sports enthusiasts! Connect with like-minded players, create or join matches, share experiences, and compete on leaderboards. Track your progress, earn badges, and celebrate every achievement as you level up your game. Whether you&apos;re in it for a friendly match or serious competition, this is where the sports community comes alive—because every match counts, and every milestone matters.</p>
            </div>

            <div className='md:hidden lg:block block' >
                <p className='!text-[#04040420] text-[208px] font-[500] text-right' >1K+</p>
                <p className='lg:text-right md:text-right text-center text-[var(--sublack)] text-[14px] font-[400] ' >Join a growing community of <span className='font-[500]' >active players</span> across all our top-tier sports facilities. With thousands of athletes booking matches, competing, and connecting every day, you&apos;re never far from your next great game.</p>
            </div>

        </div>

        <div className='mt-[48px] block lg:block md:hidden' >
            <p className='lg:text-[24px] text-[18px]' >Active Members</p>
            <ul className='mt-[14px] lg:mt-[36px] flex gap-[14px] lg:gap-[24px]' >
                <li><Image className='w-[50px] h-[50px] lg:w-[150px] lg:h-[150px]' alt='Eclipse' src={'/index/Ellipse1.png'} width={150} height={150} /></li>
                <li><Image className='w-[50px] h-[50px] lg:w-[150px] lg:h-[150px]' alt='Eclipse' src={'/index/Ellipse2.png'} width={150} height={150} /></li>
                <li><Image className='w-[50px] h-[50px] lg:w-[150px] lg:h-[150px]' alt='Eclipse' src={'/index/Ellipse3.png'} width={150} height={150} /></li>
                <li><Image className='w-[50px] h-[50px] lg:w-[150px] lg:h-[150px]' alt='Eclipse' src={'/index/Ellipse4.png'} width={150} height={150} /></li>
                <li className='!text-[var(--orange)] text-[12px] lg:text-[28px] font-[500] w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] flex justify-center items-center bg-[var(--subwhite)] rounded-full' >You?</li>
            </ul>
        </div>

        <div className='lg:hidden md:flex hidden justify-between items-center' >
            <div className='mt-[48px] hidden lg:hidden md:flex flex-col ' >
                <p className='text-[24px] ' >Active Members</p>
                <ul className='mt-[28px] flex gap-[16px] flex-col' >
                    <div className='flex gap-[24px]' >
                        <li><Image alt='Eclipse' src={'/index/Ellipse1.png'} width={100} height={100} /></li>
                        <li><Image alt='Eclipse' src={'/index/Ellipse2.png'} width={100} height={100} /></li>
                    </div>
                    <div className='flex gap-[24px] flex-1 w-[45vw]' >
                        <li><Image alt='Eclipse' src={'/index/Ellipse3.png'} width={100} height={100} /></li>
                        <li><Image alt='Eclipse' src={'/index/Ellipse4.png'} width={100} height={100} /></li>
                        <li className='!text-[var(--orange)] text-[16px] font-[500] w-[100px] h-[100px] flex justify-center items-center bg-[var(--subwhite)] rounded-full' >You?</li>
                    </div>
                </ul>
            </div>

            <div className='lg:hidden md:flex flex-col justify-end items-end' >
                <p className='!text-[#04040420] text-[188px] font-[500] text-right' >1K+</p>
                <p className='text-right text-[var(--sublack)] text-[14px] font-[400] mt-[-30px] md:w-[100%]' >Join a growing community of <span className='font-[500]' >active players</span> across all our top-tier sports facilities. With thousands of athletes booking matches, competing, and connecting every day, you&apos;re never far from your next great game.</p>
            </div>
        </div>

        <div className='lg:mt-[48px] md:mt-[48px] mt-[24px] flex flex-col justify-center items-center' >
            <p className='text-center  lg:text-[32px] md:text-[32px] text-[18px] font-[500]' >Build champions on & off courts</p>
            <p className='text-center lg:mt-[24px] md:mt-[24px] mt-[14px] text-[14px] lg:text-[18px] md:text-[18px] lg:w-[55%] md:w-[70%] w-[95%]' >Great athletes are made through dedication and the right environment. Our top-tier facilities provide the perfect space to sharpen your skills, compete at your best, and grow as a champion—both on and off the field.</p>
            <p className='text-center lg:mt-[36px] md:mt-[36px] mt-[24px] !text-[var(--background)] bg-[var(--sublack)] rounded-[28px] px-[75px] py-[12px] w-fit text-[14px] lg:text-[18px] md:text-[18px] ' >JOIN THE CLUB</p>
        </div> 

        
    </div>
  )
}

export default Community