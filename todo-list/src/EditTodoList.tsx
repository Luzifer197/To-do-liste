// EditTodoList.tsx
import React, { useState } from 'react';
import './App.css';

interface EditTodoListProps {
  todos: string[];
  onEdit: (editedTodo: string) => void;
  index: number | null;
}

const EditTodoList: React.FC<EditTodoListProps> = ({ todos, onEdit, index }) => {
  const [editedTodos, setEditedTodos] = useState<string[]>(todos);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEditedTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      if (index !== null) {
        newTodos[index] = value;
      }
      return newTodos;
    });
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && index !== null) {
      onEdit(editedTodos[index]);
    }
  };

  return (
    <div>
      {editedTodos.map((todo, idx) => (
        <div key={idx}>
          <input
            type="text"
            placeholder={todo}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      ))}
      <button id='TaskEdit' onClick={() => onEdit(editedTodos[index !== null ? index : 0])}>Speichern</button>
    </div>
  );
};

export default EditTodoList;
