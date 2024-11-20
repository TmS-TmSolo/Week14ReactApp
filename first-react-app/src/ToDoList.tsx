// src/TodoList.tsx
import React from 'react';
import { TodoItem } from './ToDoItem';
import UpdateItem from './UpdateItem';

/**
 * Represents a single todo item with an id, text, and completion status.
 */
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  time?: string; // New property for time
}

/**
 * Props for the TodoList component, which includes:
 * - The array of todos to display
 * - Functions to toggle, delete, and update todos
 */
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newText: string, time?: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-container">
          {/* Render the TodoItem */}
          <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          
          {/* Render the UpdateItem for updating this specific todo */}
          <UpdateItem todo={todo} updateTodo={updateTodo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
