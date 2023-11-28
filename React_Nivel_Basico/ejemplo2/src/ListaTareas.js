import React, { useState } from 'react';

const ListaTareas = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea) {
      setTareas([...tareas, { id: Date.now(), texto: tarea, completada: false }]);
      setTarea('');
    }
  };

  const toggleCompletada = (id) => {
    const nuevasTareas = tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(nuevasTareas);
  };

  const removerTarea = (id) => {
    const tareasFiltradas = tareas.filter(t => t.id !== id);
    setTareas(tareasFiltradas);
  };

  return (
    <div>
      <input 
        value={tarea} 
        onChange={(e) => setTarea(e.target.value)} 
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        {tareas.map(t => (
          <li key={t.id} style={{ textDecoration: t.completada ? 'line-through' : 'none' }}>
            <span onClick={() => toggleCompletada(t.id)}>
              {t.texto}
            </span>
            
            <button onClick={() => removerTarea(t.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
