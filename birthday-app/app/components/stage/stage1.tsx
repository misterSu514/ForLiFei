// components/ImageWithSound.js
"use client";
import SoundImage from '../SoundImage';
import React, { useState,useEffect } from 'react';
import { TuiDatePicker } from 'nextjs-tui-date-picker';

export default function Stage1({nextStage=()=>{}}) {
   
    const playSound = (sound='') => {
        const audio = new Audio(sound);
        audio.play();
    };

    const [img_path,setImg] = useState('image/chi3.jpg')
    const [date,setDate] = useState(new Date())

      return (
        <div className='flex flex-wrap justify-center'>
            <div className='font-bold font-mono text-lg'>請問豬豬嘟嘟交往當天的日期?</div>
            <div className='flex flex-wrap w-full justify-center'>
                <TuiDatePicker handleChange={(ans) => {
                    setDate(ans)
                    if(ans == '2023-04-24'){
                        setImg('/image/chi.jpg')
                        playSound('/music/chii_waa.mp3')
                    }else{
                        setImg('/image/chi2.jpg')
                        playSound('/music/chii_iyaiya.mp3')
                    }
                }} date={date} containerWidth={140} inputWidth={130} fontSize={16}/>
                <img src={img_path}/>
            </div>
            {(img_path == '/image/chi.jpg')?<button className="mt-2 bg-ruu  text-blue-700 font-semibold  py-2 px-4 border border-blue-500 rounded" onClick={nextStage}>
                下一題       
            </button>:<></>}
        </div>
      );
}