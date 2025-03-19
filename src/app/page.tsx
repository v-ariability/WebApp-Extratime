'use client'
import React,{useContext} from "react";
import {AppContext} from '@/context/wrapper'
export default function Home() {


  const {sample} = useContext(AppContext)

  return (
    <div>
      {sample}
    </div>
  );
}
