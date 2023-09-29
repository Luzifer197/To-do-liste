import React, { useState } from 'react';
import InputField from './InputField';
import ViewTodoList from './ViewTodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const onDelete = (indexToDelete: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(indexToDelete, 1);
    setTodos(updatedTodos);
  };

  const onEdit = (editedTodo: string) => {
    if (editIndex !== null) {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];
        updatedTodos[editIndex] = editedTodo;
        return updatedTodos;
      });
      setEditIndex(null);
    } else {
      // Hier kannst du eine Benachrichtigung auslösen oder anderweitig behandeln,
      // falls editIndex null ist und eine Bearbeitung ausgelöst wird.
      console.error("Es wurde kein Element zum Bearbeiten ausgewählt.");
    }
  };
  

  const addTodo = (newTodo: string) => {
    if (newTodo.trim() !== '') {
      if (editIndex !== null) {
        onEdit(newTodo); // Bearbeitungsmodus: Bearbeite das Todo
      } else {
        // Hinzufügen-Modus: Füge das neue Todo hinzu
        setTodos([...todos, newTodo]);
      }
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
      <ViewTodoList
        setEditIndex={setEditIndex}
        todos={todos}
        onDelete={onDelete}
        onEdit={onEdit}
        editIndex={editIndex}
      />
    </div>
  );
}

export default App;
