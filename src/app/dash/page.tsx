'use client'
import React from 'react'
import Header from '@/components/Index/Header'
import Hero from '@/components/Index/Hero'
import Community from '@/components/Index/Community'
import MatchMaking from '@/components/Index/MatchMaking'
import Faculties from '@/components/Index/Faculties'
import Payments from '@/components/Index/Payments'
import Inspiration from '@/components/Index/Inspiration'
import ListYourTurf from '@/components/Index/ListYourTurf'
import Contact from '@/components/Index/Contact'
import Footor from '@/components/Index/Footor'


const Dash = () => {

  return (
    <div >
        <Header />
        <Hero />
        <Community />
        <MatchMaking />
        <Faculties />
        <Payments />
        <Inspiration />
        <ListYourTurf />
        <Contact />
        <Footor />
    </div>
  )
}

export default Dash