import React, {useState} from 'react';
import './App.css'
import Pad from './Components/Pad'
import Control from './Components/Controls'

function App() {
  const [label, setLabel] = useState('');
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState('')

  const handleData = (data) => {
    setLabel(data);
  }

  const handlePower = (getPower) => {
    setPower(getPower)
  }

  const handleVolume = (getVol) => {
    setVolume(getVol)
  }

  return (
    <div className='App '>
      <div className='row align-items-center justify-content-center'>
          <Pad onDataChange={handleData} volume={volume} power={power} />
          <Control onPowerChange={handlePower} onVolumeChange={handleVolume} data={label}/>
      </div>
    </div>
  );
}

export default App;