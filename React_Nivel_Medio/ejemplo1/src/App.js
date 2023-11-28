import React, { useState, useEffect } from 'react';

const Tarea = ({ tarea, toggleCompletada, eliminarTarea }) => (
  <div style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
    {tarea.texto}
    <button onClick={() => toggleCompletada(tarea.id)}>Completar</button>
    <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
  </div>
);

function App() {
  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem('tareas')) || []
  );
  const [textoTarea, setTextoTarea] = useState('');

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nuevaTarea = { id: Date.now(), texto, completada: false };
    setTareas([...tareas, nuevaTarea]);
  };

  const toggleCompletada = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textoTarea) {
      agregarTarea(textoTarea);
      setTextoTarea('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={textoTarea}
          onChange={(e) => setTextoTarea(e.target.value)}
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          toggleCompletada={toggleCompletada}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  );
}

export default App;
