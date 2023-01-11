import React from 'react'

const Modal = ({nome, setNome , email, setEmail,modal,setModal}) => {
  const handleClose = (event) =>{
    event.preventDefault();
    setModal((state) => !state);
  };
  const testClick = (event) =>{
    if(event.target.id == 'modal'){
    setModal((state) => !state);
    }
  }
  return (
    <div id="modal" onClick={testClick}>  
        <form id="modalForm">
            <div className='textLike'>
                <label htmlFor="nome" className="highPass">Nome</label>
                <input type="text" id="nome" required/>
            </div>
            <div className='textLike'>
            <label htmlFor="email" className="highPass">Email</label>
            <input type="email" id="email" required/>
            </div>
            <div>
            <input type="checkbox" id="concordo" required/>
            <label htmlFor="concordo" className="labelTextoModal" required>Concordo em compartilhar o nome e Email passados<br/>com Rafaela e Talita</label>
            </div>
            <button className="highPass btn">Presentear</button>
            <button onClick={handleClose} className="closeModal highPass" >X</button>
        </form>
    </div>
  )
}

export default Modal;