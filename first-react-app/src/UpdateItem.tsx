// src/UpdateItem.tsx
import React, { useState } from 'react';

interface UpdateItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
    time?: string;
  };
  updateTodo: (id: number, newText: string, newTime: string) => void;
}

const UpdateItem: React.FC<UpdateItemProps> = ({ todo, updateTodo }) => {
  const [newText, setNewText] = useState(todo.text);
  const [newTime, setNewTime] = useState(todo.time || '');

  const handleUpdate = () => {
    if (newText.trim() !== '' || newTime.trim() !== '') {
      updateTodo(todo.id, newText, newTime);
    }
  };

  return (
    <div className="update-item">
      <h4>Update Item</h4>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="Update text"
      />
      {/* Renders an input field for updating the time of a todo item, and a button to trigger the update. */}
      <input
        type="hidden"
        value={newTime}
        onChange={(e) => setNewTime(e.target.value)}
        placeholder="Update time"
      />      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateItem;
