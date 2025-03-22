import Image from 'next/image'
import React from 'react'

const MatchMaking = () => {
  return (
    <div className='mt-[98px] mx-[28px]' >
        <div className='flex items-center' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >2</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >FIND A MATCH</p>        
        </div>

        <div className='mt-[48px] flex justify-between items-center' >

            <div  >
                <p className='text-[56px] leading-[64px] font-[500]' >Matchmaking –<br />Play, Connect, Compete</p>
                <p className='text-[16px] font-[400] mt-[32px]' >No team? No problem! Our matchmaking feature helps you find like-minded players <br /> and join exciting matches effortlessly. Whether you&apos;re looking for a friendly game or <br /> serious competition, connect with others and get in the game</p>
                <p className='text-[24px] font-[500] mt-[56px]' >How it works?</p>
                <ul className='flex flex-row gap-[24px] mt-[24px]' >
                    <li><button className='text-[48px] !text-[var(--subwhite)] font-[500] w-[100px] h-[100px] flex justify-center items-center bg-[var(--orange)] rounded-full' >1</button></li>
                    <li><button className='text-[48px] font-[500] w-[100px] h-[100px] flex justify-center items-center bg-[var(--subwhite)] rounded-full' >2</button></li>
                    <li><button className='text-[48px] font-[500] w-[100px] h-[100px] flex justify-center items-center bg-[var(--subwhite)] rounded-full' >3</button></li>
                    <li><button className='text-[48px] font-[500] w-[100px] h-[100px] flex justify-center items-center bg-[var(--subwhite)] rounded-full' >4</button></li>
                </ul>
                <p className='text-[24px] font-[500] mt-[24px]' >Select your sport</p>
                <p className='text-[16px] font-[400] mt-[16px]' >Choose from a variety of sports like football, cricket, basketball, and more. Whether <br /> you&apos;re looking for a casual game or a competitive match, pick your favorite sport and <br /> get started.</p>
            </div>

            <Image alt='matchmaking' src={'/index/Group1.png'} width={543} height={543} />

        </div>
    </div>
  )
}

export default MatchMaking