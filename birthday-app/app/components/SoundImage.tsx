// components/ImageWithSound.js
import React from 'react';


export default function SoundImage({image='',sound='',property=''}) {
    const playSound = () => {
        const audio = new Audio(sound);
        audio.play();
      };
      return (
        <div>
          <img
            src={image}
            alt="Your Image"
            onClick={playSound}
            className={property}
          />
        </div>
      );
}