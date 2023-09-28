import React, { useState } from 'react';
import './App.css';

interface TodoListProps {
  todos: string[]; // Typisierung für das 'todos'-Prop
  onDelete: (indexToDelete: number) => void; // Typisierung für die onDelete-Funktion
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  const [editedTodos, setEditedTodos] = useState<string[]>(todos);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setEditIndex(index);
  };

  const handleEditConfirm = (index: number) => {
    if (editIndex === index) {
      // Save the edited todo and reset the edit index
      setEditedTodos((prevTodos) => {
        const newTodos = [...prevTodos];
        newTodos[index] = editedTodos[index];
        return newTodos;
      });
      setEditIndex(null);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;

    setEditedTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index] = value;
      return newTodos;
    });
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Enter') {
      handleEditConfirm(index);
    }
  };

  return (
    <ul className="task-list">
      {todos.map((todo, index) => (
        <li className="task" id="ToDoElement" key={index}>
          <div className="task-content">
            {editIndex === index ? (
              <input
                id='ToDoEdit'
                type="text"
                value={editedTodos[index]}
                onChange={(e) => handleInputChange(e, index)}
                onKeyPress={(e) => handleInputKeyPress(e, index)}
              />
            ) : (
              <span className="text">{editedTodos[index]}</span>
            )}
          </div>
          <div className="actions">
            {editIndex === index ? (
              <button id="TaskEdit" onClick={() => handleEditConfirm(index)}>
                Bestätigen
              </button>
            ) : (
              <button id="TaskEdit" onClick={() => handleEdit(index)}>
                Bearbeiten
              </button>
            )}
            <button id="TaskDelete" onClick={() => onDelete(index)}>
              Löschen
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
