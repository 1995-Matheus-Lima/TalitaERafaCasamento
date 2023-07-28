import React from 'react';

const WeddingInfo = () => {
  return (
    <div id="infoContainer">
      <div id="infoContent">
        <h1>Dicas para o grande dia!</h1>
        <h2>Data e horário da cerimônia:</h2>
        <ul>
          <li>24 de fevereiro de 2023, às 16h</li>
        </ul>
        <h2>O local do casamento:</h2>
        <ul>
          <li>Nome do sítio: Espaço Taj Mahal</li>
          <li>Endereço: R. Cinco, 308 - Chácaras Reunidas Santa Terezinha Contagem - MG 32150-340</li>
          <li>Como chegar de ônibus:<ul> <li>Ônibus que passa na porta: 101D - Vale das Amendoeiras &lt;-&gt; Cidade Industrial</li></ul></li>
        </ul>
        <h2>Informações adicionais sobre o local:</h2>
        <ul>
          <li>Vai ficar para dormir?<ul><li>Por favor, leve lençol e coberta!</li></ul></li>
          <li>Além disso, a piscina e a sauna são liberadas para os nossos convidados, então não se esqueça de levar protetor solar, roupa de banho e toalhas!</li>
        </ul>
      </div>
    </div>
  );
};

export default WeddingInfo;
