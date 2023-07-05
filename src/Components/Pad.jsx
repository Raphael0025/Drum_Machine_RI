import React, {useState, useEffect} from 'react'
import a1 from '../assets/Heater-1.mp3'
import a2 from '../assets/Heater-2.mp3'
import a3 from '../assets/Heater-3.mp3'
import a4 from '../assets/Heater-4.mp3'
import a5 from '../assets/clap.mp3'
import a6 from '../assets/openHH.mp3'
import a7 from '../assets/Kick_n_Hat.mp3'
import a8 from '../assets/kick.mp3'
import a9 from '../assets/closeHH.mp3'

function Pad({onDataChange, power, volume}) {
    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    const [pressedKey, setPressedKey] = useState(null);
    
    useEffect(() => {
        const elements = document.getElementsByClassName('drum-key');
        if(!power){
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.style.removeProperty('background-color');
            }
        } else {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.style.setProperty('background-color', 'gray')
            }
        }
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });
    
    const playAudio = path => {
        const audio = new Audio(path)
        audio.volume = volume / 100
        audio.play();
    }

    const handleAudio = (event) => {
        if(!power){switch(event.key){
            case 'q':
            case 'Q':
                playAudio(a1)
                break;
            case 'w':
            case 'W':
                playAudio(a2)
                break;
            case 'e':
            case 'E':
                playAudio(a3)
                break;
            case 'a':
            case 'A':
                playAudio(a4)
                break;
            case 's':
            case 'S':
                playAudio(a5)
                break;
            case 'd':
            case 'D':
                playAudio(a6)
                break;
            case 'z':
            case 'Z':
                playAudio(a7)
                break;
            case 'x':
            case 'X':
                playAudio(a8)
                break;
            case 'c':
            case 'C':
                playAudio(a9)
                break;
            default: 
                break;
        }}
    }

    const handleKeyPress = (event) => {
        handleAudio(event)
        setPressedKey(event.key);
        onDataChange(event.key)
        setTimeout(() => {
            setPressedKey(null);
        }, 100); // Adjust the delay time as needed
    };
    
    return (
        <div id='drum-pad' className='col-xl-7 col-lg-7 col-md-7 col-sm-8 d-flex flex-wrap justify-content-center'>
        {keys.map((keyBtn, key) => (
            <button onClick={() => handleKeyPress({ key: keyBtn })} onKeyDown={handleKeyPress} key={key} className={`drum-key ${pressedKey === keyBtn.toLowerCase() || pressedKey === keyBtn ? 'pressed' : ''}`}>{keyBtn}</button>
        ))}
        </div>
    )
}

export default Pad