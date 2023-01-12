import React, { useEffect } from 'react';
import Presente from './Presente';


const Presentes = ({setModal}) => {
    const [dados, setDados] = React.useState(null);
    const handleClick = async() =>{
      const response = await fetch(process.env.REACT_APP_API_URL).then(r => r.json());
      console.log(response);
    }
  return (
    <div id="containerPresentes">
      <h1>Presentes</h1>
      <Presente setModal={setModal}/>
      <img/>
    </div>

  )
}

export default Presentes;