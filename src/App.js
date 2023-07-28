import {useState, useEffect} from 'react'
import Footer from './components/Footer.js' 
import Header from './components/Header.js';
import Modal from './components/Modal.js';
import Presentes from './components/Presentes.js';
import WhatsApp from './components/WhatsApp.js';
import CountdownTimer from './components/Timer.js'
import WeddingInfo from './components/info.js'
import LoveQuote from './components/frase.js'

function App() {
  const [modal,setModal] = useState(false);
  const [nome, setNome] = useState(null);
  const [email,setEmail] = useState(null);
  const [id,setId] = useState(null);
  const [dados, setDados] = useState(null);
  const getData = async() =>{
    const response = await fetch(process.env.REACT_APP_API_URL).then(r => r.json());
    await setDados(response);
  }
  useEffect( () => {
    getData();
  },[""])
  
  const targetDate = new Date('2024-02-24T16:00:00');
  return (
    <div id="mainContainer">
      <Header texto ="Texto do casamento da talita e da rafa"/>
      <LoveQuote/>
      <WeddingInfo/>
      <CountdownTimer targetDate={targetDate}/>
      <Presentes setModal = {setModal} setId={setId} dados ={dados}/>
      <WhatsApp numTelefone={"5511982813127"} mensagem ={"Olá gente linda!"}/>
      <Footer/>
      {modal?<Modal setModal={setModal} nome={nome} setNome={setNome} email={email} setEmail={setEmail} id={id} dados ={dados}/>:null}
    </div>
  );
}

export default App;
