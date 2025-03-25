import Image from 'next/image'
import React,{useState} from 'react'

const MatchMaking = () => {

    const [current_btn,setCurrent_btn] = useState(1);


  return (
    <div className='mt-[98px] mx-[28px]' >
        <div className='flex items-center' >
            <p className='w-[48px] h-[48px] flex justify-center items-center bg-[#040404] !text-[var(--background)] rounded-full' >2</p>        
            <p className='px-[24px] py-[12px] rounded-[28px] bg-[var(--subwhite)]' >FIND A MATCH</p>        
        </div>

        <div className='mt-[48px] flex justify-between items-center' >

            <div  >
                <p className='text-[56px] leading-[64px] font-[500]' >Matchmaking –<br />Play, Connect, Compete</p>
                <p className='text-[16px] font-[400] mt-[32px]' >No team? No problem! Our matchmaking feature helps you find like-minded players <br /> and join exciting matches effortlessly. Whether you&apos;re looking for a friendly game or <br /> serious competition, connect with others and get in the game.</p>
                <p className='text-[24px] font-[500] mt-[56px]' >How it works?</p>
                <ul className='flex flex-row gap-[24px] mt-[24px]' >
                    <li><button onClick={()=>setCurrent_btn(1)} className={`text-[48px] ${current_btn == 1 ? "!text-[var(--subwhite)]" : "!text-[var(--sublack)]"} font-[500] w-[100px] h-[100px] flex justify-center items-center ${current_btn == 1 ? "bg-[var(--orange)]" : "bg-[var(--subwhite)]"}  rounded-full`} >1</button></li>
                    <li><button onClick={()=>setCurrent_btn(2)} className={`text-[48px] ${current_btn == 2 ? "!text-[var(--subwhite)]" : "!text-[var(--sublack)]"} font-[500] w-[100px] h-[100px] flex justify-center items-center ${current_btn == 2 ? "bg-[var(--orange)]" : "bg-[var(--subwhite)]"} rounded-full`} >2</button></li>
                    <li><button onClick={()=>setCurrent_btn(3)} className={`text-[48px] ${current_btn == 3 ? "!text-[var(--subwhite)]" : "!text-[var(--sublack)]"} font-[500] w-[100px] h-[100px] flex justify-center items-center ${current_btn == 3 ? "bg-[var(--orange)]" : "bg-[var(--subwhite)]"} rounded-full`} >3</button></li>
                    <li><button onClick={()=>setCurrent_btn(4)} className={`text-[48px] ${current_btn == 4 ? "!text-[var(--subwhite)]" : "!text-[var(--sublack)]"} font-[500] w-[100px] h-[100px] flex justify-center items-center ${current_btn == 4 ? "bg-[var(--orange)]" : "bg-[var(--subwhite)]"} rounded-full`} >4</button></li>
                </ul>
                {
                    current_btn == 1 ?
                    <div>
                        <p className='text-[24px] font-[500] mt-[24px]' >Select your sport</p>
                        <p className='text-[16px] font-[400] mt-[16px]' >Choose from a variety of sports like football, cricket, basketball, and more. Whether <br /> you&apos;re looking for a casual game or a competitive match, pick your favorite sport and <br /> get started.</p>
                    </div> : current_btn == 2 ?
                    <div>
                        <p className='text-[24px] font-[500] mt-[24px]' >Find or Create a match</p>
                        <p className='text-[16px] font-[400] mt-[16px]' >Explore ongoing matches in your area and join one that fits your schedule, or <br /> create your own match by setting the time, location, and the number of <br /> players needed. Invite friends or let other players join in seamlessly.</p>
                    </div> : current_btn == 3 ?
                    <div>
                        <p className='text-[24px] font-[500] mt-[24px]' >Connect with players</p>
                        <p className='text-[16px] font-[400] mt-[16px]' >Stay connected with your teammates through in-app chat, discuss match <br /> details, and coordinate easily. Get to know new players, build teams, and <br /> enhance your gaming experience with seamless communication.</p>
                    </div> : current_btn == 4 ?
                    <div>
                        <p className='text-[24px] font-[500] mt-[24px]' >Play & Compete</p>
                        <p className='text-[16px] font-[400] mt-[16px]' >Show up at the venue, enjoy a thrilling match, and compete with like-minded <br /> players. Track your match history, earn achievements, and level up <br /> your game as you continue playing.</p>
                    </div> : ''
                }
                
            </div>

            <Image alt='matchmaking' src={'/index/Group1.png'} width={543} height={543} />

        </div>
    </div>
  )
}

export default MatchMaking