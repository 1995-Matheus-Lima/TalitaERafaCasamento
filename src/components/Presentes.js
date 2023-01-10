import React from 'react';


const Presentes = () => {
    const [dados, setDados] = React.useState(null);
    const handleClick = async() =>{
        const response = await fetch(process.env.REACT_APP_API_URL).then(r => r.json());
        console.log(response);
    }
  return (
    <button onClick ={handleClick}>Get Data</button>
  )
}

export default Presentes;