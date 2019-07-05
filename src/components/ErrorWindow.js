import React from 'react';

import WrapperConsumer from '../store';

const ErrorWindow = ({ context }) => {
  const { showErrorWin: { message } } = context;
  return <div style={{
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
      <tr key="0">
        <td>
          <h1>Oops!</h1>
          <b>{message}</b>
        </td>
      </tr>
    </table>
  </div>
};

export default WrapperConsumer(ErrorWindow);