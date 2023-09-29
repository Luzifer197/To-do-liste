import React from 'react';
import EditTodoList from './EditTodoList';
import './App.css';

interface ViewTodoListProps {
  todos: string[]; // Typisierung für das 'todos'-Prop
  onDelete: (indexToDelete: number) => void; // Typisierung für die onDelete-Funktion
  editIndex: number | null; // Benenne 'index' um, um Verwirrung zu vermeiden
  onEdit: (editedTodo: string) => void;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>; // Hier EditIndex als Props hinzugefügt
}

const ViewTodoList: React.FC<ViewTodoListProps> = ({ todos, onDelete, onEdit, editIndex, setEditIndex }) => {

  const handleEdit = (index: number) => {
    setEditIndex(index); // Verwende setEditIndex aus den Props
  };

  return (
    <ul className="task-list">
      {todos.map((todo, index) => (
        <li className="task" id="ToDoElement" key={index}>
          <div className="task-content">
            {index === editIndex ? (
              <EditTodoList
                todos={todos}
                onEdit={onEdit}
                index={index}
              />
            ) : (
              <span className="text">{todo}</span>
            )}
          </div>
          <div className="actions">
            {index !== editIndex ? (
              <button id="TaskEdit" onClick={() => handleEdit(index)}>
                Bearbeiten
              </button>
            ) : null}
            <button id="TaskDelete" onClick={() => onDelete(index)}>
              Löschen
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ViewTodoList;
