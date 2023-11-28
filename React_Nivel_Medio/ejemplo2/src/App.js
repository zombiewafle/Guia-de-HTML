import React, { useState } from 'react';

// Hook personalizado para gestionar el estado de un formulario
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function App() {
  // Utilizamos el hook personalizado useFormInput para cada campo
  const nombre = useFormInput('');
  const apellido = useFormInput('');
  const email = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se podrían implementar validaciones y acciones al enviar el formulario
    alert(`Nombre: ${nombre.value}, Apellido: ${apellido.value}, Email: ${email.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...nombre} placeholder="Nombre" />
      <input type="text" {...apellido} placeholder="Apellido" />
      <input type="email" {...email} placeholder="Email" />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
