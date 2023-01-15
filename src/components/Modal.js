import React from 'react'

const Modal = ({nome, setNome , email, setEmail,setModal, id}) => {
  const handleClose = (event) =>{
    event.preventDefault();
    setModal((state) => !state);
  };
  const testClick = (event) =>{
    if(event.target.id === 'modal'){
    setModal((state) => !state);
    }
  }
  const handleSubmit = async() =>{
    console.log(process.env.REACT_APP_API_URL+'/'+id);
    await fetch(process.env.REACT_APP_API_URL+'/'+id, {
      method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
        nome:nome,
        email:email,
        presenteado:true
      })
    })
    window.location.reload();
  }
  const handleClick = async (event) => {
    event.preventDefault();
    const checkbox = document.getElementById("concordo");
    const obs = document.getElementById("obs");
    const setHtml = (texto) =>{
      obs.innerHTML = texto;
    }
    if(nome === "" || nome === null ) {
      setHtml("Por favor insira um nome válido");
      }
    else if(email === null || email === "" ||  ( email!= null && email.indexOf("@") === -1)){
      if( (email!= null && email.indexOf("@") === -1)){
        setHtml("Email inválido, @ não encontrado");
      }
    }
    else if(email.indexOf('@') >= email.lastIndexOf('.')){
      setHtml("Não encontrado '.' depois de '@'por favor insira um email valido");
    }
    else if(!checkbox.checked){
      checkbox.style.cssText = 'background-color: ';
      obs.innerText = "Click na caixa de seleção antes de prosseguir";   
      setTimeout(() =>{checkbox.style.cssText = 'none';}, 3000)
    }
    else{handleSubmit()};

    setTimeout(() =>{obs.innerText = ""}, 3000);
  }
  return (
    <div id="modal" onClick={testClick} >  
        <form id="modalForm"  type='submit' >
            <div className='textLike'>
            <label htmlFor="nome" className="highPass">Email</label>
            <input type="text"  onChange={(e) => setNome(e.target.value)}id="nome" required/>
            </div>
            <div className='textLike'>
            <label htmlFor="email" className="highPass">Email</label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
            <input type="checkbox" id="concordo" required/>
            <label htmlFor="concordo" className="labelTextoModal" required>Concordo em compartilhar o nome e Email passados<br/>com Rafaela e Talita</label>
            </div>
            <button className="highPass btn"  onClick={handleClick}>Presentear</button>
            <p id='obs'></p>
            <button onClick={handleClose} className="closeModal highPass" >X</button>
        </form>
    </div>
  )
}

export default Modal;
