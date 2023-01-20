import React from 'react';
import emailjs from '@emailjs/browser'

const Modal = ({nome, setNome , email, setEmail,setModal, id, dados}) => {
  const [display, setDisplay] = React.useState('none');
  const handleClose = (event) =>{
    event.preventDefault();
    setModal((state) => !state);
  };
  const testClick = (event) =>{
    if(event.target.id === 'modal'){
    setModal((state) => !state);
    }
  }

  const sendEmail = async() => {
    let templateParams = {
      nome:nome,
      email:email,
      titulo:dados.filter(dado => dado.id === id)[0].titulo,
      cor:dados.filter(dado => dado.id === id)[0].cor,
      linkLoja:dados.filter(dado => dado.id === id)[0].linkLoja,
    }
    await emailjs.send("service_3cxgp1n","template_pnoqhw5", templateParams,"zPhhnqzFxwlQOya3W");
  }

  const handleSubmit = async() =>{
    console.log(process.env.REACT_APP_API_URL+'/'+id);
    const response = await fetch(process.env.REACT_APP_API_URL+'/'+id, {
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
  
    sendEmail();
    await setDisplay('none');
    setTimeout(() =>{
      document.getElementById("obs").innerText = "Presente Enviado com sucesso"; 
    }, 1500);
    setTimeout(() =>{
      window.location.reload();
    }, 4000);
    
  }


  const handleClick = async (event) => {
    event.preventDefault();
    const checkbox = document.getElementById("concordo");
    const obs = document.getElementById("obs");
    const setHtml = (texto) =>{
      obs.innerHTML = texto;
    }
    if(nome === "" || nome === null ){
      setHtml("Por favor insira um nome válido");
      }
    else if(email === null || email === "" ){
      setHtml("Email inválido");
      }
    else if( (email!= null && email.indexOf("@") === -1)){
      setHtml("Não encontrado o caracter '@', por favor inserir email válido")
      }
    else if(email.indexOf('@') >= email.lastIndexOf('.')){
      setHtml("Não encontrado '.' depois de '@'por favor insira um email valido");
    }
    else if(!checkbox.checked){
      checkbox.style.cssText = 'background-color: ';
      obs.innerText = "Click na caixa de seleção antes de prosseguir";   
      setTimeout(() =>{checkbox.style.cssText = 'none';}, 3000)
    }
    else{
      event.target.innerText = "enviando...";
      setDisplay('block');
      const response = await fetch(process.env.REACT_APP_API_URL).then(r => r.json());
      if(response.filter(dado => dado.id === id)[0].presenteado){
        setHtml("item ja presenteado por outra pessoa, por favor recarregue a página")
      }
      else{
        handleSubmit();  
      }   
    };
    setTimeout(() =>{
      obs.innerText = "";
      event.target.innerText = "Presentear";
      setDisplay('none');
    }, 7000);
    
  }
  return (
    <div id="modal" onClick={testClick} >  
        <form id="modalForm"  type='submit' >
            <h1>{dados.filter(dado => dado.id === id)[0].titulo}</h1>
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
            <label htmlFor="concordo" className="labelTextoModal" required>Concordo em compartilhar o nome e Email passados com Rafaela e Talita</label>
            </div>
            <button className="highPass btn"  onClick={handleClick}>Presentear</button>
            <button onClick={handleClose} className="closeModal highPass" >X</button>
            <p style={{display: display}} className="carregando"></p>
            <p id='obs'></p>
        </form>
    </div>
  )
}

export default Modal;
