// components/ImageWithSound.js
"use client";
import SoundImage from '../SoundImage';
import React, { useState,useEffect } from 'react';
import { TuiDatePicker } from 'nextjs-tui-date-picker';

export default function Stage4({nextStage=()=>{}}) {
   
    const playSound = (sound='') => {
        const audio = new Audio(sound);
        audio.play();
    };

    const [img_path,setImg] = useState('image/hachi.jpg')
  

    const wrong = ()=>{
        setImg('/image/hachi_2.jpg')
        playSound('/music/hachi_shibai.mp3')
    }

    const correct = ()=>{
        setImg('/image/hachi_3.jpg')
        playSound('/music/hachi_saiko.mp3')
    }

      return (
        <div className='flex flex-wrap justify-center'>
            <div className='font-bold font-mono text-lg'>豬嘟目前一起看過幾次電影?</div>
            <div className='flex flex-wrap w-full justify-center'>       
                <button onClick={wrong} className="bg-blue-500 w-1/3 mr-2  text-white font-bold py-2 px-4 border-b-4 border-blue-700  rounded">
                    3次
                </button>
                <button onClick={wrong} className="bg-orange-500 w-1/3 text-white font-bold py-2 px-4 border-b-4 border-orange-700  rounded">
                    4次
                </button>
                <button onClick={wrong} className="bg-lime-500 w-1/3 mr-2 mt-2 text-white font-bold py-2 px-4 border-b-4 border-lime-700  rounded">
                    5次
                </button>
                <button onClick={correct} className="bg-purple-500 w-1/3 mt-2 text-white font-bold py-2 px-4 border-b-4 border-purple-700  rounded">
                    6次
                </button>
                <img src={img_path} className='mt-4' onClick={()=>{if(img_path == '/image/hachi_3.jpg')alert('馬力歐 藍色巨星 蜘蛛人 小行星城 犬之島 二分之一的魔法')}}/>
            </div>
            {(img_path == '/image/hachi_3.jpg')?<button className="mt-2 bg-ruu  text-blue-700 font-semibold  py-2 px-4 border border-blue-500 rounded" onClick={nextStage}>
                下一題       
            </button>:<></>}
        </div>
      );
}