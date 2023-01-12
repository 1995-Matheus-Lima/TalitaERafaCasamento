import {useState} from 'react'
import Footer from './components/Footer.js' 
import Header from './components/Header.js';
import Modal from './components/Modal.js';
import Presentes from './components/Presentes.js';


function App() {
  const [modal,setModal] = useState(false);
  const [nome, setNome] = useState(null);
  const [email,setEmail] = useState(null);
  
  const handleClick = () =>{
    setModal((e) => !e);
  }
  return (
    <div id="mainContainer">
      <Header texto ="Texto do casamento da talita e da rafa"/>
      <Presentes setModal = {setModal}/>
      <Footer/>
      <button onClick = {handleClick}>{modal?'fechar Modal':'Abrir Modal'}</button>
      {modal?<Modal setModal={setModal} modal={modal}/>:null}
    </div>
  );
}

export default App;
