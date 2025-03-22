import Image from 'next/image'
import React from 'react'

const Community = () => {
  return (
    <div className='mx-[28px] mt-[98px]' >

        <div className='flex items-center' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >1</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >COMMUNITY</p>        
        </div>

        <div className='flex justify-between items-center' >

            <div>
                <p className='text-[var(--sublack)] text-[56px] leading-[64px] font-[500] mt-[48px]' >Powered by players, Built for <br /> the community</p>
                <ul className='flex gap-[12px] mt-[32px]' >
                    <li><p className='px-[12px] py-[4px] text-[14px] font-[500] rounded-[48px] bg-[var(--orange)] !text-[var(--background)]' >Milestone Badges</p></li>
                    <li><p className='px-[12px] py-[4px] text-[14px] font-[500] rounded-[48px] bg-[var(--subwhite)]' >Progress Tracking</p></li>
                    <li><p className='px-[12px] py-[4px] text-[14px] font-[500] rounded-[48px] bg-[var(--subwhite)]' >Find Partner</p></li>
                </ul>
                <p className='text-[var(--sublack)] mt-[16px] text-[16px] font-[400]' >Join a thriving community of sports enthusiasts! Connect with like-minded players, <br /> create or join matches, share experiences, and compete on leaderboards. Track your <br /> progress, earn badges, and celebrate every achievement as you level up your game. <br /> Whether you&apos;re in it for a friendly match or serious competition, this is where the sports <br /> community comes alive—because every match counts, and every milestone matters.</p>
            </div>

            <div>
                <p className='!text-[#04040420] text-[208px] font-[500] text-right' >1K+</p>
                <p className='text-right text-[var(--sublack)] text-[14px] font-[400]' >Join a growing community of <span className='font-[500]' >active players</span> across all our top-tier <br /> sports facilities. With thousands of athletes booking matches, <br /> competing, and connecting every day, you&apos;re never far from your <br /> next great game.</p>
            </div>

        </div>

        <div className='mt-[48px]' >
            <p className='text-[24px] text-[]' >Active Members</p>
            <ul className='mt-[36px] flex gap-[24px]' >
                <li><Image alt='Eclipse' src={'/index/Ellipse1.png'} width={150} height={150} /></li>
                <li><Image alt='Eclipse' src={'/index/Ellipse2.png'} width={150} height={150} /></li>
                <li><Image alt='Eclipse' src={'/index/Ellipse3.png'} width={150} height={150} /></li>
                <li><Image alt='Eclipse' src={'/index/Ellipse4.png'} width={150} height={150} /></li>
                <li className='!text-[var(--orange)] text-[28px] font-[500] w-[150px] h-[150px] flex justify-center items-center bg-[var(--subwhite)] rounded-full' >You?</li>
            </ul>
        </div>

        <div className='mt-[48px] flex flex-col justify-center items-center' >
            <p className='text-center text-[32px] font-[500]' >Build champions on & off courts</p>
            <p className='text-center mt-[24px]' >Great athletes are made through dedication and the right environment. Our top-tier facilities provide the perfect space <br /> to sharpen your skills, compete at your best, and grow as a champion—both on and off the field.</p>
            <p className='text-center mt-[36px] !text-[var(--background)] bg-[var(--sublack)] rounded-[28px] px-[75px] py-[12px] w-fit' >JOIN THE CLUB</p>
        </div>
    </div>
  )
}

export default Community