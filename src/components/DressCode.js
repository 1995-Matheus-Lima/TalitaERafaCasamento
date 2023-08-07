import React from 'react';

const DressCode = () => {
  const styleul = {marginRight:'30px',display:'flex',Width:'100%',justifyContent:'space-around',listStyle:'none',flexWrap: 'wrap',}
  
  return (
    <div id='DressCode'>
      <h1>Dress Code</h1>
      <p>A paleta abaixo é para as madrinhas e para os padrinhos, mas fiquem à vontade para usarem se quiserem:</p>
      <ul style={styleul} className='colorsDC'>
        <li className = 'cor' style={{backgroundColor:'#C1C2C1'}}></li>
        <li className = 'cor' style={{backgroundColor:'#67764D'}}></li>
        <li className = 'cor' style={{backgroundColor:'#8E9B6D'}}></li>
        <li className = 'cor' style={{backgroundColor:'#D5C7AA'}}></li>
        <li className = 'cor' style={{backgroundColor:'#94693F'}}></li>
      </ul>
      <p>estamos ansiosas para compartilhar essa celebração memorável com todos vocês vestidos com muito amor e estilo!</p>
    </div>
  );
};

export default DressCode;
