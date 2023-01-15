import React, { useEffect } from 'react';
import Presente from './Presente';


const Presentes = ({setModal,setId}) => {
    const [dados, setDados] = React.useState(null);
    const getData = async() =>{
      const response = await fetch(process.env.REACT_APP_API_URL).then(r => r.json());
      await setDados(response);
    }
    useEffect( () => {
      getData();
    },[""])
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