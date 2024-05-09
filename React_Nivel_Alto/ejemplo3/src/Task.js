import React from 'react';

const Task = React.memo(({ task, onToggle }) => {
  console.log(`Rendering: ${task.text}`);
  return (
    <li
      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(task.id)}
    >
      {task.text}
    </li>
  );
});

export default Task;
