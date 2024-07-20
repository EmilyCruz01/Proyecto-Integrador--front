import React from 'react';

const Camara = ({ src }) => {
  return (
    <div>
      <img src={src} alt="monitoreo" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Camara;
