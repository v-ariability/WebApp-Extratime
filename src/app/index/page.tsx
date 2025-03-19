'use client'
import React,{useContext} from 'react'
import {AppContext} from '@/context/wrapper'

const Index = () => {

    const {sample} = useContext(AppContext)
  return (
    <div>{sample}</div>
  )
}

export default Index