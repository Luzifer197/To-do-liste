// InputField.tsx
import React from 'react';

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

  return (
    <div id="new-task-form">
      <input
        type={type} // Hier den "type"-Wert verwenden
        id="new-task-input"
        placeholder={placeholder}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button id="new-task-submit" onClick={addTodo}>
        Hinzufügen
      </button>
    </div>
  );
};

export default InputField;
