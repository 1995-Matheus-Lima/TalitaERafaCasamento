import React, { useEffect } from 'react'
import RT0 from "../assets/RT0.png"
import RT1 from "../assets/RT1.png"
import RT2 from "../assets/RT2.png"
import RT3 from "../assets/RT3.png"
import RT4 from "../assets/RT4.png"
import RT5 from "../assets/RT5.png"
import RT6 from "../assets/RT6.png"
import RT7 from "../assets/RT7.png"
import RT8 from "../assets/RT8.png"
import RT9 from "../assets/RT9.png"

const Header = (props) => {
  const fotos = [RT0,RT1,RT2,RT3,RT4,RT5,RT6,RT7,RT8,RT9];
  const [estado, setEstado] = React.useState(0);
  const [foto, setFoto] = React.useState(fotos[estado]);

  useEffect(() => { 
    setTimeout(() => {
      console.log(estado)
      if(estado >= 9 ){
        setEstado(0);
      }else{
        setEstado(e => (e +1));
      }
      setFoto(fotos[estado])
    } , 3000)}   
  ,[estado])


  return (
    <div id="containerSlide">
      <div className='beforeImage'></div>
      <div>
        <img src={foto}/>
      </div>
      <div id="introduction">
        <h1>“ Lorem ipsum dolor sit amet, consecteturadipiscing elit. Morbi porta leo id aliquet sagittis.Nulla blandit
sapien vitae sagittis euismod.“</h1>
        <p>Rafaela e Talita</p>
      </div>
      <div className='afterImage'></div>
    </div>
  )
}

export default Header;