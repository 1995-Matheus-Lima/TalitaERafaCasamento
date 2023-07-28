import React, { useEffect } from 'react'
import RT0 from "../assets/RT0.png"
import RT1 from "../assets/RT1.png"
import RT2 from "../assets/RT2.png"
import RT3 from "../assets/RT3.png"
import RT4 from "../assets/RT4.png"
import RT5 from "../assets/RT5.png"
import RT6 from "../assets/RT6.png"
import RT7 from "../assets/RT7.png"

const Header = (props) => {
  const fotos = [RT0,RT1,RT2,RT3,RT4,RT5,RT6,RT7];
  const [estado, setEstado] = React.useState(0);
  const [foto, setFoto] = React.useState(fotos[estado]);

  useEffect(() => { 
    setTimeout(() => {
      if(estado >= 7 ){
        setEstado(0);
      }else{
        setEstado(e => (e +1));
      }
      setFoto(fotos[estado])
    } , 5000)}   
  ,[estado])


  return (
    <div id="containerSlide">
      <div>
      <div id="fimagePrincipal">
        <img src={foto} className='transitioning-image'/>
      </div>
      <div id="introduction">
        <h1>“No momento em que escolhemos amar, começamos a nos mover contra a dominação, contra a opressão. No momento em que escolhemos amar, começamos a nos mover em direção à liberdade, a agir de formas que libertam a nós e aos outros.”</h1>
        <p>Bell Hooks</p>
      </div>
      <div className='afterImage'></div>
      </div>
    </div>
  )
}

export default Header;