import React from 'react'

const Modal = ({nome, setNome , email, setEmail,modal,setModal}) => {
  const handleClose = (event) =>{
    event.preventDefault();
    setModal((state) => !state);
  };
  return (
    <div id="modal">  
        <form id="modalForm">
            <div className='textLike'>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" required/>
            </div>
            <div className='textLike'>
            <label htmlFor="email" >Email</label>
            <input type="email" id="email" required/>
            </div>
            <div>
            <input type="checkbox" id="Concordo" required/>
            <label htmlFor="Concordo" required>Concordo em compartilhar o nome e Email passados<br/>com Rafaela e Talita</label>
            </div>
            <button>Presentear</button>
            <button onClick={handleClose}>X</button>
        </form>
    </div>
  )
}

export default Modal;