import React, { useEffect } from 'react';
import Presente from './Presente';


const Presentes = ({setModal,setId,dados}) => {
  
  return (
    <div id="containerPresentes">
      <h1>Presentes</h1>
      {dados&& (dados.filter(dado => !dado.presenteado)).map((dado) => {
        return(
         <Presente key={dado.id} dado ={dado}  setModal={setModal} setId={setId}/>
        )
      })}
      <img/>
    </div>

  )
}

export default Presentes;