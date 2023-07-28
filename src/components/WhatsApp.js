import AppImg from "../assets/whatsapp.png"

const WhatsApp = ({numTelefone, mensagem}) => {
  
  return (
    <div id="whatsapp">
      <a href={`https://api.whatsapp.com/send?phone=${numTelefone}
      &text=${mensagem}`} target="_blank" rel="noopener" >
      <p>Conversar com Talita e Rafa</p>
      <img id="wp-icon" src={AppImg} alt="Clique aqui para falar com a gente pelo Whatsapp!"/>
      </a>
    </div>
  )
}

export default WhatsApp;