import React, { useState, useCallback } from 'react';
import Task from './Task';

const initialTasks = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Read about useCallback", completed: false },
  { id: 3, text: "Implement a project", completed: false }
];

const TasksList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [count, setCount] = useState(0);

  const toggleTask = useCallback((id) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </ul>
      <button onClick={() => setCount(c => c + 1)}>Increment Count ({count})</button>
    </div>
  );
};

export default TasksList;
