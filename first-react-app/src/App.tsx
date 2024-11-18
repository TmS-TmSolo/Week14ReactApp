// src/App.tsx

// At this point, your project must meets these requirements:

// It has at least 3 React components

// A component is a function that returns JSX and components are used like they’re an HTML element

// main.tsx does not count as a component, it doesn’t have a function that returns JSX

// It’s displaying the test data

// You can put your array of data in whatever file you want, or even in its own file

// It’s using at least 1 prop on your own components

// A prop is set like it’s an HTML attribute, and received as a destructured parameter property

// key does not count for this, you need to come up with your own prop and practice setting it and receiving it

// No red errors/warnings in the console in the browser

// No type errors in VS Code

import './App.css';
import TodoList from './ToDoList';
import { useState } from 'react';
import { testData } from './testdata';

/**
 * Test Data: An array of initial todo items, used to initialize the todos state in the App component.
 * Each todo item has an id, text, and completed status.
 */
const initialTodos: Todo[] = testData.map(item => ({
  id: Number(item.id),
  text: item.task,
  completed: item.completed
}));

/**
 * Represents a single to-do item with an ID, text description, and completion status.
 */
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

/**
 * The main React component that renders the To-Do List application.
 * It manages the state of the todo items, provides functionality to add, toggle, and delete todos, and renders the TodoList component to display the todo items.
 */
function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  /**
   * Adds a new todo item to the list.
   * If the input is empty (or only whitespace), the function returns without adding a todo.
   * Creates a new todo item with a unique ID (using current timestamp),
   * the text from input, and sets it as not completed.
   * Adds the new todo to the beginning of the list and clears the input field.
   */
  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([newTodoItem, ...todos]);
    setNewTodo('');
  };

  /**
   * Toggles the completed status of a todo item with the specified ID.
   */
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
export default App;
