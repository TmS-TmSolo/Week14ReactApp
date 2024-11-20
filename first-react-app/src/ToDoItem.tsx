// src/TodoItem.tsx
import React from 'react';

/**
 * Defines the props for the TodoItem component.
 * 
 * @property {object} todo - An object representing a todo item, with properties for the id, text, and completion status.
 * @property {function} toggleTodo - A function that toggles the completion status of a todo item.
 * @property {function} deleteTodo - A function that deletes a todo item.
 */
interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
    time?: string;
  };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <h3 onClick={() => toggleTodo(todo.id)}>{todo.text}</h3>
      {todo.time && <p>{todo.time}</p>}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};