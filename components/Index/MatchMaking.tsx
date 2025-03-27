import Image from 'next/image'
import React,{useState} from 'react'

const MatchMaking = () => {

    const [current_btn,setCurrent_btn] = useState(1);


  return (
    <div className='mt-[98px] lg:mx-[28px] md:mx-[28px] mx-[14px]' >
        <div className='flex items-center' >
            <p className='lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] w-[36px] h-[36px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >2</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)] text-[14px] lg:text-[18px] md:text-[18px]' >FIND A MATCH</p>        
        </div>

        <div className='mt-[48px] lg:flex md:flex block justify-between items-center' >

            <div  >
                <p className='lg:text-[56px] md:text-[56px] text-[28px] lg:leading-[64px] md:leading-[64px] leading-[36px] font-[500]' >Matchmaking –<br />Play, Connect, Compete</p>
                <p className='lg:text-[16px] md:text-[16px] text-[14px]  font-[400] lg:mt-[32px] md:mt-[32px] mt-[14px]' >No team? No problem! Our matchmaking feature helps you find like-minded players  and join exciting matches effortlessly. Whether you&apos;re looking for a friendly game or  serious competition, connect with others and get in the game.</p>
                <Image className='lg:hidden md:hidden flex' alt='matchmaking' src={'/index/Group1.png'} width={543} height={543} />
                <p className='lg:text-[24px] md:text-[24px] text-[18px] font-[500] lg:mt-[56px] md:mt-[56px] mt-[23px]' >How it works?</p>

                <ul className='flex flex-row lg:gap-[24px] md:gap-[24px] gap-[12px] mt-[24px]' >
                    <li><button onClick={()=>setCurrent_btn(1)} className={`lg:text-[48px] md:text-[48px] text-[20px] ${current_btn == 1 ? "!text-[var(--subwhite)]" : "!text-[var(--sublack)]"} font-[500]  lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] flex justify-center items-center ${current_btn == 1 ? "bg-[var(--orange)]" : "bg-[var(--subwhite)]"}  rounded-full`} >1</button></li>
                    <li><button onClick={()=>setCurrent_btn(2)} className={`lg:text-[48px] md:text-[48px] text-[20px] ${current_btn == 2 ? "!text-[var(--subwhite)]" : "!text-[var(--sublack)]"} font-[500]  lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] flex justify-center items-center ${current_btn == 2 ? "bg-[var(--orange)]" : "bg-[var(--subwhite)]"} rounded-full`} >2</button></li>
                    <li><button onClick={()=>setCurrent_btn(3)} className={`lg:text-[48px] md:text-[48px] text-[20px] ${current_btn == 3 ? "!text-[var(--subwhite)]" : "!text-[var(--sublack)]"} font-[500]  lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] flex justify-center items-center ${current_btn == 3 ? "bg-[var(--orange)]" : "bg-[var(--subwhite)]"} rounded-full`} >3</button></li>
                    <li><button onClick={()=>setCurrent_btn(4)} className={`lg:text-[48px] md:text-[48px] text-[20px] ${current_btn == 4 ? "!text-[var(--subwhite)]" : "!text-[var(--sublack)]"} font-[500]  lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] flex justify-center items-center ${current_btn == 4 ? "bg-[var(--orange)]" : "bg-[var(--subwhite)]"} rounded-full`} >4</button></li>
                </ul>
                {
                    current_btn == 1 ?
                    <div>
                        <p className='lg:text-[24px] md:text-[24px] text-[14px] font-[500] lg:mt-[24px] md:mt-[24px] mt-[18px]' >Select your sport</p>
                        <p className='lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[8px]' >Choose from a variety of sports like football, cricket, basketball, and more. Whether  you&apos;re looking for a casual game or a competitive match, pick your favorite sport and  get started.</p>
                    </div> : current_btn == 2 ?
                    <div>
                        <p className='lg:text-[24px] md:text-[24px] text-[14px] font-[500] lg:mt-[24px] md:mt-[24px] mt-[18px]' >Find or Create a match</p>
                        <p className='lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[8px]' >Explore ongoing matches in your area and join one that fits your schedule, or  create your own match by setting the time, location, and the number of  players needed. Invite friends or let other players join in seamlessly.</p>
                    </div> : current_btn == 3 ?
                    <div>
                        <p className='lg:text-[24px] md:text-[24px] text-[14px] font-[500] lg:mt-[24px] md:mt-[24px] mt-[18px]' >Connect with players</p>
                        <p className='lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[8px]' >Stay connected with your teammates through in-app chat, discuss match  details, and coordinate easily. Get to know new players, build teams, and  enhance your gaming experience with seamless communication.</p>
                    </div> : current_btn == 4 ?
                    <div>
                        <p className='lg:text-[24px] md:text-[24px] text-[14px] font-[500] lg:mt-[24px] md:mt-[24px] mt-[18px]' >Play & Compete</p>
                        <p className='lg:text-[16px] md:text-[16px] text-[14px] font-[400] lg:mt-[16px] md:mt-[16px] mt-[8px]' >Show up at the venue, enjoy a thrilling match, and compete with like-minded  players. Track your match history, earn achievements, and level up  your game as you continue playing.</p>
                    </div> : ''
                }
                
            </div>

            <Image className='hidden lg:flex md:flex' alt='matchmaking' src={'/index/Group1.png'} width={543} height={543} />

        </div>
    </div>
  )
}

export default MatchMaking