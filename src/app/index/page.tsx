'use client'
import React,{useContext} from 'react'
import {AppContext} from '@/context/wrapper'
import Header from '@/components/Index/Header'
import Hero from '@/components/Index/Hero'


const Index = () => {

    const {sample} = useContext(AppContext)
  return (
    <div>
        <Header />
        <Hero />
    </div>
  )
}

export default Index