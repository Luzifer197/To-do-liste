import React from 'react';
import './App.css';

interface InputFieldProps {
  type: string; // Hier den Typ des input-Elements festlegen
  placeholder: string;
  onAdd: (newTodo: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, onAdd }) => {
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = () => {
    onAdd(newTodo);
    setNewTodo('');
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div id="new-task-form">
      <input
        type={type} // Hier den "type"-Wert verwenden
        id="new-task-input"
        placeholder={placeholder}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleInputKeyPress}
      />
      <button id="new-task-submit" onClick={addTodo}>
        Hinzufügen
      </button>
    </div>
  );
};

export default InputField;
