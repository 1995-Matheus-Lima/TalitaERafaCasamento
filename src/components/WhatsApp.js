import AppImg from "../assets/whatsapp.png"

const WhatsApp = ({numTelefone, mensagem}) => {
  
  return (
    <div id="whatsapp">
      <h3>Fique a vontade para nos mandar qualquer dúvida que tiver sobre os presentes, segue abaixo o whats da Rafa</h3>
      <a href={`https://api.whatsapp.com/send?phone=${numTelefone}
      &text=${mensagem}`} target="_blank" rel="noopener" >
      <p>Conversar com Rafa</p>
      <img id="wp-icon" src={AppImg} alt="Clique aqui para falar com a gente pelo Whatsapp!"/>
      </a>
    </div>
  )
}

export default WhatsApp;