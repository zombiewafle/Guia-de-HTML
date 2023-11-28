import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  //Creación del elemento de HTML
  return (
    <div className="body" onClick={incrementar}>
      <div className="contador">{contador}</div>
    </div>
  );
}

export default App;
