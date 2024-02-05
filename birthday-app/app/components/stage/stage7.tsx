// components/ImageWithSound.js
"use client";
import SoundImage from '../SoundImage';
import React, { useState,useEffect,useRef } from 'react';
import { TuiDatePicker } from 'nextjs-tui-date-picker';

export default function Stage7({nextStage=()=>{}}) {
   
    const playSound = (sound='') => {
        const audio = new Audio(sound);
        audio.play();
    };

    const [img_path,setImg] = useState('image/gold_ship.jpg')
    

    const InputRef = useRef(null)

    const [count,setCount] = useState(0)

    const wrong = ()=>{
        setImg('/image/gold_ship_2.jpg')
        playSound('/music/gold_ship_daijobu.mp3')
    }

    const correct = ()=>{
        setImg('/image/gold_ship_3.jpg')
        playSound('/music/gold_ship_yaru.mp3')
    }

      return (
        <div className='flex flex-wrap justify-center'>
            <div className='font-bold font-mono text-lg'>豬豬嘟嘟默契考驗 !</div>
            <div className='flex flex-wrap w-full justify-center'>       
                <button onClick={wrong} className="bg-blue-500 w-1/3 mr-2  text-white font-bold py-2 px-4 border-b-4 border-blue-700  rounded">
                    嘟嘟豬
                </button>
                <button onClick={wrong} className="bg-orange-500 w-1/3 text-white font-bold py-2 px-4 border-b-4 border-orange-700  rounded">
                    嘟比比
                </button>
                <button onClick={wrong} className="bg-lime-500 w-1/3 mr-2 mt-2 text-white font-bold py-2 px-4 border-b-4 border-lime-700  rounded">
                    豬比豬
                </button>
                <button onClick={correct} className="bg-purple-500 w-1/3 mt-2 text-white font-bold py-2 px-4 border-b-4 border-purple-700  rounded">
                    豬嘟嘟
                </button>
                <button onClick={wrong} className="bg-red-500 w-1/3 mr-2 mt-2 text-white font-bold py-2 px-4 border-b-4 border-red-700  rounded">
                    豬比比
                </button>
                <button onClick={wrong} className="bg-amber-500 w-1/3 mt-2 text-white font-bold py-2 px-4 border-b-4 border-amber-700  rounded">
                    比比嘟
                </button>
                <img src={img_path} className='mt-4 '/>
            </div>
            {(img_path == '/image/gold_ship_3.jpg')?<button className="mt-2 bg-ruu  text-blue-700 font-semibold  py-2 px-4 border border-blue-500 rounded" onClick={nextStage}>
                下一題       
            </button>:<></>}
        </div>
      );
}