import {useState} from 'react'
import Footer from './components/Footer.js' 
import Header from './components/Header.js';
import Modal from './components/Modal.js';
import Presentes from './components/Presentes.js';


function App() {
  const [modal,setModal] = useState(false);
  const [nome, setNome] = useState(null);
  const [email,setEmail] = useState(null);
  const [id,setId] = useState(null);

  return (
    <div id="mainContainer">
      <Header texto ="Texto do casamento da talita e da rafa"/>
      <Presentes setModal = {setModal} setId={setId}/>
      <Footer/>
      {modal?<Modal setModal={setModal} nome={nome} setNome={setNome} email={email} setEmail={setEmail} id={id}/>:null}
    </div>
  );
}

export default App;
