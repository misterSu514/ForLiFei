"use client";
import React, { useState } from 'react';
import Link from "next/link";
import SoundImage from '../components/SoundImage';
import SelectStage from '../components/stage/SelectStage';

export default function Home() {

    const [stage,setStage] = useState(1)
    const [info,setInfo] = useState(0)


    const nextStage = () => {
        let next_stage = stage + 1;
        setStage(next_stage);
    }

    const hiddenAns = ()=>{
        if(stage == 8){
            let tmp = info + 1
            setInfo(tmp)
        }
    }

    return (
        <div className={ ((stage <= 6)?'bg-kirbo':'bg-ruu') + " flex flex-col container mx-auto w-mobile h-mobile"}>
            <div className='flex whitespace-nowrap w-full h-auto justify-center bg-black'>
                <span className='font-mono text-2xl text-ruu font-bold mr-1' onClick={hiddenAns}>Ruu</span>
                <span className='font-mono text-2xl text-white font-bold'>的</span>
                <span className='font-mono text-2xl text-rose-400 font-bold'>生日</span>
                <span className='font-mono text-2xl text-kirbo font-bold'>大挑戰</span>
            </div>
            {/* 題目區域 */}
            <div className='h-full w-full'>
                {(stage <= 8)?<div className='font-mono text-2xl font-bold ml-1 mb-1'> Question {stage} </div>:<></>}
                <div className='flex items-center justify-center mt-2 h-auto'>
                    <SelectStage stage_idx={stage} nextStage={nextStage} info={info}/>
                    {(stage <= 8)?<></>:
                    <div className='flex flex-wrap justify-center'>
                        <div className='font-mono text-2xl font-bold'>翁立霏豬豬生日快樂 !</div>
                        <div className='font-mono text-base font-bold'>不知不覺就快交往一年了</div>
                        <div className='font-mono text-base font-bold'>這期間發生了很多很多事情</div>
                        <div className='font-mono text-base font-bold'>我們一起出遊，一起聊八卦</div>
                        <div className='font-mono text-base font-bold'>一起分享內心深處的秘密</div>
                        <div className='font-mono text-base font-bold'>做為一個男友，我可能還不夠稱職</div>
                        <div className='font-mono text-base font-bold'>還是太幼稚，太像小孩了一點</div>
                        <div className='font-mono text-base font-bold'>出去玩時很多事情都是你一手包辦的</div>
                        <div className='font-mono text-base font-bold'>很感謝妳願意包容這樣不成熟的我</div>
                        <div className='font-mono text-base font-bold'>或許我不會馬上變得成熟可靠</div>
                        <div className='font-mono text-base font-bold'>但我會持續改變，慢慢變成一個更好的人</div>
                        <div className='font-mono text-base font-bold'>讓自己配得上更好的你</div>
                        <div className='font-mono text-base font-bold'>最後 再祝霏豬豬生日快樂 ! 祝你開心一整年</div>
                        <img src='image/fei.png' className='w-1/2'/>
                        <img src='image/kirbo.png' className='w-1/2'/>
                    </div>}
                </div>
                {/* <button onClick={()=>{let new_stage = stage + 1; setStage(new_stage)}}> click</button>
                <button onClick={()=>{setStage(9)}} className='ml-5'> skip</button>
                 */}
                {/* <SoundImage image={'/image/kirbo.png'} sound={'music/poyo.mp3'} property='w-20 h-20'/> */}
            </div>
        </div>
    );
}
