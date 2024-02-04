// components/ImageWithSound.js
"use client";
import SoundImage from '../SoundImage';
import React, { useState,useEffect,useRef } from 'react';
import { TuiDatePicker } from 'nextjs-tui-date-picker';

export default function Stage5({nextStage=()=>{}}) {
   
    const playSound = (sound='') => {
        const audio = new Audio(sound);
        audio.play();
    };

    const [img_path,setImg] = useState('image/usa_2.jpg')
    

    const InputRef = useRef(null)

    const wrong = ()=>{
        setImg('/image/usa_3.jpg')
        playSound('/music/usagii_huh.mp3')
    }

    const correct = ()=>{
        setImg('/image/usa.jpg')
        playSound('/music/usagii_iyaha.mp3')
    }

      return (
        <div className='flex flex-wrap justify-center'>
            <div className='font-bold font-mono text-lg'>蘇豬豬最喜歡的馬娘腳色是?</div>
            <div className='flex flex-wrap w-full justify-center'>       
                <input type="text" ref={InputRef}  className="mt-2 w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="馬娘" required />
                <img src={img_path} className='mt-4' onClick={()=>{
                    let name = ''
                    if(InputRef.current && InputRef.current['value'])
                        name = InputRef.current['value']
                    if (name == '東海帝王' || name == '東海帝皇')
                        correct();
                    else
                        wrong();
                }}/>
            </div>
            {(img_path == '/image/usa.jpg')?<button className="mt-2 bg-ruu  text-blue-700 font-semibold  py-2 px-4 border border-blue-500 rounded" onClick={nextStage}>
                下一題       
            </button>:<></>}
        </div>
      );
}