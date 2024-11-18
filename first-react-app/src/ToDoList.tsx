// src/TodoList.tsx
import React from 'react';
import { TodoItem } from './ToDoItem';

/**
 * Represents a single todo item with an id, text, and completion status.
 */
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
