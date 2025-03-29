import React,{useContext} from 'react'
import { AppContext } from '@/context/wrapper'

const Navbar = () => {
 
    const{navbar,setNavbar} = useContext(AppContext)

  return ( 
    <div className={`
                    ${navbar ? "w-screen" : "w-0"} bg-[#04040433] fixed top-0 left-0 z-20
                    transition-all duration-300 ease-in-out`} >
        <button onClick={()=>setNavbar(false)} className='h-screen  w-[100%]' ></button>
        <div 
        className={`
            flex 
            flex-col
            lg:hidden 
            fixed 
            top-0
            md:px-[28px]
            md:pt-[48px]
            md:pb-[12px]
            px-[14px]
            pt-[48px]
            pb-[12px]
            bg-[var(--subwhite)] 
            h-screen 
            md:w-[40%]
            w-[80%]
            justify-between 
            transition-all duration-300 ease-in-out
            ${navbar ? "right-0" : "-right-full"}
            `} >
        <div className='flex flex-col gap-[16px]' >
            <button className='px-[28px] py-[14px] rounded-[48px] bg-white w-fit text-[14px]' >HOME</button>
            <button className='px-[28px] py-[14px] rounded-[48px] bg-white w-fit text-[14px]' >FACILITIES</button>
            <button className='px-[28px] py-[14px] rounded-[48px] bg-white w-fit text-[14px]' >GET THE APP</button>
            <button className='px-[28px] py-[14px] rounded-[48px] bg-white w-fit text-[14px]' >CONTACT US</button>
            <button className='px-[28px] py-[14px] rounded-[48px] bg-white w-fit text-[14px]' >MEMBERSHIP</button>
            <button className='px-[28px] py-[14px] rounded-[48px] bg-[var(--orange)] w-fit text-[14px] !text-white' >TURF OWNERS</button>
        </div>
        <div>
            <p className='!text-[#04040480] md:text-[14px] text-[12px] font-[500]' >© EXTRATIME</p>
            <div className='flex md:gap-[16px] justify-between' >
                <p className='!text-[#04040480]  md:text-[14px] text-[12px] font-[500]' >Terms & Conditions</p>
                <p className='!text-[#04040480]  md:text-[14px] text-[12px] font-[500]' >Privacy Policy</p>
                <p className='!text-[#04040480]  md:text-[14px] text-[12px] font-[500]' >Cookies</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar