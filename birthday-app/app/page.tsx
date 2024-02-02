"use client";
import React, { useState } from 'react';
import Link from "next/link";

export default function Home() {


  const [ready,setReady] = useState(false)

  const playSound = () => {
    const audio = new Audio('/music/poyo.mp3');
    audio.play();
  };

  return (
    <div className="flex flex-col container mx-auto w-mobile h-mobile bg-kirbo">
      <div className='flex w-full h-full items-center justify-center flex-wrap'>      
        {ready?<img src='/image/logo.png' className='ml-2'/>:<div className='font-mono text-2xl'>Click the Kirbo</div>}
        <div className='relative inline-block'>
          {ready?<Link href='/game'><img src='/image/kirbohappy.png' className='w-72 h-60' onClick={()=>{playSound()}}/></Link>:<img src='/image/kirbo.png' className='w-72 h-72' onClick={()=>{playSound();setReady(true)}}/>}
          {/* <Link href='/game' className='text-center z-10 font-mono text-lg absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-10 border border-orange-700 bg-neutral-400'>START</Link> */}
        </div>
      </div>
    </div>
  );
}
