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
            <h2>{dado.titulo}</h2>
            <h3>Cor:  &nbsp;&nbsp;&nbsp;&nbsp;{dado.cor}</h3>
            <h3>link: <a href ={dado.linkLoja} target='_blank'>Sugestão de loja</a></h3>
            <button className='highPass' onClick={handleClick}>Presentear</button>
        </div>
    </div>
  )
}

export default Presente
