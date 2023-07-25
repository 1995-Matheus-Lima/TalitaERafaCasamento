import React from 'react'

const Presente = ({setModal,setId,dado}) => {
  const handleClick = () =>{
    setId(dado.id);
    setModal(e => !e);
  }
  return (
    <div id="containerPresente">
        <div>
            <img src={dado.linkImage}></img>
        </div>
        <div className={'infoPresentes'}>
            <h1>{dado.titulo}</h1>
            <h2>Cor:  &nbsp;&nbsp;&nbsp;&nbsp;{dado.cor}</h2>
            <h2>link: <a href ={dado.linkLoja} target='_blank'>Sugestão de loja</a></h2>
            <button className='highPass' onClick={handleClick}>Presentear</button>
        </div>
    </div>
  )
}

export default Presente
