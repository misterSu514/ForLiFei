// components/ImageWithSound.js
"use client";
import SoundImage from '../SoundImage';
import React, { useState,useEffect } from 'react';

export default function Stage2({nextStage=()=>{}}) {
   
    const playSound = (sound='') => {
        const audio = new Audio(sound);
        audio.play();
    };

    const [img_path,setImg] = useState('image/chi3.jpg')


    const wrong = ()=>{
        setImg('/image/chi2.jpg')
        playSound('/music/chii_iyaiya.mp3')
    }

    const correct = ()=>{
        setImg('/image/chi.jpg')
        playSound('/music/chii_waa.mp3')
    }

      return (
        <div className='flex flex-wrap justify-center'>
            <div className='font-bold font-mono text-lg'>請問哪張是告白當天的照片?</div>
            <div className='flex flex-wrap w-full justify-center'>       
                <img src='/image/stage2_2.jpg' className='w-1/3 ' onClick={correct}/>
                <img src='/image/stage2_3.jpg' className='w-1/2 ' onClick={wrong}/>
                <img src='/image/stage2_1.jpg' className='w-1/3 ' onClick={wrong}/>
                <img src='/image/stage2_4.jpg' className='w-1/2 ' onClick={wrong}/>
                <img src={img_path} className='w-40'/>
            </div>
            {(img_path == '/image/chi.jpg')?<button className="mt-2 bg-ruu  text-blue-700 font-semibold  py-2 px-4 border border-blue-500 rounded" onClick={nextStage}>
                下一題       
            </button>:<></>}
        </div>
      );
}