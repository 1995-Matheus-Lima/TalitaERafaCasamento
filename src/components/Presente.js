import React from 'react'

const Presente = ({setModal}) => {
  return (
    <div id="containerPresente">
        <div>
            <img src={"https://imgcloud.com.br/share/a94EuAF9TkKcEOFW"}></img>
        </div>
        <div>
            <h1>{"presentinho Titulo"}</h1>
            <h2>Cor: {"uma cor"}</h2>
            <h2>link: <a href ={"https://www.linkedin.com/in/matheus-henrique-275411151/"} target='_blank'>Sugestão de loja</a></h2>
            <button className='highPass' onClick={setModal}>Presentear</button>
        </div>
    </div>
  )
}

export default Presente