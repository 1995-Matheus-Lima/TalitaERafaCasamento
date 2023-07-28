import React, { useEffect } from 'react';
import Presente from './Presente';


const Presentes = ({setModal,setId,dados}) => {
  
  return (
    <div id="containerPresentes">
      <h1>Presentes</h1>
      <div id="presentesInfo">
      <p>
        Agora que você já sabe como chegar e o que levar para aproveitar o nosso grande dia, que tal selecionar o que pretende nos dar de presente?
        Logo abaixo, você pode conferir a lista de itens que gostaríamos de ganhar para que a nossa casa fique ainda mais incrível. Por isso, antes de selecionar o que você quer nos dar, confira as principais informações sobre essa etapa:
      </p>
      <ul>
        <li>Observe as descrições dos itens, como a cor e o tamanho, antes de realizar a compra.</li>
        <li>Colocamos uma loja indicada para a compra, mas caso você encontre o mesmo presente por um preço mais em conta ou até mesmo em uma loja física, pode comprar normalmente e nos enviar para o endereço indicado abaixo.</li>
        <li>Vai comprar em uma loja física ou em uma loja diferente da que indicamos? <ul><li>Lembre-se de marcar que você vai nos dar o presente X ou Y. Assim, esse presente vai sair do site e evita que outra pessoa nos dê o mesmo item.</li></ul></li>
        <li>Caso você queira dividir um presente com outro convidado, não tem problema. Basta nos avisar pelo WhatsApp (31) 97118-9951, assim conseguimos agradecer as duas ou mais pessoas responsáveis pela compra.</li>
        <li>Caso você queira nos enviar o valor do presente, marque a compra normalmente no site e envie o valor para o PIX XXXXX.</li>
      </ul>
      <h2>Dados para envio de presentes</h2>
        <ul>
          <li>Endereço: Rua Mafra 600, Apartamento 403, Bairro Coqueiros, Belo Horizonte - CEP 30.880-452</li>
          <li>Nome para entrega: Rafaela Cristina de Souza</li>
        </ul>
    </div>
    <div id='giftShown'>
      {dados&& (dados.filter(dado => !dado.presenteado)).map((dado) => {
        return(
        <Presente key={dado.id} dado ={dado}  setModal={setModal} setId={setId}/>
        )
      })}
    </div> 
    </div>

  )
}

export default Presentes;