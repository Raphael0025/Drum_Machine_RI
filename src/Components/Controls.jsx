import React, {useState, useEffect} from 'react'

function Controls({onPowerChange, onVolumeChange, data}) {
    const [volume, setVolume] = useState(30);
    const [label, setLabel] = useState('')
    const [power, setPower] = useState(true)

    const renderLabel = (data) => {
        switch(data){
            case 'q':
            case 'Q':
                setLabel('Heater 1')
                break;
            case 'w':
            case 'W':
                setLabel("Heater 2")
                break;
            case 'e':
            case 'E':
                setLabel('Heater 3')
                break;
            case 'a':
            case 'A':
                setLabel("Heater 4")
                break;
            case 's':
            case 'S':
                setLabel('Clap')
                break;
            case 'd':
            case 'D':
                setLabel('Open HH')
                break;
            case 'z':
            case 'Z':
                setLabel('Kick n` Hat')
                break;
            case 'x':
            case 'X':
                setLabel('Kick')
                break;
            case 'c':
            case 'C':
                setLabel('Closed HH')
                break;
            default: 
                break;
        }
    }

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        setLabel(`Volume: ${newVolume}`);
        setTimeout(() => {
            setLabel('');
        }, 2000);
        onVolumeChange(volume)
    };
    
    const handlePower = () => {
        const element = document.getElementById('power')
        const styles = window.getComputedStyle(element)
        const floatProp = styles.getPropertyValue('float')
        if(floatProp === 'right'){
            element.style.removeProperty('float')
            setPower(false)
        } else {
            element.style.setProperty('float', 'right')
            setPower(true)
        }
        onPowerChange(power)
    }
    useEffect(() => {
        onVolumeChange(volume)
    }, [volume]);
    useEffect(() => {
        renderLabel(data);
    }, [data]);
    
    return (
        <div id='control-pad' className='col'>
            <p className='lab'>Power</p>
            <div className='switch d-block' onClick={handlePower}>
                <div id='power' className='switch-btn' style={{'float': 'right'}}></div>
            </div>
            <p id='display' className='mt-3'>{power && label}</p>
            <div className='slider ' >
                <input className='vol' type='range' min='0' max='100' step='1' value={volume} onChange={handleVolumeChange} disabled={!power} />
            </div>
        </div>
    )
}

export default Controls