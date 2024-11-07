import { useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input1.length < 3 || input1.trim() === '' || input2.length < 6) {
      setError('Existe un error con los datos ingresados.');
      setShowCard(false);
    } else {
      setError('');
      setShowCard(true);
    }

  }

  return (
    <div className="App">
      <h1>Ingresa tus Datos Personales</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Primer Nombre: 
          <input 
            type="text" 
            value={input1}  
            onChange={(e)=> setInput1(e.target.value)}
          />
        </label>
        <br />
        <label>
          Dos Apellidos: 
          <input 
            type="text" 
            value={input2}
            onChange={(e)=> setInput2(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;
