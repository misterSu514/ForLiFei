"use client";
import React, { useState } from 'react';
import Link from "next/link";
import SoundImage from '../components/SoundImage';
import SelectStage from '../components/stage/SelectStage';

export default function Home() {

    const [stage,setStage] = useState(1)

    const nextStage = () => {
        let next_stage = stage + 1;
        setStage(next_stage);
    }

    return (
        <div className="flex flex-col container mx-auto w-mobile h-mobile bg-kirbo">
            <div className='flex whitespace-nowrap w-full h-auto justify-center bg-black'>
                <span className='font-mono text-2xl text-ruu font-bold mr-1'>Ruu</span>
                <span className='font-mono text-2xl text-white font-bold'>的</span>
                <span className='font-mono text-2xl text-rose-400 font-bold'>生日</span>
                <span className='font-mono text-2xl text-kirbo font-bold'>大挑戰</span>
            </div>
            {/* 題目區域 */}
            <div className='h-full w-full'>
                <div className='font-mono text-2xl font-bold ml-1 mb-1'> Question {stage} </div>
                <div className='flex items-center justify-center mt-10 h-auto'>
                    <SelectStage stage_idx={stage} nextStage={nextStage}/>
                </div>
                <button onClick={()=>{let new_stage = stage + 1; setStage(new_stage)}}> click</button>
                {/* <SoundImage image={'/image/kirbo.png'} sound={'music/poyo.mp3'} property='w-20 h-20'/> */}
            </div>
        </div>
    );
}
