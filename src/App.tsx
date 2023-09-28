import React, { useState } from 'react';
import InputField from './InputField';
import TodoList from './TodoList';
import './App.css';

interface AppProps {} // Füge hier deine Props hinzu, wenn benötigt

function App({}: AppProps) {
  const [todos, setTodos] = useState<string[]>([]);

  const onDelete = (indexToDelete: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(indexToDelete, 1);
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo: string) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div className="App">
      <h1>ToDo-Liste</h1>
      <InputField
        type="text"
        placeholder="Neues ToDo hinzufügen"
        onAdd={addTodo}
      />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;