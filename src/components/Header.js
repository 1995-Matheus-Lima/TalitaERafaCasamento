import React, { useEffect } from 'react'
import RT0 from "../assets/RT0.png"
import RT1 from "../assets/RT1.png"
import RT2 from "../assets/RT2.png"
import RT3 from "../assets/RT3.png"
import RT4 from "../assets/RT4.png"
import RT5 from "../assets/RT5.png"


const Header = (props) => {
  const fotos = [RT0,RT1,RT2,RT3,RT4,RT5];
  const [estado, setEstado] = React.useState(0);
  const [foto, setFoto] = React.useState(fotos[estado]);

  useEffect(() => { 
    setTimeout(() => {
      if(estado >= 5 ){
        setEstado(0);
      }else{
        setEstado(e => (e +1));
      }
      setFoto(fotos[estado])
    } ,3000)}   
  ,[estado])


  return (
    <div id="containerSlide">
      <div>
      <div className='beforeImage'></div>
      <div id="fimagePrincipal">
        <img src={foto} className='transitioning-image'/>
      </div>
      <div className='afterImage'></div>
      </div>
    </div>
  )
}

export default Header;