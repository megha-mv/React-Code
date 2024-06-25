import React from 'react';

const TrafficLights = ({ color }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: color === 'red' ? 'red' : 'gray',
        margin: '10px auto'
      }} />
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: color === 'yellow' ? 'yellow' : 'gray',
        margin: '10px auto'
      }} />
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: color === 'green' ? 'green' : 'gray',
        margin: '10px auto'
      }} />
    </div>
  );
};

export default TrafficLights;
