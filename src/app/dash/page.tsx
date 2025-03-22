'use client'
import React from 'react'
import Header from '@/components/Index/Header'
import Hero from '@/components/Index/Hero'
import Community from '@/components/Index/Community'
import MatchMaking from '@/components/Index/MatchMaking'
import Faculties from '@/components/Index/Faculties'
import Payments from '@/components/Index/Payments'


const Dash = () => {

  return (
    <div>
        <Header />
        <Hero />
        <Community />
        <MatchMaking />
        <Faculties />
        <Payments />
    </div>
  )
}

export default Dash