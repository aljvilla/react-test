import React from 'react';
import { WiRain, WiNightClear, WiNightAltPartlyCloudy, WiDaySunny, WiCloudy } from "weather-icons-react";

import WrapperConsumer from '../store';

const getIcon = (icon) => {
  switch (icon) {
    case 'rain': return <WiRain size={30} color='#fff' />
    case 'clear-night': return <WiNightClear size={30} color='#fff' />;
    case 'partly-cloudy-night': return <WiNightAltPartlyCloudy size={30} color='#fff' />;
    case 'cloudy': return <WiCloudy size={30} color='#fff' />;
    default:
      return <WiDaySunny size={30} color='#fff' />;
  }
}

const ErrorWindow = ({ context }) => {
  const { showErrorWin: { message } } = context;
  return <div className="aqui" style={{
    color: 'white',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 190,
    background: 'red',
    transform: 'translate(-50%, -50%)'
  }}>
    <table style={{ width: '100%', border: 0 }}>
      <tr>
        <td>
          <h1>Oops!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <b>{message}</b>
        </td>
      </tr>
    </table>
  </div>
};

export default WrapperConsumer(ErrorWindow);