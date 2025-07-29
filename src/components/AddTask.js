import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onAdd = () => {
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task..."
        style={{ padding: '0.5rem', width: '60%' }}
      />
      <button onClick={onAdd} style={{ marginLeft: '0.5rem', padding: '0.5rem' }}>
        Add
      </button>
    </div>
  );
}
