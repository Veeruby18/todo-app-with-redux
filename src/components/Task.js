import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTask } from '../tasksSlice';

export default function Task({ id, description, isDone }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(description);

  const saveEdit = () => {
    dispatch(editTask({ id, description: text }));
    setEditMode(false);
  };

  return (
    <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => dispatch(toggleDone(id))}
      />
      {editMode ? (
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          style={{ margin: '0 0.5rem', flex: 1 }}
        />
      ) : (
        <span
          style={{
            margin: '0 0.5rem',
            textDecoration: isDone ? 'line-through' : 'none',
            flex: 1
          }}
        >
          {description}
        </span>
      )}
      {editMode ? (
        <button onClick={saveEdit} style={{ marginLeft: '0.5rem' }}>Save</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
}
